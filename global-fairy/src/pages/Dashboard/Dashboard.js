import React from 'react';
import style from './Dashboard.module.css';
import pen from '../../assets/icons/pen 1.png';
import deleteicon from '../../assets/icons/delete 1.png';
import viewicon from '../../assets/icons/show 1.png'; 
import logo from '../../assets/images/logo.jpg';

const Dashboard = () => {
return(
    <div>

<div className={style.hed}>
        <div className={style.title}>
        <img className={style.logoImage} src={logo } alt="logo"/>
    <p>dashbord admin </p>
    </div>
    <div className={style.submit}><br/>
        <input type="submit" value="Add "/>
        </div>
</div>
<div className={style.searchTitle}>
<h1>PRODU0CT</h1>
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
  <input className={style.tableInput} type="text" placeholder="Enter something"/>
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
            <th>Size</th>
            <th>Price</th>
            <th>Color</th>
            <th>Images</th>
            <th>Quantity</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <tr>
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
        </tr>
        <tr>
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
        </tr>
        <tr>
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
        </tr>
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
        </tbody>
    </table>
    </div>
        
    </div>
)
}

export default Dashboard;