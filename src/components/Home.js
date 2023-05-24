import React from 'react';
import playImg from '../assets/images/play.png';
import '../assets/home.css';
import TourList from './TourList';
const Home = () => {
    
  return (
    <>
     <div className='text-bg-secondary p-3 text-center homeContainer'>
                <h1>The Generics</h1>
                <div className='homeBox'>
                  <p className='content'>Get our Latest Album</p>
                  <img src={playImg} alt='playImg' className='playIcon'/>
                </div>
            </div>
            <div>
                  <TourList />
                </div>
    </>
  )
}

export default Home