import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoIntro.css';

// ... other imports ...

const VideoIntro = ({ onVideoEnd }) => {
    const [showPrompt, setShowPrompt] = useState(true);
    const [playVideo, setPlayVideo] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'x' || event.key === 'X') {
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
                        console.log("Video ended. Trying to navigate to /about");
                        setPlayVideo(false);
                        navigate('/about');  // Redirect to your main homepage
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
