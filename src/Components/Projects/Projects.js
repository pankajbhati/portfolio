import React, {useState} from 'react';
import Slider from 'react-slick';
import CardComponent from './CardComponent';
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa';

// images
import IndusValleyPartners from '../../assets/Indus_Valley_Partners.png'
import SuccessNumber from "../../assets/Success_Numbers.jpg";
import PankajBhati from '../../assets/pankaj_bhati.jpg';
import ImmanentSolutions from '../../assets/Immanent_Solutions.jpg';

// css files
import './Projects.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [IndusValleyPartners, SuccessNumber, PankajBhati, ImmanentSolutions];

const Projects = () => {

    const NextArrow = ({onClick}) => {
        return (
            <div className='arrow next' onClick={onClick}>
                <FaArrowRight style={{color: "black", fontSize: "30px"}} />
            </div>
        )
    }

    const PrevArrow = ({onClick}) => {
        return (
            <div className='arrow prev' onClick={onClick}>
                <FaArrowLeft style={{color: "black", fontSize: "30px"}} />
            </div>
        )
    }

    const Settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
        NextArrow: <NextArrow style={{color: "black", fontSize: "30px"}} />,
        PrevArrow: <PrevArrow />,
    };

    return (
        <>
        <div className='container-project'>
            <div>Projects</div>
            <div className='slider-project'>
                <Slider {...Settings}>
                    {images.map((img, index) => {
                        return(
                            <div>
                            {/* <img src={images[index]} style={{height: 400, width: 400}} alt="Image" /> */}
                            <CardComponent />
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
        </>
    )
};

export default Projects;