import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const IntroPage = () => {
    const navigate = useNavigate();

    console.log("IntroPage component rendered");

    useEffect(() => {
        const handleKeyPress = (event) => {
            console.log("Key Pressed:", event.key);
            if (event.key === 'x' || event.key === 'X') {
                console.log("X key detected.");
                navigate('/video');
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [navigate]);

    return (
        <div>
            Test Intro Page
        </div>
    );
}

export default IntroPage;
