import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';

const ApplyToThePartnerProgram = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <div className='bg-green-500 text-white p-8 leading-loose '>
                <div className='basis-1/2'>
                    <h1 className='text-8xl font-extrabold'>Write.<br/>
                        Connect.<br />
                        Earn.</h1>
                    <p>
                        Writing has its rewards when you join the Partner<br /> Program. Learn how to get paid for the content <br /> you publish and the audiences you build.
                    </p>   
                    <button className='btn rounded-full text-white mt-8'>Apply now</button>
                </div>
                <div className='basis-1/2'>

                </div>
            </div>

            <div>
                <h1 className='text-8xl font-bold text-center p-9'>Two ways to earn.</h1>
            </div>
            <div className='flex'>
                <div className=' basis-1/2'>
                    <div className="divider"></div>
                    {/* <div className="divider divider-horizontal  bg-red-700 text-center"></div> */}
                    <h1 className='text-5xl font-semibold p-12'>Member reading time.</h1>
                    <p className='px-8'>The more time Medium members spend reading your content, the more money you earn. Learn more about how we calculate <span className='link'>reading time.</span></p>
                    <div className="divider "></div>
                </div> 
                <div className="divider divider-horizontal"></div>
                <div className=' basis-1/2'>
                    <div className="divider"></div>
                    <span className="indicator-item indicator-start badge ">new</span>
                    {/* <div className="divider divider-horizontal  bg-red-700 text-center"></div> */}
                    <h1 className='text-5xl font-semibold p-9'>Referred memberships.</h1>
                    <p className='px-6'>In addition to the content you publish, you can refer readers to become Medium members and get half of  their membership fee, net of standard payment processor fees, for as long as they remain a member.Learn more about  <span className='link'>Referred Memberships.</span></p>
                    <div className="divider "></div>
                </div> 
            </div>
            <div className='lg:flex justify-around'>
                <h1 className='text-9xl font-bold'>How to get<br className='hidden lg:block md:block'/> started.</h1>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <tbody>
                                <tr>
                                    <th>01</th>
                                    <td>Apply once you've met the eligibility criteria (see below).</td>
                                </tr>
                                <tr>
                                    <th>02</th>
                                    <td>Get accepted, celebrate.</td>
                                </tr>
                                <tr>
                                    <th>03</th>
                                    <td>To start earning, publish stories with the meter my story box checked.</td>
                                </tr>
                                <tr>
                                    <th>04</th>
                                    <td>Earn money when Medium members spend time reading your work.</td>
                                </tr>
                                <tr>
                                    <th>05</th>
                                    <td>Boost earnings through Referred Memberships.</td>
                                </tr>
                                <tr>
                                    <th>06</th>
                                    <td>Get paid monthly.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* <div>
                <h3 className='text-4xl text-center font-semibold bg-pink-500 p-8 text-white' >Eligibility criteria.</h3>
            </div> */}


        </div>
    );
};

export default ApplyToThePartnerProgram;