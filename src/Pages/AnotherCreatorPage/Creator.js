import React from 'react';
import CreateSpace from './CreateYourSpacePage/CreateSpace';
import JoinNetowork from './JoinNetoworkPage/JoinNetowork';
import SliderCreatorPage from './SliderCreatorPage/SliderCreatorPage';


const Creator = () => {
    return (
        <div>
            <SliderCreatorPage />
            <JoinNetowork />
            <CreateSpace />
        </div>
    );
};

export default Creator;