import React from 'react';
import AnotherSlide from './AnotherSlide/AnotherSlide';
import Feedback from './Feedback/Feedback';
import SliderPage from './SliderPage/SliderPage';

const Creator = () => {
    return (
        <div>
            <SliderPage />
            <Feedback />
            <AnotherSlide />
        </div>
    );
};

export default Creator;