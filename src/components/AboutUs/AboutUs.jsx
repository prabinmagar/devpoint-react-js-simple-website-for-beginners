import React from 'react';
import images from "../../constants/images";
import "./AboutUs.css";

const AboutUs = () => (
    <div className='about section__padding'>
        <div className='container'>
            <div className='about__content text__center'>
                <h2 className='section__title text__cap'>about us</h2>
                <p className='para__text text__grey'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam vitae reprehenderit veritatis doloribus sint provident vero? Ullam repellendus assumenda voluptate perferendis eligendi! Neque nostrum velit in temporibus, architecto error possimus officiis minus sit ipsa eveniet.</p>
                <img src = {images.signature} alt = "" />
            </div>
        </div>
    </div>
)

export default AboutUs;