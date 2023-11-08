import { useState } from 'react'
import ProductViewDetails from '../../components/ProductView/ProductView'
import SimiliarSection from '../../components/similiarSection/SimiliarSection'
import "./ProductView.module.css"

const ProductView = () => {
  const[idC, setIdC]=useState(null)
  const change=(id)=>{
    setIdC(id)
  }
    return(
        <>
          <ProductViewDetails getCategoryId={change} />
          {idC?(
          <SimiliarSection  similiarId={idC}/>
          ):<h1>Loading...</h1>
          }
        </>
    )
}

export default ProductView;