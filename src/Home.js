import React from 'react'
import './Home.css';
import product from './product.js';
import Product from './product.js';
function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                    alt='amazon_background' className='home_image'>
                </img>
                <div className='home_row'>
                    <Product id='2133213' title="The Lean Startup:How Constant Innovation creates rapidly successful Buisness paperback" price={19.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" rating={5} />
                    <Product id='6986796' title="Kenwood kMix stand mixer for baking,stylish kictchen Mixer with K-beater,5 litre Glass Bowl" price={239.0} image="https://images-na.ssl-images-amazon.com/images/I/91gRKbX%2BS8L._AC_SL1500_.jpg" rating={4} />
                </div>
                <div className='home_row'>
                    <Product id='46363656' title="Samsung LC49RDBSBSIGSFXEN 49' Curved LED Gaming Monitor" price={199.99} image="https://images-na.ssl-images-amazon.com/images/I/71Dwx3x6m9L._SL1500_.jpg" rating={3} />
                    <Product id='5665753' title="Amazon echo (3rd gen) | smart speaker with Alexa,charcoal Fabric" price={98.99} image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg" rating={5} />
                    <Product id='7685757' title="New Apple iPad Pro (12.9-inch,Wi-Fi,128GB) - Silver (4th Generation)" price={589.99} image="https://images-na.ssl-images-amazon.com/images/I/71TJA%2BsJv2L._SL1500_.jpg" rating={4} />
                </div>
                <div className='home_row'>
                    <Product id='32425345' title="Samsung LCGRUHIBSFI7876DS 49' Curved LED Gaming Monitor - super Ultra Wide Dual WQHD 5120 * 1440" price={1094.98} image="https://images-na.ssl-images-amazon.com/images/I/71nplbAMwzL._SL1202_.jpg" rating={4} />
                </div>
            </div>
        </div >
    )
}

export default Home
