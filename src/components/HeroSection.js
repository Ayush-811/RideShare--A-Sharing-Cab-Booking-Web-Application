import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section
            className="text-white py-20"
            style={{
                backgroundImage: `url('https://www.shutterstock.com/image-vector/smart-phone-ride-share-app-260nw-1236452593.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                zIndex: 1,
            }}
        >
            <div
                className="container mx-auto px-4 text-center relative z-10"
                style={{
                    padding: '20px', // Optional: Add padding to the content
                    borderRadius: '10px', // Optional: Add rounded corners to the content
                }}
            >
                <h1 className="text-5xl font-bold mb-4 text-gray-800">Travel Together, Save Together</h1>
                <p className="text-lg mb-8 text-gray-700">Find a Ride, Make a Friend</p>

                <Link to="/search" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition duration-300">
                    Search for a ride
                </Link>
            </div>
        </section>
    );
};

export default HeroSection;