import { useEffect, useState } from 'react';
import style from './sidebar.module.css';
const Sidebar = ({ shown, showFiltered, brand, reset }) => {
    console.log(shown)
    const shownCategory = shown
    const [filter, setFilter] = useState({ "category": shownCategory._id, "brands": [], "subCategoy": [], "sizes": [], "priceRange": [], "colors": [] })

    const clearFilter = (filter) => {
        setFilter({ "category": shownCategory._id, "brands": [], "subCategoy": [], "sizes": [], "priceRange": [], "colors": [] })
        filterBYY(filter)
    }
    const filterBy = (filter) => {
        showFiltered(filter)
    }

    const filterBYY = () => {
        const checkboxes = document.querySelectorAll(`input[type="checkbox"]`)
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                if (checkboxes[i].classList.contains("Brand")) {
                    filter.brands.push(checkboxes[i].value)
                }
                if (checkboxes[i].classList.contains("colors")) {
                    filter.colors.push(checkboxes[i].value)
                }
                if (checkboxes[i].classList.contains("priceRange")) {
                    filter.priceRange.push(checkboxes[i].value)
                }
                if (checkboxes[i].classList.contains("subCategory")) {
                    filter.subCategoy.push(checkboxes[i].value)
                }
                if (checkboxes[i].classList.contains("sizes")) {
                    filter.sizes.push(checkboxes[i].value)
                }
            }
        }
        if (brand !== null) {
            filter.brands.push(brand._id)
        }
        filterBy(filter)
        console.log(filter)
    }

    const resetFilterOption = () => {
        const checkboxes = document.querySelectorAll(`input[type="checkbox"]`)
        checkboxes.forEach((checkboxe) => {
            checkboxe.checked = false
        })
        reset()
    }

    useEffect(() => {
    }, [])
    return (
        <div className={style.sidebar}>
            <h2 onClick={() => {clearFilter() }}>FILTERS <span className={style.reset} onClick={() => { resetFilterOption() }}>x</span></h2>

            <div className={style.check}>

                <div className={style.price}>
                    <p>PRICE </p>
                    <ul className={style.checklist}>
                        <li >{/**onClick={() => onChange("priceRange", 1)} */}
                            <input type="checkbox" id="0$-15$" class="priceRange" value="1" />
                            <label for="0$-15$">0$-15$</label>
                        </li>
                        <li>
                            <input type="checkbox" id="15$-30$" class="priceRange" value="2" />
                            <label for="15$-30$">15$-30$</label>
                        </li>
                        <li>
                            <input type="checkbox" id="30$-45$" class="priceRange" value="3" />
                            <label for="30$-45$">30$-45$</label>
                        </li>
                        <li>
                            <input type="checkbox" id="45+" class="priceRange" value="4" />
                            <label for="45+">45+</label>
                        </li>
                    </ul>
                </div>
                {(shownCategory.name === "Clothes" || shownCategory.name === "Shoes") && !brand ? (
                    <div className={style.brand}>
                        <p>BRANDS</p><br></br>
                        <ul className={style.checklist}>
                            <li>
                                <input type="checkbox" id="ZARA" class="Brand" value="6536affdad2130a5607f3f34" />
                                <label for="ZARA">ZARA</label>
                            </li>
                            <li>
                                <input type="checkbox" id="H&M" class="Brand" value="6546891524a16a7f083fcb1c" />
                                <label for="H&M">H&M</label>
                            </li>
                            <li>
                                <input type="checkbox" id="Bershka" class="Brand" value="654689ae24a16a7f083fcb26" />
                                <label for="Bershka">Bershka</label>
                            </li>
                            <li>
                                <input type="checkbox" id="Mango" class="Brand" value="6546899c24a16a7f083fcb24" />
                                <label for="Mango">Mango</label>
                            </li>
                            <li>
                                <input type="checkbox" id="Shein" class="Brand" value="6546893f24a16a7f083fcb1e" />
                                <label for="Shein">Shein</label>
                            </li>
                            <li>
                                <input type="checkbox" id="Adidas" class="Brand" value="6546894c24a16a7f083fcb20" />
                                <label for="Adidas">Adidas</label>
                            </li>
                            <li>
                                <input type="checkbox" id="Nike" class="Brand" value="654689ec24a16a7f083fcb2e" />
                                <label for="Nike">Nike</label>
                            </li>

                        </ul>
                    </div>
                ) : shownCategory.name === "Makeup" && !brand ? (
                    <div className={style.brand}>
                        <p>BRANDS</p><br></br>
                        <ul className={style.checklist}>
                            <li>
                                <input type="checkbox" id="Shein" class="Brand" value="6546893f24a16a7f083fcb1e" />
                                <label for="Shein">Shein</label>
                            </li>
                            <li>
                                <input type="checkbox" id="HudaBeauty" class="Brand" value="6546896e24a16a7f083fcb22" />
                                <label for="HudaBeauty">HudaBeauty</label>
                            </li>
                            <li>
                                <input type="checkbox" id="RubyRose" class="Brand" value="654689c324a16a7f083fcb28" />
                                <label for="RubyRose">RubyRose</label>
                            </li>
                            <li>
                                <input type="checkbox" id="NYX" class="Brand" value="654689cd24a16a7f083fcb2a" />
                                <label for="NYX">NYX</label>
                            </li>
                            <li>
                                <input type="checkbox" id="Nars" class="Brand" value="654689d724a16a7f083fcb2c" />
                                <label for="Nars">Nars</label>
                            </li>

                        </ul>
                    </div>
                ) : null


                }
                {shownCategory.name === "Clothes" ? (
                    <div>
                        <p>CATEGORIES</p><br></br>
                        <ul className={style.checklist}>
                            <li>
                                <input type="checkbox" id="Pants" class="subCategory" value="Pants" />
                                <label for="Pants">Pants</label>
                            </li>
                            <li>
                                <input type="checkbox" id="Shirts" class="subCategory" value="Shirts" />
                                <label for="Shirts">Shirts</label>
                            </li>
                            <li>
                                <input type="checkbox" id="Dresses" class="subCategory" value="Dresses" />
                                <label for="Dresses">Dresses</label>
                            </li>
                            <li>
                                <input type="checkbox" id="Jackets" class="subCategory" value="Jackets" />
                                <label for="Jackets">Jackets</label>
                            </li>
                            <li>
                                <input type="checkbox" id="Skirts" class="subCategory" value="Skirts" />
                                <label for="Skirts">Skirts</label>
                            </li>
                            <li>
                                <input type="checkbox" id="Suits" class="subCategory" value="Suits" />
                                <label for="Suits">Suits</label>
                            </li>

                        </ul>
                    </div>
                ) : shownCategory.name === "Shoes" ? (
                    <div>
                        <p>CATEGORIES</p><br></br>
                        <ul className={style.checklist}>
                            <li>
                                <input type="checkbox" id="boots" class="subCategory" value="Boots" />
                                <label for="boots">Boots</label>
                            </li>
                            <li>
                                <input type="checkbox" id="Heels" class="subCategory" value="Heels" />
                                <label for="Heels">Heels</label>
                            </li>
                            <li>
                                <input type="checkbox" id="Sport" class="subCategory" value="Sport" />
                                <label for="Sport">Sport</label>
                            </li>


                        </ul>
                    </div>
                ) : shownCategory.name === "Makeup" ? (
                    <div>
                        <p>CATEGORIES</p><br></br>
                        <ul className={style.checklist}>
                            <li>
                                <input type="checkbox" id="Eye" class="subCategory" value="Eye" />
                                <label for="Eye">Eye</label>
                            </li>
                            <li>
                                <input type="checkbox" id="Face" class="subCategory" value="Face" />
                                <label for="Face">Face</label>
                            </li>
                            <li>
                                <input type="checkbox" id="Lips" class="subCategory" value="Lips" />
                                <label for="Lips">Lips</label>
                            </li>


                        </ul>
                    </div>
                ) : null
                }

                {shownCategory.name === "Clothes" ?
                    (<div className={style.size}>
                        <p>SIZE</p><br></br>
                        <ul className={style.checklist}>
                            <li>
                                <input type="checkbox" id="Small" class="sizes" value={"Small"} />
                                <label for="Small">Small</label>
                            </li>
                            <li>
                                <input type="checkbox" id="Medium" class="sizes" value={"Medium"} />
                                <label for="Medium">Medium</label>
                            </li>
                            <li>
                                <input type="checkbox" id="Large" class="sizes" value={"Large"} />
                                <label for="Large">Large</label>
                            </li>
                            <li>
                                <input type="checkbox" id="X-Large" class="sizes" value={"XLarge"} />
                                <label for="X-Large">X-Large</label>
                            </li>
                        </ul>
                    </div>)
                    : shownCategory.name === "Shoes" ?
                        (<div className={style.size}>
                            <p>SIZE</p><br></br>
                            <ul className={style.checklist}>
                                <li>
                                    <input type="checkbox" id="36" class="sizes" value={"36"} />
                                    <label for="36">36</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="37" class="sizes" value={"37"} />
                                    <label for="37">37</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="38" class="sizes" value={"38"} />
                                    <label for="38">38</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="39" class="sizes" value={"39"} />
                                    <label for="39">39</label>
                                </li>
                            </ul>
                        </div>) :
                        <div className={style.size}>
                            <p>SIZE</p><br></br>
                            <ul className={style.checklist}>
                                <li>
                                    <input type="checkbox" id="50" class="sizes" value={"50"} />
                                    <label for="50">50ml</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="100" class="sizes" value={"100"} />
                                    <label for="100">100ml</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="150" class="sizes" value={"150"} />
                                    <label for="150">150ml</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="200" class="sizes" value={"200"} />
                                    <label for="200">200ml</label>
                                </li>
                            </ul>
                        </div>}


                <div className={style.color}>
                    <p>COLOR</p><br></br>
                    <ul className={style.checklist}>
                        <li>
                            <input type="checkbox" id="Black" class="colors" value={"black"} />
                            <label for="Black">Black</label>
                        </li>
                        <li>
                            <input type="checkbox" id="White" class="colors" value={"white"} />
                            <label for="White">White</label>
                        </li>
                        <li>
                            <input type="checkbox" id="Pink" class="colors" value={"pink"} />
                            <label for="Pink">Pink</label>
                        </li>
                        <li>
                            <input type="checkbox" id="Blue" class="colors" value={"blue"} />
                            <label for="Blue">Blue</label>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    )
}
export default Sidebar;