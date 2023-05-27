import React from 'react'
import './VideoGallery.css';
import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.css';

const VideoGallery = () => {
    const videoProperties = [
        {
            id: 1,
            title: 'Baratanatyam',
            src:"https://youtu.be/5Gzd4TMc_1o",

        },
        {
            id: 2,
            title: 'Kuchipudi',
            src:"https://youtu.be/P2qmRc1YEU0",

        },
        {
            id: 3,
            title: 'Baratanatyam',
            src:"https://youtu.be/lCfQjHdTdV0",

        },
    ]
  return (
    <section>
    <div className='Video-carousel' >
        <Carousel className='video-margin'>
            {videoProperties.map((videoObj) => {
                return (
                    <Carousel.Item key={videoObj.id}>
                        <ReactPlayer 
                           url={videoObj.src}
                           pip={true}
                           controls={true}
                           playing={true}
                        />
                    </Carousel.Item>
                )
            })}
        </Carousel>
    </div>
    </section>
    )
  
}

export default VideoGallery

