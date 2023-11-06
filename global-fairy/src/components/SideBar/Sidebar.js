import { useState } from 'react';
import style from './sidebar.module.css';
const Sidebar = ({ shown, showFiltered }) => {

    const shownCategory = shown
    const [filter, setFilter] = useState({})

    let filtered = { "category": shownCategory, "brands": [], "subCategoy": [], "sizes": [], "priceRange": [], "colors": [] }
    
    const onChange = (type, value) => {
        if (type === "Brands") {
            filtered.brands.push(value)
        }
        if (type === "subCategory") {
            filtered.subCategoy.push(value)
        }
        if (type === "sizes") {
            filtered.sizes.push(value)
        }
        if (type === "priceRange") {
            filtered.priceRange.push(value)
        }
        if (type === "colors") {
            filtered.colors.push(value)
        }
        console.log(filtered)
    }

    const filterBy = () => {
        setFilter(filtered)
        showFiltered(filter)
    }

    return (
        <div className={style.sidebar}>
            <h2 onClick={() => { filterBy() }}>FILTERS</h2>
            <div className={style.check}>
                <div className={style.price}>
                    <p>PRICE </p>
                    <ul className={style.checklist}>
                        <li >
                            <input type="checkbox" id="0$-15$" onClick={() => onChange("priceRange", 1)} />
                            <label for="0$-15$">0$-15$</label>
                        </li>
                        <li>
                            <input type="checkbox" id="15$-30$" onClick={() => onChange("priceRange", 2)} />
                            <label for="15$-30$">15$-30$</label>
                        </li>
                        <li>
                            <input type="checkbox" id="30$-45$" onClick={() => onChange("priceRange", 3)} />
                            <label for="30$-45$">30$-45$</label>
                        </li>
                        <li>
                            <input type="checkbox" id="45+" onClick={() => onChange("priceRange", 4)} />
                            <label for="45+">45+</label>
                        </li>
                    </ul>
                </div>
                <div className={style.brand}>
                    <p>BRANDS</p><br></br>
                    <ul className={style.checklist}>
                        <li>
                            <input type="checkbox" id="ZARA" onClick={() => onChange("Brands", "6536affdad2130a5607f3f34")} />
                            <label for="ZARA">ZARA</label>
                        </li>
                        <li>
                            <input type="checkbox" id="H&M" onClick={() => onChange("Brands", "6546891524a16a7f083fcb1c")} />
                            <label for="H&M">H&M</label>
                        </li>
                        <li>
                            <input type="checkbox" id="Bershka" onClick={() => onChange("Brands", "654689ae24a16a7f083fcb26")} />
                            <label for="Bershka">Bershka</label>
                        </li>
                        <li>
                            <input type="checkbox" id="Mango" onClick={() => onChange("Brands", "6546899c24a16a7f083fcb24")} />
                            <label for="Mango">Mango</label>
                        </li>
                        <li>
                            <input type="checkbox" id="Shein" onClick={() => onChange("Brands", "6546893f24a16a7f083fcb1e")} />
                            <label for="Shein">Shein</label>
                        </li>
                        <li>
                            <input type="checkbox" id="Adidas" onClick={() => onChange("brands", "6546894c24a16a7f083fcb20")} />
                            <label for="Adidas">Adidas</label>
                        </li>
                        <li>
                            <input type="checkbox" id="Nike" onClick={() => onChange("brands", "654689ec24a16a7f083fcb2e")} />
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
                <div className={style.size}>
                    <p>SIZE</p><br></br>
                    <ul className={style.checklist}>
                        <li>
                            <input type="checkbox" id="Small" />
                            <label for="Small">Small</label>
                        </li>
                        <li>
                            <input type="checkbox" id="Medium" />
                            <label for="Medium">Medium</label>
                        </li>
                        <li>
                            <input type="checkbox" id="Large" />
                            <label for="Large">Large</label>
                        </li>
                        <li>
                            <input type="checkbox" id="X-Large" />
                            <label for="X-Large">X-Large</label>
                        </li>
                    </ul>
                </div>
                <div className={style.color}>
                    <p>COLOR</p><br></br>
                    <ul className={style.checklist}>
                        <li>
                            <input type="checkbox" id="Black" />
                            <label for="Black">Black</label>
                        </li>
                        <li>
                            <input type="checkbox" id="White" />
                            <label for="White">White</label>
                        </li>
                        <li>
                            <input type="checkbox" id="Pink" />
                            <label for="Pink">Pink</label>
                        </li>
                        <li>
                            <input type="checkbox" id="Blue" />
                            <label for="Blue">Blue</label>
                        </li>
                    </ul>
                </div>


            </div>
        </div>
    )
}
export default Sidebar;