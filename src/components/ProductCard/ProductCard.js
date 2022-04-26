import './ProductCard.css'


const ProductCard = (props) => {
    const {img, alt, name, desc, price, button} = props.product
    return ( 
        <div className="card">
            <div className='image'>
                {<img src={img} alt={alt}/>}
            </div>
            <div className='desc'>
                <h2>{name}</h2>
                <p>{desc}</p>
                <p>${price}</p>
                <button>{button}</button>
            </div>
        </div>
     );
}
 
export default ProductCard;