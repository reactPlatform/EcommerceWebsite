import React from 'react';
import playImg from '../assets/images/play.png';

const Home = () => {
    
  return (
    <>
     <div className='text-bg-secondary p-3 text-center'>
                <h1>The Generics</h1>
                <div>
                  <p>Get our Latest Album</p>
                  <img src={playImg} alt='playImg'/>
                </div>
            </div>
    </>
  )
}

export default Home