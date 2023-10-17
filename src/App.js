// App.js

import React from 'react';
import VideoIntro from './Components/VideoPage';

function App() {
    const handleVideoEnd = () => {
        // Do something after the video ends, like transitioning to another view.
    };

    return (
        <div className="App">
            <VideoIntro onVideoEnd={handleVideoEnd} />
            {/* Rest of your components */}
        </div>
    );
}

export default App;
