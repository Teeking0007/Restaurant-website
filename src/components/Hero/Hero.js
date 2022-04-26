import './Hero.css';
import Navbar from '../Navbar/Navbar';
const Hero = () => {
    return ( 
        <div className="hero">
            <Navbar />
            <div className='hero-content'>
                <div className='hero-items'>
                    <h1>Everything you need,<br/> delivered now</h1>
                    <p>Ready in 60 Seconds</p>
                    <button>Place Order</button>
                </div>
                
            </div>
        </div>
     );
}
 
export default Hero;