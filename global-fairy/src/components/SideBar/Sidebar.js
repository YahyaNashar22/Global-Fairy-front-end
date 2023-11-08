import { useEffect, useState } from 'react';
import style from './sidebar.module.css';
const Sidebar = ({ shown, showFiltered, brand, reset }) => {
    console.log(shown)
    const shownCategory = shown
    const [filter, setFilter] = useState({ "category": shownCategory._id, "brands": [], "subCategories": [], "sizes": [], "priceRange": [], "colors": [] })

    const clearFilter = (filter) => {
        setFilter({ "category": shownCategory._id, "brands": [], "subCategories": [], "sizes": [], "priceRange": [], "colors": [] })
        filterBYY(filter)
    }
    const filterBy = (filter) => {
        console.log(filter)
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
                    filter.subCategories.push(checkboxes[i].value)
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
            <h2 className={style.headTitle}>FILTERS</h2>
            <div className={style.sideBtn}>
                <button className={style.filterBtn} onClick={() => {clearFilter() }}>Filter</button>
                <div className={style.reset} onClick={() => { resetFilterOption() }}>x</div>
            </div>
            <div className={style.check}>

                <div className={style.price}>
                    <p className={style.p} >PRICE </p>
                    <ul className={style.checklist}>
                        <li classList={style.listItems} >{/**onClick={() => onChange("priceRange", 1)} */}
                            <input type="checkbox" id="0$-15$" class="priceRange" value="1" />
                            <label for="0$-15$" className={style.labels} >0$-15$</label>
                        </li>
                        <li classList={style.listItems}>
                            <input type="checkbox" id="15$-30$" class="priceRange" value="2" />
                            <label for="15$-30$" className={style.labels} >15$-30$</label>
                        </li>
                        <li classList={style.listItems}>
                            <input type="checkbox" id="30$-45$" class="priceRange" value="3" />
                            <label for="30$-45$" className={style.labels}>30$-45$</label>
                        </li>
                        <li classList={style.listItems}>
                            <input type="checkbox" id="45+" class="priceRange" value="4" />
                            <label for="45+" className={style.labels}>45+</label>
                        </li>
                    </ul>
                </div>
                {(shownCategory.name === "Clothes" || shownCategory.name === "Shoes") && !brand ? (
                    <div className={style.brand}>
                        <p className={style.p}>BRANDS</p>
                        <ul className={style.checklist}>
                            <li classList={style.listItems}>
                                <input type="checkbox" id="ZARA" class="Brand" value="6536affdad2130a5607f3f34" />
                                <label for="ZARA" className={style.labels}>ZARA</label>
                            </li>
                            <li classList={style.listItems}>
                                <input type="checkbox" id="H&M" class="Brand" value="6546891524a16a7f083fcb1c" />
                                <label for="H&M" className={style.labels}>H&M</label>
                            </li>
                            <li classList={style.listItems}>
                                <input type="checkbox" id="Bershka" class="Brand" value="654689ae24a16a7f083fcb26" />
                                <label for="Bershka" className={style.labels}>Bershka</label>
                            </li>
                            <li classList={style.listItems}>
                                <input type="checkbox" id="Mango" class="Brand" value="6546899c24a16a7f083fcb24" />
                                <label for="Mango" className={style.labels}>Mango</label>
                            </li>
                            <li classList={style.listItems}>
                                <input type="checkbox" id="Shein" class="Brand" value="6546893f24a16a7f083fcb1e" />
                                <label for="Shein" className={style.labels}>Shein</label>
                            </li>
                            <li classList={style.listItems}>
                                <input type="checkbox" id="Adidas" class="Brand" value="6546894c24a16a7f083fcb20" />
                                <label for="Adidas" className={style.labels}>Adidas</label>
                            </li>
                            <li classList={style.listItems}>
                                <input type="checkbox" id="Nike" class="Brand" value="654689ec24a16a7f083fcb2e" />
                                <label for="Nike" className={style.labels}>Nike</label>
                            </li>

                        </ul>
                    </div>
                ) : shownCategory.name === "Makeup" && !brand ? (
                    <div className={style.brand}>
                        <p className={style.p}>BRANDS</p>
                        <ul className={style.checklist}>
                            <li classList={style.listItems}>
                                <input type="checkbox" id="Shein" class="Brand" value="6546893f24a16a7f083fcb1e" />
                                <label for="Shein" className={style.labels}>Shein</label>
                            </li>
                            <li classList={style.listItems}>
                                <input type="checkbox" id="HudaBeauty" class="Brand" value="6546896e24a16a7f083fcb22" />
                                <label for="HudaBeauty" className={style.labels}>HudaBeauty</label>
                            </li>
                            <li classList={style.listItems}>
                                <input type="checkbox" id="RubyRose" class="Brand" value="654689c324a16a7f083fcb28" />
                                <label for="RubyRose" className={style.labels}>RubyRose</label>
                            </li>
                            <li classList={style.listItems}>
                                <input type="checkbox" id="NYX" class="Brand" value="654689cd24a16a7f083fcb2a" />
                                <label for="NYX"className={style.labels} >NYX</label>
                            </li>
                            <li classList={style.listItems}>
                                <input type="checkbox" id="Nars" class="Brand" value="654689d724a16a7f083fcb2c" />
                                <label for="Nars"className={style.labels} >Nars</label>
                            </li>

                        </ul>
                    </div>
                ) : null


                }
                {shownCategory.name === "Clothes" ? (
                    <div>
                        <p className={style.p}>CATEGORIES</p>
                        <ul className={style.checklist}>
                            <li classList={style.listItems}>
                                <input type="checkbox" id="Pants" class="subCategory" value="6536b5d1d19c4e07741f013c" />
                                <label for="Pants" className={style.labels}>Pants</label>
                            </li>
                            <li classList={style.listItems}>
                                <input type="checkbox" id="Shirts" class="subCategory" value="65462ef922ccec63476062fe" />
                                <label for="Shirts" className={style.labels}>Shirts</label>
                            </li>
                            <li classList={style.listItems}>
                                <input type="checkbox" id="Dresses" class="subCategory" value="654a35beb4b575f5fb295b6d" />
                                <label for="Dresses" className={style.labels}>Dresses</label>
                            </li>
                            <li classList={style.listItems}>
                                <input type="checkbox" id="Jackets" class="subCategory" value="654a35c5b4b575f5fb295b6f" />
                                <label for="Jackets" className={style.labels}>Jackets</label>
                            </li>
                            <li classList={style.listItems}>
                                <input type="checkbox" id="Skirts" class="subCategory" value="654a35cdb4b575f5fb295b71" />
                                <label for="Skirts" className={style.labels}>Skirts</label>
                            </li>
                            <li classList={style.listItems}>
                                <input type="checkbox" id="Suits" class="subCategory" value="654a35d4b4b575f5fb295b73" />
                                <label for="Suits" className={style.labels}>Suits</label>
                            </li>

                        </ul>
                    </div>
                ) : shownCategory.name === "Shoes" ? (
                    <div>
                        <p className={style.p}>CATEGORIES</p>
                        <ul className={style.checklist}>
                            <li classList={style.listItems}>
                                <input type="checkbox" id="boots" class="subCategory" value="654a3607b4b575f5fb295b75" />
                                <label for="boots" className={style.labels}>Boots</label>
                            </li>
                            <li classList={style.listItems}>
                                <input type="checkbox" id="Heels" class="subCategory" value="654a360db4b575f5fb295b77" />
                                <label for="Heels" className={style.labels}>Heels</label>
                            </li>
                            <li classList={style.listItems}>
                                <input type="checkbox" id="Sport" class="subCategory" value="654a3613b4b575f5fb295b79" />
                                <label for="Sport" className={style.labels}>Sport</label>
                            </li>


                        </ul>
                    </div>
                ) : shownCategory.name === "Makeup" ? (
                    <div>
                        <p className={style.p}>CATEGORIES</p>
                        <ul className={style.checklist}>
                            <li classList={style.listItems}>
                                <input type="checkbox" id="Eye" class="subCategory" value="6536ab4a76fd45eda0f625d2" />
                                <label for="Eye" className={style.labels}>Eye</label>
                            </li>
                            <li classList={style.listItems}>
                                <input type="checkbox" id="Face" class="subCategory" value="6536ab5976fd45eda0f625d4" />
                                <label for="Face" className={style.labels}>Face</label>
                            </li>
                            <li classList={style.listItems}>
                                <input type="checkbox" id="Lips" class="subCategory" value="6536ab5f76fd45eda0f625d6" />
                                <label for="Lips" className={style.labels}>Lips</label>
                            </li>


                        </ul>
                    </div>
                ) : null
                }

                {shownCategory.name === "Clothes" ?
                    (<div className={style.size}>
                        <p className={style.p}>SIZE</p>
                        <ul className={style.checklist}>
                            <li classList={style.listItems}>
                                <input type="checkbox" id="Small" class="sizes" value={"Small"} />
                                <label for="Small" className={style.labels}>Small</label>
                            </li>
                            <li classList={style.listItems}>
                                <input type="checkbox" id="Medium" class="sizes" value={"Medium"} />
                                <label for="Medium" className={style.labels}>Medium</label>
                            </li>
                            <li classList={style.listItems}>
                                <input type="checkbox" id="Large" class="sizes" value={"Large"} />
                                <label for="Large" className={style.labels}>Large</label>
                            </li>
                            <li classList={style.listItems}>
                                <input type="checkbox" id="X-Large" class="sizes" value={"XLarge"} />
                                <label for="X-Large" className={style.labels}>X-Large</label>
                            </li>
                        </ul>
                    </div>)
                    : shownCategory.name === "Shoes" ?
                        (<div className={style.size}>
                            <p className={style.p}>SIZE</p>
                            <ul className={style.checklist}>
                                <li classList={style.listItems}>
                                    <input type="checkbox" id="36" class="sizes" value={"36"} />
                                    <label for="36" className={style.labels}>36</label>
                                </li>
                                <li classList={style.listItems}>
                                    <input type="checkbox" id="37" class="sizes" value={"37"} />
                                    <label for="37" className={style.labels}>37</label>
                                </li>
                                <li classList={style.listItems}>
                                    <input type="checkbox" id="38" class="sizes" value={"38"} />
                                    <label for="38" className={style.labels}>38</label>
                                </li>
                                <li classList={style.listItems}>
                                    <input type="checkbox" id="39" class="sizes" value={"39"} />
                                    <label for="39" className={style.labels}>39</label>
                                </li>
                            </ul>
                        </div>) :
                        <div className={style.size}>
                            <p className={style.p}>SIZE</p>
                            <ul className={style.checklist}>
                                <li classList={style.listItems}>
                                    <input type="checkbox" id="50" class="sizes" value={"50"} />
                                    <label for="50" className={style.labels}>50ml</label>
                                </li>
                                <li classList={style.listItems}>
                                    <input type="checkbox" id="100" class="sizes" value={"100"} />
                                    <label for="100" className={style.labels}>100ml</label>
                                </li>
                                <li classList={style.listItems}>
                                    <input type="checkbox" id="150" class="sizes" value={"150"} />
                                    <label for="150" className={style.labels}>150ml</label>
                                </li>
                                <li classList={style.listItems}>
                                    <input type="checkbox" id="200" class="sizes" value={"200"} />
                                    <label for="200" className={style.labels}>200ml</label>
                                </li>
                            </ul>
                        </div>}


                <div className={style.color}>
                    <p className={style.p}>COLOR</p>
                    <ul className={style.checklist}>
                        <li classList={style.listItems}>
                            <input type="checkbox" id="Black" class="colors" value={"black"} />
                            <label for="Black" className={style.labels}>Black</label>
                        </li>
                        <li classList={style.listItems}>
                            <input type="checkbox" id="White" class="colors" value={"white"} />
                            <label for="White" className={style.labels}>White</label>
                        </li>
                        <li classList={style.listItems}>
                            <input type="checkbox" id="Pink" class="colors" value={"pink"} />
                            <label for="Pink" className={style.labels}>Pink</label>
                        </li>
                        <li classList={style.listItems}>
                            <input type="checkbox" id="Blue" class="colors" value={"blue"} />
                            <label for="Blue" className={style.labels}>Blue</label>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    )
}
export default Sidebar;