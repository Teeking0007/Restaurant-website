import ProductCard from '../ProductCard/ProductCard';
import './FeaturesProduct.css'


const FeaturesProduct = (props) => {
    
    return ( 
        <div className='features'>
            <h1>Features Meals</h1>
            <div className='card-con'>
            {props.featuresProduct.map((product, index)=>{
                return (
                    <ProductCard product={product} key={index}/>
                )
               
            })}
            </div>
            
            
        </div>
     );
}
 
export default FeaturesProduct;