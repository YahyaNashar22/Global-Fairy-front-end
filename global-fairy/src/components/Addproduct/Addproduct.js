import style from './Addproduct.module.module.css';
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
    <form action="process_form.php" method="post" enctype="multipart/form-data"/>
        <div className={style.row1}>
            <div>
        <label for="name">Product Name:</label><br/>
        <input type="text" id="name" name="name" required/><br/><br/>
        </div>
        <div>
        <label for="category">Category:</label><br/>
        <select id="category" name="category" required>
            <option value="Category 1">cloth</option>
            <option value="Category 2">shoes</option>
            <option value="Category 3">makeup</option>
        </select><br/><br/>
    </div>
    <div>
        <label for="brand">Brand:</label><br/>
        <select id="brand" name="brand" required>
            <option value="Brand 1">shein</option>
            <option value="Brand 2">zara</option>
            <option value="Brand 3">mango</option>
        </select><br/><br/>
        </div>
        <div>
        <label for="subcategory">Type:</label><br/>
        <select id="subcategory" name="subcategory" required>
            <option value="Subcategory 1">face</option>
            <option value="Subcategory 2">Tshirt</option>
            <option value="Subcategory 3">lips</option>
        </select><br/><br/>
        </div>
</div><br/><br/>
<div className={style.row2}>
<div>
        <label for="price">Price:</label><br/>
        <input type="number" id="price" name="price" required/><br/><br>
</div>
<div>
        <label for="images">Images:</label><br/>
        <input type="file" id="images" name="images" multiple accept="image/*"/><br/><br/>
</div></div><br/><br/>
<div class="row3">
    <div>
        <label for="quantity">Quantity:</label><br/>
        <input type="number" id="quantity" name="quantity" required/><br/><br>
</div>
<div>
        <label for="color">Color:</label><br/>
        <input type="text" id="color" name="color" required/><br/><br/>
        </div>
        <div>
        <label for="stock">stock:</label><br/>
        <input type="stock" id="stock" name="stock"/><br/><br/>
        </div></div>
        <label for="description">Description:</label><br/>
        <input type="text" id="description" name="description" ><br/><br/>
        <div>
            <label>Size:</label><br/>
            <div className={style.check}>
            <input type="checkbox" id="small" name="size" value="small"/>
            <label for="small">Small</label><br/>
            <input type="checkbox" id="medium" name="size" value="medium"/>
            <label for="medium">Medium</label><br/>
            <input type="checkbox" id="large" name="size" value="large"/>
            <label for="large">Large</label><br/>
            <input type="checkbox" id="xlarge" name="size" value="xlarge"/>
            <label for="xlarge">X-Large</label><br/><br>
            </div>
        </div>
        <div class="submit"><br/>
        <input type="submit" value="Add Product"/>
        </div>
    </form>
      </div>  
    )
}
export default Addproduct;