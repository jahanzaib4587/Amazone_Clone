import React from 'react'
import home_banner from '../Pictures/banner1.jpg';
import laptop from '../Pictures/lapotp.jpg';
import pic1 from '../Pictures/ady-teenagerinro-sQ0xXxQdfeY-unsplash.jpg';
import pic2 from '../Pictures/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg';
import pic3 from '../Pictures/daniel-romero-K63lOA4Ijyk-unsplash.jpg';
import pic4 from '../Pictures/daniel-romero-sYP3HchZebA-unsplash.jpg';
import pic5 from '../Pictures/pat-taylor-12V36G17IbQ-unsplash.jpg';
import pic6 from '../Pictures/yogendra-singh-fr6SjLC7o1Y-unsplash.jpg';
import pic7 from '../Pictures/jannis-brandt-8manzosDSGM-unsplash.jpg';

import './home.css';
import Product from '../Product/Product';
function Home() {
    return (
        <div className="home">
            {/* Banner Image */}
            <img src={home_banner} alt="banner img" className="home_image"></img>
            <div className="home_row">
                            <Product id={1} title="product" price={23} rating={5} image={laptop} ></Product>
            <Product id={1} title="product" price={23} rating={5} image={pic1} ></Product>

            </div>
              <div className="home_row">
            <Product id={1} title="product" price={23} rating={4} image={pic6} ></Product>
            <Product id={1} title="product" price={23} rating={3} image={pic3} ></Product>
            <Product id={1} title="product" price={23} rating={2} image={pic4} ></Product>

            </div>
              <div className="home_row">
            <Product id={1} title="product" price={23} rating={5} image={pic2} ></Product>

            </div>
        </div>
    )
}

export default Home
