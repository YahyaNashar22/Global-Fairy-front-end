import { useEffect, useState } from 'react';
import style from './Addproduct.module.css';
import { Navigate, json, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Addproduct = () => {
    return (
        <div>
            <div className={style.hed}>
                <div className={style.title}>
                    <h1>Global Fairy</h1>
                    <p>dashbord admin </p>
                </div>
                <div>
                    <p className={style.P1}>ADD Product</p>
                </div>
            </div>
            <form method="post" enctype="multipart/form-data" className={style.formContainer}>
                <div className={style.row1}>
                    <div className={style.labelInput}>
                        <label className={style.labelForm} for="name">Product Name:</label><br />
                        <input className={style.allInputs} type="text" id="name" name="name" required />
                    </div>
                    <div className={style.labelInput}>
                        <label className={style.labelForm} for="brand">Brand:</label><br />
                        <select className={style.dro} id="brand" name="brand" required>
                            <option value="Brand 1">shein</option>
                            <option value="Brand 2">zara</option>
                            <option value="Brand 3">mango</option>
                        </select>
                    </div>
                    <div className={style.labelInput}>
                        <label className={style.labelForm} for="category">Category:</label><br />
                        <select className={style.dro} id="category" name="category" required>
                            <option value="Category 1">cloth</option>
                            <option value="Category 2">shoes</option>
                            <option value="Category 3">makeup</option>
                        </select>
                    </div>

                <div className={style.labelInput}>
                    <label  className={style.labelForm} for="subcategory">Sub-Category:</label><br />
                    <select className={style.dro} id="subcategory" name="subcategory" required >
                        <option value="Subcategory 1">face</option>
                        <option value="Subcategory 2">Tshirt</option>
                        <option value="Subcategory 3">lips</option>
                    </select>
                </div>
            </div>
            <div className={style.row2}>
                <div className={style.labelInput}>
                    <label className={style.labelForm} for="price">Price:</label><br />
                    <input className={style.allInputs} type="number" id="price" name="price" required  />
                </div>

                <div className={style.labelInput}>
                    <label className={style.labelForm} for="images">Images:</label><br />
                    <input className={style.allInputs} type="file" id="images" name="images" multiple accept="image/*" />
                </div>
            </div>
            <div className={style.labelInput}>
                <label  className={style.labelForm} for="description">Description:</label><br />
                <input className={style.desrciptionInputs} type="text" id="description" name="description" />
            </div>

            <div className={style.row3}>
                <fieldset>
                    <legend className={style.labelForm} > Color 1 :</legend>
                    <div className={style.labelInput}>
                        <label className={style.labelForm} for="color">Color:</label><br />
                        <input className={style.allInputs} type="text" id="color" name="color" required />
                    </div>
                    <div className={style.labelInput}>
                        <label className={style.labelForm} for="quantity">Quantity:</label><br />
                        <input className={style.allInputs} type="number" id="quantity" name="quantity" required />
                    </div>
                    <div className={style.labelInput}>
                        <label className={style.labelForm} >Size:</label><br />
                        <div className={style.check}>
                            <div className={style.inputS}>
                                <input type="checkbox" id="small" name="size" value="small" className={style.checkboxes} />
                                <label for="small">Small</label>
                            </div>
                             <div className={style.inputS}>
                                 <input type="checkbox" id="medium" name="size" value="medium" className={style.checkboxes} />
                                 <label for="medium">Medium</label>
                             </div>
                             <div className={style.inputS}>
                                 <input type="checkbox" id="large" name="size" value="large" className={style.checkboxes} />
                                 <label for="large">Large</label>
                             </div>
                             <div className={style.inputS}>
                                 <input type="checkbox" id="xlarge" name="size" value="xlarge" className={style.checkboxes} />
                                 <label for="xlarge">X-Large</label>
                             </div>
                         </div>
                     </div>
                </fieldset>
                <fieldset>
                    <legend className={style.labelForm} > Color 2 :</legend>
                    <div className={style.labelInput}>
                        <label className={style.labelForm} for="color">Color:</label><br />
                        <input className={style.allInputs} type="text" id="color" name="color" required />
                    </div>
                    <div className={style.labelInput}>
                        <label  className={style.labelForm} for="quantity">Quantity:</label><br />
                        <input className={style.allInputs} type="number" id="quantity" name="quantity" required />
                    </div>
                    <div className={style.labelInput}>
                        <label className={style.labelForm}>Size:</label><br />
                        <div className={style.check}>
                            <div className={style.inputS}>
                                <input type="checkbox" id="small" name="size" value="small" className={style.checkboxes} />
                                <label for="small">Small</label>
                            </div>

                             <div className={style.inputS}>
                                 <input type="checkbox" id="medium" name="size" value="medium" className={style.checkboxes} />
                                 <label for="medium">Medium</label>
                             </div>
                             <div className={style.inputS}>
                                 <input type="checkbox" id="large" name="size" value="large" className={style.checkboxes} />
                                 <label for="large">Large</label>
                             </div>
                             <div className={style.inputS}>
                                 <input type="checkbox" id="xlarge" name="size" value="xlarge" className={style.checkboxes} />
                                 <label for="xlarge">X-Large</label>
                             </div>
                         </div>
                     </div>

                 </fieldset>



                 <div className={style.submit}><br />
                     <input className={style.allInputs} type="submit" value="Add Product" />
                 </div>
             </div>
         </form>

     </div>
 )
 }
 export default Addproduct;