/* eslint-disable react/prop-types */
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const ImageCarousel = (props) => {
    
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={props.img1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={props.img2}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={props.img3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
    
}

export default ImageCarousel