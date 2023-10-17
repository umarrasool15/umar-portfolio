import React, { useState, useEffect } from 'react';
import './VideoIntro.css';

const VideoIntro = ({ onVideoEnd }) => {
    const [showPrompt, setShowPrompt] = useState(true);
    const [playVideo, setPlayVideo] = useState(false);

    useEffect(() => {
        const handleKeyPress = (event) => {
            console.log("Key Pressed:", event.key);
            if (event.key === 'x' || event.key === 'X') {
                console.log("X key detected.");
                setShowPrompt(false);
                setPlayVideo(true);
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <div className="video-intro">
            {showPrompt && <span>Press X to continue</span>}
    
            {playVideo && (
                <video 
                    width="100vw" 
                    height="100vh" 
                    autoPlay 
                    onEnded={() => {
                        setPlayVideo(false);
                        if (onVideoEnd) onVideoEnd();
                    }}
                >
                    <source src="/startup.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
        </div>
    );
}

export default VideoIntro;
