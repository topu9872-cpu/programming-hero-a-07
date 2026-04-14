import React from 'react';
import { Link } from 'react-router';

const AllFriends = ({data}) => {
  
    return (
        <div className='mt-6'>
            <h2 className='text-xl font-bold ml-26 mt-20'>Your Friends</h2>

            <Link to='/modal'>
       
     <div className=" justify-center mt-4 grid grid-cols-4 gap-4 mx-auto items-center w-10/12">
        
        {data.map(card=>(
  <ul>
    
    <li className="text-center bg-[#f8fafc] py-10 rounded-xl shadow-md">
        <div className=''>
        <img src={card.picture} alt={card.name} className='w-10 h-10 flex justify-center mx-auto -1 rounded-full' />
        </div>
      <h3 className="font-semibold text-xl">{card.name}</h3>
      <p className="text-gray-600">{card.days_since_contact}</p>
      <div>
        <p>{card.tags[0]}</p>
        <p>{card.tags[1]}</p>
      </div>
      <h2>{card.status}</h2>
    </li>
  </ul>
  ))}
</div>
</Link>
       </div>  
    );
};

export default AllFriends; 