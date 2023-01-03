import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyMedia = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className='grid grid-cols-3 mt-6'>
            
        {
            data?.map(comment =><div
            key={comment._id}
            >

          
        <div className="card w-full bg-base-100 bordered shadow-xl">
<figure><img src={comment?.image} alt="comment" /></figure>
<div className="card-body">
<span className="card-title">
{comment?.name}
{/* <div className="flex items-center h-screen px-6"> */}
  {/* <div class="cursor-pointer"> */}
    <span className="flex h-min w-min space-x-1 items-center rounded-full text-gray-400 hover:text-rose-600 bg-gray-700 hover:bg-rose-50 py-1 px-2 text-xs font-medium">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current hover:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
      <span class="font-semibold text-xs">10</span>
    </span>
  
{/* </div>  */}
</span>

<input class="enabled:hover:border-gray-600 " placeholder='comment' />
<div className="card-actions justify-end">
  <button className="badge badge-outline btn btn-accent">comment</button>
</div>
<input className='btn btn-accent w-full mt-4' value="Details" type="submit" />
</div>
</div>
</div>) }
    </div>
    );
};

export default MyMedia;