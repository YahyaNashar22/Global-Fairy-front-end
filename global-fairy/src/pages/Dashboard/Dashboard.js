import React, { useEffect, useState } from 'react';
import style from './Dashboard.module.css';
import pen from '../../assets/icons/pen 1.png';
import deleteicon from '../../assets/icons/delete 1.png';
import viewicon from '../../assets/icons/show 1.png';
import logo from '../../assets/images/logo.jpg';
import axios from "axios"
import { Link } from 'react-router-dom';
const Dashboard = () => {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/product/get')
            if (response) {
                setProducts(response.data)
                products ? console.log(products) : console.log("nulllllll")

            }
            else {
                console.log("there is no response")
            }
        }
        catch (error) {
            console.log(error.message)
        }
    }

    const deleteProduct= async(id)=>{
        const confirm = window.confirm(`Are you sure you want to delete this products ?`)
        if (confirm){
            try{
             await axios.delete(`http://localhost:5000/product/delete?id=${id}`)
             getProducts()

            }
            catch(error){
                console.log(error.message)
            }

        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>

            <div className={style.hed}>
                <div className={style.title}>
                    <img className={style.logoImage} src={logo} alt="logo" />
                    <p>dashbord admin </p>
                </div>
                <div className={style.submit}><br />
                <Link to="/actions/Addproduct"> 
                    <input type="submit" value="Add " /></Link>
                </div>
            </div>
            <div className={style.searchTitle}>
                <h1>PRODUCT</h1>
                <div>
                    <div className={style.searchValue}>
                        <select className={style.tableInput}>
                            <option value="id">ID</option>
                            <option value="name">Name</option>
                            <option value="brand">Brand</option>
                            <option value="category">Category</option>
                            <option value="color">Color</option>
                            <option value="">Brand</option>
                            <option value="size">Size</option>
                            <option value="price">Price</option>
                            <option value="quantity">quantity</option>
                        </select>
                        <input className={style.tableInput} type="text" placeholder="Enter something" />
                    </div>
                </div>
            </div>
            <div className={style.container}>
                <table className={style.table1}>
                    <thead>
                        <tr>
                            <th>#ID</th>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Category</th>
                            <th>SubCategory</th>
                            <th>Sizes</th>
                            <th>Price</th>
                            <th>Colors</th>
                            <th>Images</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products!==null?
                            products.map((product) => {
                                const allSizes = product.details.map(detail => detail.sizes).flat()
                                const uniqueSizes = [...new Set(allSizes)]
                                const colors = product.details.map(detail => detail.color)
                                const quantity = product.details.reduce((acc, detail) => acc + detail.stock, 0)



                                return (
                                    <tr>
                                        <td>{product._id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.brand.name}</td>
                                        <td>{product.category.name}</td>
                                        <td>{product.subCategory.name}</td>
                                        <td>{uniqueSizes.join(',')}</td>
                                        <td>${product.price}</td>
                                        <td>{colors}</td>
                                        <td>{product.images.length} Images</td>
                                        <td>{quantity}</td>
                                        <td className={style.iconCell}>
                                            <img className={style.icon} src={pen} alt="Icon 1" />
                                            <img className={style.icon} src={viewicon} alt="Icon 2" />
                                            <img className={style.icon} src={deleteicon} alt="Icon 3" onClick={()=>deleteProduct(product._id)} />
                                        </td>
                                    </tr>
                                )

                            }

                            ) : 
                                              <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td></td>
            <td className={style.iconCell}>
                <img className={style.icon} src={pen } alt="Icon 1"/>
                <img className={style.icon} src={viewicon} alt="Icon 2"/>
                <img className={style.icon} src={deleteicon} alt="Icon 3"/>
            </td>
        </tr> 
                        }



                        {/* <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className={style.iconCell}>
                <img className={style.icon} src={pen } alt="Icon 1"/>
                <img className={style.icon} src={viewicon} alt="Icon 2"/>
                <img className={style.icon} src={deleteicon} alt="Icon 3"/>
            </td>
        </tr> */}


                        {/* <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className={style.iconCell}>
                <img className={style.icon} src={pen } alt="Icon 1"/>
                <img className={style.icon} src={viewicon} alt="Icon 2"/>
                <img className={style.icon} src={deleteicon} alt="Icon 3"/>
            </td>
        </tr> */}


                        {/* <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td></td>
            <td className={style.iconCell}>
                <img className={style.icon} src={pen } alt="Icon 1"/>
                <img className={style.icon} src={viewicon} alt="Icon 2"/>
                <img className={style.icon} src={deleteicon} alt="Icon 3"/>
            </td>
        </tr> */}


                        {/* <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td></td>
            <td className={style.iconCell}>
                <img className={style.icon} src={pen } alt="Icon 1"/>
                <img className={style.icon} src={viewicon} alt="Icon 2"/>
                <img className={style.icon} src={deleteicon} alt="Icon 3"/>
            </td>
        </tr> */}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Dashboard;