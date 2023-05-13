import React from 'react'
import '../assets/footer.css';
import youtubeImg from '../assets/images/youtube.png';
import spotifyImg from '../assets/images/spotify.png';
import facebookImg from '../assets/images/facebook.png';
const Footer = () => {
    const youtube = () => {
        window.open("https://www.youtube.com/");
    }
    const spotify = () => {
        window.open("https://www.spotify.com/");
    }
    const facebook = () => {
        window.open("https://www.facebook.com/");
    }
  return (
    <div>
<div className='p-3 mt-5 bg'>
                <h1>The Generics</h1>
                <img src={youtubeImg} alt='youtubeimage' className='image' onClick={youtube}/>
                <img src={spotifyImg} alt='spotifyimage' className='image' onClick={spotify}/>
                <img src={facebookImg} alt='facebookimage' className='image' onClick={facebook}/>
            </div>
    </div>
    
  )
}

export default Footer