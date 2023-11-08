import React from 'react'
import styles from "./SortBy.module.css"

export default function SortBy({sortValue,onSort}) {
    const options = [
        { label: 'Low To High', value: 'low' },
        { label: 'High To Low', value: 'high' },
    ];
    const handleChange = (event) => {
        const sortValue=event.target.value
        onSort(sortValue)
    };

    return (
        <div className={styles.SortByContainer}>
            <span className={styles.sortBy}>Sort by Price:</span>
            <label className={styles.sortDropDown }>  
                <select value={sortValue} onChange={handleChange}>
                    {options.map((option) => (
                        <option className={styles.options} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </label>

        </div>
    )
}
