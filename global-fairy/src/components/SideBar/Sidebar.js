import { useState } from 'react';
import style from './sidebar.module.css';
const Sidebar = ({ shown, showFiltered ,brand}) => {

    const shownCategory = shown
    const brandId=brand
    const [filter, setFilter] = useState({ "category": shownCategory._id, "brands": [brandId], "subCategoy": [], "sizes": [], "priceRange": [], "colors": [] })
    const onChange = (type, value) => {
        if (type === "Brands") {
            filter.brands.push(value)
        }
        if (type === "subCategory") {
            filter.subCategoy.push(value)
        }
        if (type === "sizes") {
            filter.sizes.push(value)
        }
        if (type === "priceRange") {
            filter.priceRange.push(value)
        }
        if (type === "colors") {
            filter.colors.push(value)
        }
        console.log(filter)
    }

    const filterBy = (filter) => {
        showFiltered(filter)
    }

    const filterBYY=()=>{
        const checkboxes=document.querySelectorAll(`input[type="checkbos"]`)
        for(let i=0;i<checkboxes.length;i++){
if(checkboxes[i].checked){

}
        }
    }
    return (
        <div className={style.sidebar}>
            <h2 onClick={() => { filterBy(filter) }}>FILTERS</h2>

            <div className={style.check}>

                <div className={style.price}>
                    <p>PRICE </p>
                    <ul className={style.checklist}>
                        <li >
                            <input type="checkbox" id="0$-15$" value={1} onClick={() => onChange("priceRange", 1)} />
                            <label for="0$-15$">0$-15$</label>
                        </li>
                        <li>
                            <input type="checkbox" id="15$-30$" value={2} onClick={() => onChange("priceRange", 2)} />
                            <label for="15$-30$">15$-30$</label>
                        </li>
                        <li>
                            <input type="checkbox" id="30$-45$" value={3}  onClick={() => onChange("priceRange", 3)} />
                            <label for="30$-45$">30$-45$</label>
                        </li>
                        <li>
                            <input type="checkbox" id="45+" value={4} onClick={() => onChange("priceRange", 4)} />
                            <label for="45+">45+</label>
                        </li>
                    </ul>
                </div>
                {shownCategory.name==="Clothes" || shownCategory.name==="Shoes"? (
                <div className={style.brand}>
                <p>BRANDS</p><br></br>
                <ul className={style.checklist}>
                    <li>
                        <input type="checkbox" id="ZARA" value="6536affdad2130a5607f3f34" onClick={() => onChange("Brands", "6536affdad2130a5607f3f34")} />
                        <label for="ZARA">ZARA</label>
                    </li>
                    <li>
                        <input type="checkbox" id="H&M"  value="6546891524a16a7f083fcb1c" onClick={() => onChange("Brands", "6546891524a16a7f083fcb1c")} />
                        <label for="H&M">H&M</label>
                    </li>
                    <li>
                        <input type="checkbox" id="Bershka" value="654689ae24a16a7f083fcb26" onClick={() => onChange("Brands", "654689ae24a16a7f083fcb26")} />
                        <label for="Bershka">Bershka</label>
                    </li>
                    <li>
                        <input type="checkbox" id="Mango"  value="6546899c24a16a7f083fcb24" onClick={() => onChange("Brands", "6546899c24a16a7f083fcb24")} />
                        <label for="Mango">Mango</label>
                    </li>
                    <li>
                        <input type="checkbox" id="Shein"  value="6546893f24a16a7f083fcb1e" onClick={() => onChange("Brands", "6546893f24a16a7f083fcb1e")} />
                        <label for="Shein">Shein</label>
                    </li>
                    <li>
                        <input type="checkbox" id="Adidas"  value="6546894c24a16a7f083fcb20" onClick={() => onChange("brands", "6546894c24a16a7f083fcb20")} />
                        <label for="Adidas">Adidas</label>
                    </li>
                    <li>
                        <input type="checkbox" id="Nike" value="654689ec24a16a7f083fcb2e" onClick={() => onChange("brands", "654689ec24a16a7f083fcb2e")} />
                        <label for="Nike">Nike</label>
                    </li>
                    {/* <li>
                <input type="checkbox" id="HudaBeauty" onClick={()=>onChange("brands","6546896e24a16a7f083fcb22")}/>
                <label for="HudaBeauty">HudaBeauty</label>
            </li>
            <li>
                <input type="checkbox" id="RubyRose" onClick={()=>onChange("brands","654689c324a16a7f083fcb28")}/>
                <label for="RubyRose">RubyRose</label>
            </li>
            <li>
                <input type="checkbox" id="NYX" onClick={()=>onChange("brands","654689cd24a16a7f083fcb2a")}/>
                <label for="NYX">NYX</label>
            </li>
            <li>
                <input type="checkbox" id="Nars" onClick={()=>onChange("brands","654689d724a16a7f083fcb2c")}/>
                <label for="Nars">Nars</label>
            </li> */}

                </ul>
            </div>
                ): shownCategory.name==="Makeup"?(
                    <div className={style.brand}>
                    <p>BRANDS</p><br></br>
                    <ul className={style.checklist}>
                    <li>
                        <input type="checkbox" id="Shein" value="6546893f24a16a7f083fcb1e" onClick={() => onChange("Brands", "6546893f24a16a7f083fcb1e")} />
                        <label for="Shein">Shein</label>
                    </li>
                        <li>
                    <input type="checkbox" id="HudaBeauty" value="6546896e24a16a7f083fcb22" onClick={()=>onChange("brands","6546896e24a16a7f083fcb22")}/>
                    <label for="HudaBeauty">HudaBeauty</label>
                </li>
                <li>
                    <input type="checkbox" id="RubyRose" value="654689c324a16a7f083fcb28" onClick={()=>onChange("brands","654689c324a16a7f083fcb28")}/>
                    <label for="RubyRose">RubyRose</label>
                </li>
                <li>
                    <input type="checkbox" id="NYX" value="654689cd24a16a7f083fcb2a" onClick={()=>onChange("brands","654689cd24a16a7f083fcb2a")}/>
                    <label for="NYX">NYX</label>
                </li>
                <li>
                    <input type="checkbox" id="Nars" value="654689d724a16a7f083fcb2c" onClick={()=>onChange("brands","654689d724a16a7f083fcb2c")}/>
                    <label for="Nars">Nars</label>
                </li>
    
                    </ul>
                </div>
                ):null

                
                }

                <div>
                    <p>CATEGORIES</p><br></br>
                    <ul className={style.checklist}>
                        <li>
                            <input type="checkbox" id="Dresses" />
                            <label for="Dresses">Dresses</label>
                        </li>
                        <li>
                            <input type="checkbox" id="Tops" />
                            <label for="Tops">Tops</label>
                        </li>
                        <li>
                            <input type="checkbox" id="Shirts" />
                            <label for="Shirts">Shirts</label>
                        </li>
                        <li>
                            <input type="checkbox" id="Hoodies" />
                            <label for="item6">Hoodies</label>
                        </li>
                        <li>
                            <input type="checkbox" id="Jackets" />
                            <label for="Jackets">Jackets</label>
                        </li>
                        <li>
                            <input type="checkbox" id="Pants" />
                            <label for="Pants">Pants</label>
                        </li>
                        <li>
                            <input type="checkbox" id="Suits&Blazers" />
                            <label for="Suits&Blazers">Suits&Blazers</label>
                        </li>
                        <li>
                            <input type="checkbox" id="Shorts" />
                            <label for="Shorts">Shorts</label>
                        </li>
                        <li>
                            <input type="checkbox" id="Skirts" />
                            <label for="Skirts">Skirts</label>
                        </li>
                    </ul>
                </div>
                {shownCategory.name==="Clothes" ?
                 (    <div className={style.size}>
                    <p>SIZE</p><br></br>
                    <ul className={style.checklist}>
                        <li>
                            <input type="checkbox" id="Small" value={"Small"} />
                            <label for="Small">Small</label>
                        </li>
                        <li>
                            <input type="checkbox" id="Medium"  value={"Medium"}/>
                            <label for="Medium">Medium</label>
                        </li>
                        <li>
                            <input type="checkbox" id="Large" value={"Large"} />
                            <label for="Large">Large</label>
                        </li>
                        <li>
                            <input type="checkbox" id="X-Large" value={"XLarge"} />
                            <label for="X-Large">X-Large</label>
                        </li>
                    </ul>
                </div>)
                : shownCategory.name === "Shoes" ?
                 (    <div className={style.size}>
                    <p>SIZE</p><br></br>
                    <ul className={style.checklist}>
                        <li>
                            <input type="checkbox" id="36" value={"36"} />
                            <label for="36">36</label>
                        </li>
                        <li>
                            <input type="checkbox" id="37"  value={"37"}/>
                            <label for="37">37</label>
                        </li>
                        <li>
                            <input type="checkbox" id="38" value={"38"} />
                            <label for="38">38</label>
                        </li>
                        <li>
                            <input type="checkbox" id="39" value={"39"} />
                            <label for="39">39</label>
                        </li>
                    </ul>
                </div>):
                   <div className={style.size}>
                   <p>SIZE</p><br></br>
                   <ul className={style.checklist}>
                       <li>
                           <input type="checkbox" id="50" value={"50"} />
                           <label for="50">50ml</label>
                       </li>
                       <li>
                           <input type="checkbox" id="100"  value={"100"}/>
                           <label for="100">100ml</label>
                       </li>
                       <li>
                           <input type="checkbox" id="150" value={"150"} />
                           <label for="150">150ml</label>
                       </li>
                       <li>
                           <input type="checkbox" id="200" value={"200"} />
                           <label for="200">200ml</label>
                       </li>
                   </ul>
               </div> }

            
                <div className={style.color}>
                    <p>COLOR</p><br></br>
                    <ul className={style.checklist}>
                        <li>
                            <input type="checkbox" id="Black" value={"black"}  onClick={() => onChange("colors", "black")}/>
                            <label for="Black">Black</label>
                        </li>
                        <li>
                            <input type="checkbox" id="White" value={"white"} />
                            <label for="White">White</label>
                        </li>
                        <li>
                            <input type="checkbox" id="Pink" value={"pink"} />
                            <label for="Pink">Pink</label>
                        </li>
                        <li>
                            <input type="checkbox" id="Blue" value={"blue"} />
                            <label for="Blue">Blue</label>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    )
}
export default Sidebar;