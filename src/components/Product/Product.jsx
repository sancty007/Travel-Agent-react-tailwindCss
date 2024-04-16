import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//



export const Card =(props) => {

    const {title , rating , price ,src} = props;

    return (
        <div className="w-72">
            <div className="pb-4">
                <img src={src} alt="" />
            </div>
            <div className="flex justify-between pb-1">
                <div>{title}</div>
                <div>{rating}</div>
            </div>
            <div>{price}</div>
        </div>
    )
}

export const CustomPrevArrow =(props)=> {
    const { onClick } = props;
    return (
        <button className="p-4 rounded-full border border-gray-300" onClick={onClick}>
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7.50012H3.83L9.42 1.91012L8 0.500122L0 8.50012L8 16.5001L9.41 15.0901L3.83 9.50012H16V7.50012Z" fill="#B9B9B9"/>
            </svg>
        </button>
    )
}


export const CustomNextArrow =(props)=> {
    const { onClick } = props;
    return (
        <button className="rounded-full bg-blue-400 p-4 " onClick={onClick}>
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0.500122L6.59 1.91012L12.17 7.50012H0V9.50012H12.17L6.59 15.0901L8 16.5001L16 8.50012L8 0.500122Z" fill="white"/>
            </svg>
        </button>
    )
    
}







export const Slide =React.forwardRef((props,ref) =>{

    const cardData = [
        {
            src: "/public/img/product_png/venice.png",
            title: "Venice, Italy",
            rating: "4.5",
            price: "Starts from $900"
        },
        {
            src: "/public/img/product_png/bangkok.png",
            title: "Bangkok, Thailand",
            rating: "4.8",
            price: "Starts from $1200"
        },
        {
            src: "/public/img/product_png/dubai.png",
            title: "Dubai, UAE",
            rating: "4.8",
            price: "Starts from $1200"
        },
        {
            src: "/public/img/product_png/new-york.png",
            title: "New York, USA",
            rating: "4.8",
            price: "Starts from $1200"
        },
    ];
    
    

    const settings = {
        arrows: false, // Masquer les flèches par défaut
        dots: false, // Masquer les points indicatifs par défaut
        indfinite : true,
        speed:500,
        slidesToShow:4,
        slidesToScroll:1,
        centerMode:true,
        nextArrow:<CustomNextArrow />,
        prevArrow :<CustomPrevArrow />,
    }

    return(
        <Slider ref={ref} {...settings}>

            {cardData.map((card ,index) => (
                <div key={index} className="px-4">
                    <Card 
                        src={card.src} 
                        title={card.title}
                        rating={card.rating}
                        price={card.price}
                    />
                </div>
            ))}
        </Slider>    
    );
});




export const Product = () => {

    const sliderRef = useRef() ;// creation d'une réference au composant Slider 


    return (
        <>

            <div className="contaire mx-auto py-14 pl-28">

                <div className="flex justify-between pb-8 ">
                    <div className="">
                        <h1 className="pb-4 text-3xl">Popular Destinations</h1>
                        <p>See our popular destinations that our client choose.</p>
                    </div>
                     {/* Passage de la méthode slickNext au bouton next  pour defiler le caroussel vers l'avant  */}
                    <div className="flex justify-center items-center gap-4 mr-28">
                        <CustomPrevArrow onClick={() => sliderRef.current.slickPrev()} />
                        <CustomNextArrow onClick={() => sliderRef.current.slickNext() } />
                    </div>

                </div>

               
                <Slide ref={sliderRef}/>
            </div>

        </>
    )
}

export default Product