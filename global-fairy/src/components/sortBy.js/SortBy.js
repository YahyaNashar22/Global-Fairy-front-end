import React, { useState } from 'react'
import styles from "./SortBy.module.css"

export default function SortBy() {
    const options = [
        { label: 'Low To High', value: 'low' },
        { label: 'High To Low', value: 'high' },
    ];
    const [value, setValue] = useState('low');
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className={styles.SortByContainer}>
            <span className={styles.sortBy}>Sort by Price:</span>
            <label className={styles.sortDropDown }>  
                <select value={value} onChange={handleChange}>
                    {options.map((option) => (
                        <option className={styles.options} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </label>

        </div>
    )
}
