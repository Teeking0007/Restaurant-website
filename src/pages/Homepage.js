import Hero from '../components/Hero/Hero';
import FeaturesProduct from '../components/FeaturesProduct/FeaturesProduct';
import { featuresProduct, hotProduct } from '../components/FeaturesProduct/Data';
import Meal from '../components/Meal/Meal';
import HotDeal from '../components/HotDeal/HotDeal';
import Footer from '../components/Footer/Footer';


const Homepage = () => {
    return (
        <div>
            <Hero />
        <FeaturesProduct featuresProduct={featuresProduct}/>
        <Meal />
        <HotDeal heading='Hot Deals' hotProduct={hotProduct}/>
        <Footer/>
        </div>
    )
}

export default Homepage;