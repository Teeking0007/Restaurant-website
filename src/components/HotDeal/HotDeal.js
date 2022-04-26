import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './HotDeal.css';
import ProductCard from "../ProductCard/ProductCard";


const HotDeal = (props) => {
    return ( 
        <div className="hot-deals">
            {props.heading}
            <Swiper 
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            >
                
                    {props.hotProduct.map((product, index)=>{
                        return (
                            <SwiperSlide key={index}>
                                <ProductCard product={product}/>
                            </SwiperSlide>
                        )
                        
                    })}
                
                 
            </Swiper>
        </div>
     );
}
 
export default HotDeal;