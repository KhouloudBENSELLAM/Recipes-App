import React from 'react';

export default function AboutUs(){

    return(
        <div className='AboutUS'>
            <div className="pictures-about">
                <div className='sideone'>
                    <img src="./About images/pic1.jpeg" alt="pic1" />
                    <img src="./About images/pic2.jpg" alt="pic2" />
                    <img src="./About images/pic3.jpeg" alt="pic3" />
                </div>
                <div className='sidetwo'>
                    <img src="./About images/pic4.jpeg" alt="pic4" />
                    <img src="./About images/pic5.jpeg" alt="pic5" />
                    <img src="./About images/pic6.jpg" alt="pic6" />
                </div>
                <div className='sidethree'>
                    <img src="./About images/pic7.jpg" alt="pic7" />
                    <img src="./About images/pic8.jpeg" alt="pic8" />
                    <img src="./About images/pic9.jpeg" alt="pic9" />
                </div>
            </div>
            <div className="text-about">
                <h1>What are we about </h1>
                <p>
                Welcome to <b>TastyThreads</b>, a vibrant online space where food enthusiasts from all walks of life come together to celebrate the art of cooking. 
                Our platform is designed to inspire creativity in the kitchen, connect passionate food lovers, and provide a space to share and discover recipes 
                that bring joy to the table.

                At <b>TastyThreads</b>, we believe that cooking is more than just preparing meals—it's about crafting memories, exploring cultures, and weaving stories 
                through flavors. Whether you're a seasoned chef, a home cook, or someone just starting their culinary journey, our community is here to guide, support, 
                and celebrate you.
                </p>
            </div>
            
        </div>
    )
}