import React from 'react'
import ReactPlayer from 'react-player';
import { useState } from 'react';
function Videoplayer() {
    const [isPlaying, setIsPlaying] = useState(true);

        const handlePlay = () => {
        setIsPlaying(true);
        };

        const handlePause = () => {
        setIsPlaying(false);
        };
  return (
    <div>
      <ReactPlayer
                      url="https://zee-demo.s3.ap-south-1.amazonaws.com/Mission_+Impossible+%E2%80%93+Dead+Reckoning+Part+One+_+Official+Trailer+(2023+Movie)+-+Tom+Cruise.mp4"
                      playing={isPlaying}
                      controls={true}
                      onPause={handlePause}
                      onPlay={handlePlay}
                      width={"100vw"}
                      height={"100vh"}
                    />
    </div>
  )
}

export default Videoplayer
