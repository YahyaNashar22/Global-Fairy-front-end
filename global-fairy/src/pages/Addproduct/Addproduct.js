import style from './Addproduct.module.css';
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
    <form  method="post" enctype="multipart/form-data" className={style.formContainer}>
        <div className={style.row1}>
            <div className={style.labelInput}>
        <label for="name">Product Name:</label><br/>
        <input className={style.allInputs} type="text" id="name" name="name" required/><br/><br/>
        </div>
        <div className={style.labelInput}>
        <label for="category">Category:</label><br/>
        <select className={style.dro} id="category" name="category" required>
            <option value="Category 1">cloth</option>
            <option value="Category 2">shoes</option>
            <option value="Category 3">makeup</option>
        </select><br/><br/>
    </div>
    <div className={style.labelInput}>
        <label for="brand">Brand:</label><br/>
        <select className={style.dro} id="brand" name="brand" required>
            <option value="Brand 1">shein</option>
            <option value="Brand 2">zara</option>
            <option value="Brand 3">mango</option>
        </select><br/><br/>
        </div>
        <div className={style.labelInput}>
        <label for="subcategory">Type:</label><br/>
        <select className={style.dro} id="subcategory" name="subcategory" required>
            <option value="Subcategory 1">face</option>
            <option value="Subcategory 2">Tshirt</option>
            <option value="Subcategory 3">lips</option>
        </select><br/><br/>
        </div>
</div><br/><br/>
<div className={style.row2}>
<div className={style.labelInput}>
        <label for="price">Price:</label><br/>
        <input className={style.allInputs} type="number" id="price" name="price" required/><br/><br/>
</div>
<div >
            <label>Size:</label><br/>
            <div className={style.check}>
                <div className={style.inputS}>
            <input  type="checkbox" id="small" name="size" value="small"/>
            <label for="small">Small</label>
            </div>

            <div className={style.inputS}>
            <input  type="checkbox" id="medium" name="size" value="medium"/>
            <label for="medium">Medium</label>
            </div><div className={style.inputS}>
            <input   type="checkbox" id="large" name="size" value="large"/>
            <label for="large">Large</label>
            </div>
            <div className={style.inputS}>
            <input  type="checkbox" id="xlarge" name="size" value="xlarge"/>
            <label for="xlarge">X-Large</label>
            </div>
            </div>
            </div>
<div className={style.labelInput}>
        <label for="images">Images1:</label><br/>
        <input  className={style.allInputs} type="file" id="images" name="images" multiple accept="image/*"/><br/><br/>
</div>    

<div className={style.labelInput}>
        <label for="images">Images2:</label><br/>
        <input  className={style.allInputs} type="file" id="images" name="images" multiple accept="image/*"/><br/><br/>
</div><br/><br/>
</div>

<div className={style.row3}>
    <div className={style.labelInput}>
        <label for="quantity">Quantity:</label><br/>
        <input className={style.allInputs} type="number" id="quantity" name="quantity" required/><br/><br/>
</div>
<div className={style.labelInput}>
        <label  className={style.fromLabel2}for="color">Color:</label><br/>
        <input  className={style.allInputs} type="text" id="color" name="color" required/><br/><br/>
        </div>
        <div className={style.labelInput}>
        <label for="description">Description:</label><br/>
        <input className={style.desrciptionInputs} type="text" id="description" name="description" /><br/><br/>
        </div>
        <div className={style.submit}><br/>
        <input  className={style.allInputs} type="submit" value="Add Product"/>
        </div>
        </div>
        </form> 

        </div>
    )
}
export default Addproduct;