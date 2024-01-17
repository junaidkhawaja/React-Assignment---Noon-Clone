import React from 'react'

const MegaDeals = () => {
  return (
    <div className='megaDeals'>
      <div className='dealsHeaders'><div className='heading'>Mega Deals</div><div className='timer'><img src='https://f.nooncdn.com/s/app/com/noon/icons/timer-dark.svg' /> 21h: 17m</div>
      <div className='headingbtn'><div className='btn-innnner'>All Deals</div></div></div>
      <div className='megaDeals-inner'>
        <div className='megaDeal-product-card'>
            <div className='md-image'>
                <div className='md-badge'>
                    <span className='md-badge-inner'>Smartphones deals</span>
                </div>
                <img src="https://f.nooncdn.com/products/tr:n-t_240/pnsku/N70020847V/45/_/1698930155/640da032-9952-4e34-88b5-80f4711cbe63.jpg" />
            </div>
            <h3>Xiaomi Poco C65 Black 8GB RAM, 256GB ROM - Powerful MediaTek</h3>
            <div className='md-price'>
                <span className='linethrough'>499</span>
                <span className='nowmd-price'>433 AED</span>
            </div>
        </div>
        <div className='megaDeal-product-card'>
            <div className='md-image'>
                <div className='md-badge'>
                    <span className='md-badge-inner'>Portable audio & video deals</span>
                </div>
                <img src="https://f.nooncdn.com/products/tr:n-t_240/pnsku/N53437240A/45/_/1694760182/fef39d70-943d-4962-a62b-f09196c604ab.jpg" />
            </div>
            <h3>Apple AirPods Pro (2nd generation) With MagSafe Case (USB‑C) White</h3>
            <div className='md-price'>
                <span className='linethrough'>949</span>
                <span className='nowmd-price'>775 AED</span>
            </div>
        </div>
        <div className='megaDeal-product-card'>
            <div className='md-image'>
                <div className='md-badge'>
                    <span className='md-badge-inner'>Building toys deals</span>
                </div>
                <img src="https://f.nooncdn.com/products/tr:n-t_240/v1645008488/N52174668A_1.jpg" />
            </div>
            <h3>LEGO 41703 Friends Friendship Tree House 41703 Building Kit</h3>
            <div className='md-price'>
                <span className='linethrough'>665</span>
                <span className='nowmd-price'>175 AED</span>
            </div>
        </div>
        <div className='megaDeal-product-card'>
            <div className='md-image'>
                <div className='md-badge'>
                    <span className='md-badge-inner'>Massage & relaxation deals</span>
                </div>
                <img src="https://f.nooncdn.com/products/tr:n-t_240/pzsku/ZB01B36BA5C7C53A0F44FZ/45/_/1695817125/a67929ed-a2c8-4762-90c3-e7b36a32c8d4.jpg" />
            </div>
            <h3>Prime by javaudan 6 in 1 Ultrasonic Slimming Instrument</h3>
            <div className='md-price'>
                <span className='linethrough'>299</span>
                <span className='nowmd-price'>149 AED</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MegaDeals
