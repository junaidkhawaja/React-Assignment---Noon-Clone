import React from 'react'

const ProductCard = (props) => {
    const {image, rating, reviews, title, price_disc, price_orig, stock, badge} = props.card_data
  return (
    <div className='productCard'>
        <div className='pc-image'>
            <div className='pc-badge'>
                <span>{badge}</span>
            </div>
            <img src={image} />
            <div className='pc-rating-reviews'>
                <span>{rating}</span> 
                <svg width="12" height="12" viewBox="0 0 12 10" fill="#82AE04" xmlns="http://www.w3.org/2000/svg"><path d="M6.25333 8.28568C6.09679 8.19352 5.90258 8.19352 5.74604 8.28568L3.31597 9.71618C2.93433 9.94084 2.47058 9.59509 2.57696 9.16519L3.22394 6.55064C3.27013 6.36399 3.20519 6.16739 3.05692 6.04497L0.955287 4.30981C0.608396 4.02341 0.786618 3.46036 1.23513 3.42573L4.03001 3.20991C4.21511 3.19561 4.37705 3.07994 4.4506 2.90948L5.5406 0.383314C5.71429 -0.0192352 6.28508 -0.019235 6.45877 0.383315L7.54877 2.90948C7.62232 3.07994 7.78426 3.19561 7.96936 3.2099L10.7647 3.42573C11.2132 3.46036 11.3914 4.02346 11.0445 4.30984L8.9425 6.04497C8.7942 6.16739 8.72924 6.36401 8.77543 6.55068L9.42241 9.16519C9.52879 9.59508 9.06504 9.94084 8.6834 9.71618L6.25333 8.28568Z"></path></svg>
                <span>({reviews})k</span>
            </div>
        </div>
        <div className='pc-title'>
            {title}
        </div>
        <div className='pc-prices'>
            <span>AED</span>
            <span>{price_disc}</span>
            <span>{price_orig}</span>
        </div>
        <div className='pc-stock'> <img src="https://f.nooncdn.com/mpcms/EN0001/assets/80299f90-dd89-4c69-a3d3-19c884d5fc05.png" />only {stock} left in stock</div>
    </div>
  )
}

export default ProductCard
