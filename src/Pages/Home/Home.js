import React from 'react';
import Login from '../../Shared/Login/Login';
import Media from '../Media/Media';
import MyMedia from '../Media/MyMedia';

const Home = () => {
    return (
        <div>
          <h1 className='text-6xl text-primary'>Welcome to Spectra </h1>
          <p className='text-4xl text-stone-600'>Your personal mirror to share with world</p>

          <br></br>
        <Login></Login>
          {/* <Media></Media>
          <MyMedia></MyMedia> */}
         
         <br/>
          {/* <MyMedia></MyMedia> */}
        </div>
    );
};

export default Home;