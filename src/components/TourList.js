import React from 'react';
import '../assets/tourlist.css';

const TourList = () => {
    const tourList = [
        {
            id:1,
            date: 'JUL16',
            town: 'DETROIT, MI',
            place: 'DTE ENERGY MUSIC THEATRE',
        },
        {
            id:2,
            date: 'JUL19',
            town: 'TORONTO,ON',
            place: 'BUDWEISER STAGE',
        },
        {
            id:3,
            date: 'JUL 22',
            town: 'BRISTOW, VA',
            place: 'JIGGY LUBE LIVE',
        },
        {
            id:4,
            date: 'JUL 29',
            town: 'PHOENIX, AZ',
            place: 'AK-CHIN PAVILION',
        },
        {
            id:5,
            date: 'AUG 2',
            town: 'LAS VEGAS, NV',
            place: 'T-MOBILE ARENA',
        },
        {
            id:6,
            date: 'AUG 7',
            town: 'CONCORD, CA',
            place: 'CONCORD PAVILION',
        }
    ]
  return (
    <>
    <div className='tourHeading'>Tours</div>
    <div className='tourlistContainer'>
    {
        
        tourList.map((list) => <li className='tourList' key={list.id}><p>{list.date}</p> <p>{list.town}</p> <p>{list.place}</p> <button>BUY TICKETS</button></li>) 
    }
    </div>
    </>
    

  )
}

export default TourList