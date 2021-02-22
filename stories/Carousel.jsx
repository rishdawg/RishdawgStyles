import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const ImageItem = ({ url }) => {
    const style = {
        backgroundImage: `url(${url})`
    }
    return (
        <div style={style} className="rish-carousel-main rish-carousel-main-img"/>
    )
};

const MediaItem = ({ media: { type, url, title} }) => {
    if(type === 'Image') {
        return <ImageItem url={url}/>;
    }
     else if(type === 'Youtube'){
        return (
            <div className="rish-carousel-main">
                <iframe src={url} className="rish-carousel-main-ytb" title={title}/>
            </div>
        )
     }
     else return <p>This is not a supported type of media at this point in time</p>
}; 

const Carousel = ({ all_media, viewPort }) => {
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
            <div className=" rish-carousel-mover rish-carousel-mover-left">
                <button onClick={() => goBack()}>
                    <FontAwesomeIcon icon={faChevronLeft} size="5x"/>
                </button>
            </div>
                <MediaItem media={currentMedia}/>
            <div className="rish-carousel-mover rish-carousel-mover-right">
                <button onClick={() => goForward()}>
                    <FontAwesomeIcon icon={faChevronRight} size="5x"/>
                </button>
            </div>
        </div>
    )
};

export default Carousel;
