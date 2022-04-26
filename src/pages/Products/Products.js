import './Products.css'
import {allProduct} from '../../components/FeaturesProduct/Data'
import ProductCard from '../../components/ProductCard/ProductCard';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


const Products = () => {
    return ( 
        <>
        <Navbar/>
        <div className="products">
            <div>
                <h1>Products</h1>
            </div>
            <div className='pro'>
            {allProduct.map((product, index)=>{
                return (
                    <ProductCard product={product} key={index}/>
                )
               
            })}
            </div>
            
        </div>
        <Footer/>
        </>
        
     );
}
 
export default Products;