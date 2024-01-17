import React from 'react'
import footer_image from '../assets/footer.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-menus'>
        <div className='footer-menu-block'>
            <h3>ELECTRONICS</h3>
            <ul className='footer-ul'>
                <li>
                    <a href='#'>Mobiles</a>
                </li>
                <li>
                    <a href='#'>Tablets</a>
                </li>
                <li>
                    <a href='#'>Laptops</a>
                </li>
                <li>
                    <a href='#'>Home Appliances</a>
                </li>
                <li>
                    <a href='#'>Camera, Photo & Video</a>
                </li>
                <li>
                    <a href='#'>Televisions</a>
                </li>
                <li>
                    <a href='#'>Headphones</a>
                </li>
                <li>
                    <a href='#'>Video Games</a>
                </li>
                <li>
                    <a href='#'>Best Mobile Phones</a>
                </li>
            </ul>
        </div>
        <div className='footer-menu-block'>
            <h3>FASHION</h3>
            <ul className='footer-ul'>
                <li>
                    <a href='#'>Women's Fashion</a>
                </li>
                <li>
                    <a href='#'>Men's Fashion</a>
                </li>
                <li>
                    <a href='#'>Girls' Fashion</a>
                </li>
                <li>
                    <a href='#'>Boys' Fashion</a>
                </li>
                <li>
                    <a href='#'>Watches</a>
                </li>
                <li>
                    <a href='#'>Jewellery</a>
                </li>
                <li>
                    <a href='#'>Women's Handbags</a>
                </li>
                <li>
                    <a href='#'>Men's Eyewear</a>
                </li>
            </ul>
        </div>
        <div className='footer-menu-block'>
            <h3>HOME AND KITCHEN</h3>
            <ul className='footer-ul'>
                <li>
                    <a href='#'>Bath</a>
                </li>
                <li>
                    <a href='#'>Home Decor</a>
                </li>
                <li>
                    <a href='#'>Kitchen & Dining</a>
                </li>
                <li>
                    <a href='#'>Tools & Home Improvement</a>
                </li>
                <li>
                    <a href='#'>Audio & Video</a>
                </li>
                <li>
                    <a href='#'>Furniture</a>
                </li>
                <li>
                    <a href='#'>Patio, Lawn & Garden</a>
                </li>
                <li>
                    <a href='#'>Pet Supplies</a>
                </li>
            </ul>
        </div>
        <div className='footer-menu-block'>
            <h3>BEAUTY</h3>
            <ul className='footer-ul'>
                <li>
                    <a href='#'>Fragrance</a>
                </li>
                <li>
                    <a href='#'>Make-Up</a>
                </li>
                <li>
                    <a href='#'>Haircare</a>
                </li>
                <li>
                    <a href='#'>Skincare</a>
                </li>
                <li>
                    <a href='#'>Bath & Body</a>
                </li>
                <li>
                    <a href='#'>Electronic Beauty Tools</a>
                </li>
                <li>
                    <a href='#'>Men's Grooming</a>
                </li>
                <li>
                    <a href='#'>Health Care Essentials</a>
                </li>
            </ul>
        </div>
        <div className='footer-menu-block'>
            <h3>BABY & TOYS</h3>
            <ul className='footer-ul'>
                <li>
                    <a href='#'>Diapering</a>
                </li>
                <li>
                    <a href='#'>Baby Transport</a>
                </li>
                <li>
                    <a href='#'>Nursing & Feeding</a>
                </li>
                <li>
                    <a href='#'>Baby & Kids Fashion</a>
                </li>
                <li>
                    <a href='#'>Baby & Toddler Toys</a>
                </li>
                <li>
                    <a href='#'>Tricycles & Scooters</a>
                </li>
                <li>
                    <a href='#'>Board Games & Cards</a>
                </li>
                <li>
                    <a href='#'>Outdoor Play</a>
                </li>
            </ul>
        </div>
        <div className='footer-menu-block'>
            <h3>TOP BRANDS</h3>
            <ul className='footer-ul'>
                <li>
                    <a href='#'>Pampers</a>
                </li>
                <li>
                    <a href='#'>Apple</a>
                </li>
                <li>
                    <a href='#'>Nike</a>
                </li>
                <li>
                    <a href='#'>Samsung</a>
                </li>
                <li>
                    <a href='#'>Tefal</a>
                </li>
                <li>
                    <a href='#'>L'Oréal Paris</a>
                </li>
                <li>
                    <a href='#'>Skechers</a>
                </li>
                <li>
                    <a href='#'>BLACK+DECKER</a>
                </li>
                <li>
                    <a href='#'>Saudi Pro League</a>
                </li>
            </ul>
        </div>
        <div className='footer-menu-block'>
            <h3>DAILY GROCERIES</h3>
            <ul className='footer-ul'>
                <li>
                    <a href='#'>Fresh Produce</a>
                </li>
                <li>
                    <a href='#'>Dairy & Eggs</a>
                </li>
                <li>
                    <a href='#'>Bread & Bakery</a>
                </li>
                <li>
                    <a href='#'>Meat & Seafood</a>
                </li>
                <li>
                    <a href='#'>Breakfast Food</a>
                </li>
                <li>
                    <a href='#'>Pantry Staples</a>
                </li>
                <li>
                    <a href='#'>Household Supplies</a>
                </li>
                <li>
                    <a href='#'>Personal Care</a>
                </li>
            </ul>
        </div>
      </div>
      <div className='footer_image'>
        <img src={footer_image} />
      </div>
    </div>
  )
}

export default Footer
