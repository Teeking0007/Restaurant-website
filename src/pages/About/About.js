import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import './About.css'

const About = () => {
    return ( 
        <>
        <Navbar/>
        <div className="about">
            <div className="tittle"><h1>About</h1></div>
            <div className="content">
            <p>Pizza Palace is the most convenient online food ordering site, connecting people with the best restaurants around them.We believe food is a pleasure and food ordering should be fast and definitely fun experience. 
                Ordering with Pizza Palace is as easy as a 4-step recipe:
            </p>
            <ol>
                <li>Select your food or grocery Browse restaurants that deliver near you</li>
                <li>Receive it at your doorstep Your order will be delivered to you in no time</li>
                <li>Enjoy your order Enjoy your food or grocery items</li>
            </ol>
            <p>On your mobile, tablet, desktop or via our app, 
                Pizza Palace is a delicious experience! Pizza Palace Coorporate Service: With the most advanced corporate food delivery of its kind, 
                Pizza Palace helps you treat your employees to the best lunch delivery service available. For more information, 
                contact our corporate team via info@pizzapalace.com
            </p>
            <button>Order Now</button>
            </div>
        </div>
        
        <Footer/>
        </>
        
     );
}
 
export default About;