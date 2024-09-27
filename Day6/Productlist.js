import React from 'react'

const Productlist = ({productsList}) => {
    return (
        <ul>
            {productsList.map((product) => (
                <li Key={product.id}>
                    <div>{product.name}</div>
                    <img src={'/${product.imageUrl}'} alt = {product.name} style={{width: '100px', height: 'auto' }}/>
                
                <div>${product.price.toFixed(2)}</div>
                </li>
            ))}
        </ul>
    )
}
export default Productlist;