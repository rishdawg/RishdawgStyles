import React, { useState } from 'react';

const ImageItem = ({ url }) => {
    const style = {
        backgroundImage: `url(${url})`,
        backgroundPosition: 'center center',
        backgroundSize: 'contain',
        'background-repeat':'no-repeat',
        height: '80%',
    }
    return (
        <div style={style}> </div>
    )
};

const MediaItem = ({ media: { type, url} }) => {
    if(type === 'Image') {
        return <ImageItem url={url}/>;
    }
     else if(type === 'Youtube'){
        return (
            <iframe src={url} width="80%" height="80%"/>
        )
     }
     else return <p>This is not a supported type of media at this point in time</p>
}; 

const Carousel = ({ all_media }) => {
    const [ currentMediaIndex, setCurrentMediaIndex ] = useState(0);
    const goBack = () => {
        if(currentMediaIndex > 0) {
            setCurrentMediaIndex(currentMediaIndex - 1);
        }
        else {
            setCurrentMediaIndex(all_media.length - 1);
        }
    }
    const goForward = () => {
        if(currentMediaIndex + 1 < all_media.length) {
            setCurrentMediaIndex(currentMediaIndex + 1);
        }
        else {
            setCurrentMediaIndex(0);
        }
    }

    const currentMedia = all_media[currentMediaIndex];
    return (
        <div className="rish-carousel">
           <MediaItem media={currentMedia}/>
           <button onClick={() => goBack()}>prev</button>
           <button onClick={() => goForward()}>Next</button>
        </div>
    )
};

export default Carousel;
