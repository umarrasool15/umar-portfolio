import React from 'react';
import './AboutMe.css';  // This will contain our styling

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <div className="image-container">
                <img src="/path/to/your/image.jpg" alt="Umar Rasool" />
            </div>
            <h1>Hi, my name is Umar Rasool</h1>
            <p>Aspiring developer.</p>
            <p>Lifelong learner.</p>
            <p>Seeking Internships for Winter 2024 / Spring 2024.</p>
        </div>
    );
}

export default AboutMe;
