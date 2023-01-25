import React from 'react';
import per1 from '../../Assets/img1.jpg'
import per2 from '../../Assets/img2.jpg'
import per3 from '../../Assets/img3.jpg'
import DemoWritter from './DemoWritter';
const DemoWriterCall = () => {
   
    // grid-cols-1 md:grid-cols-2 lg:grid-cols-3
    return (
        <div className="grid   gap-3 my-20 ">
            {
                // writters?.map(writter=><DemoWritter key={writter?.id} writter={writter}  ></DemoWritter>)
            }
        </div>
    );
};

export default DemoWriterCall;