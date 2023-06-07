import React from 'react';

export const PopularTags = () => {
  return (
    <div className='w-[150px]  bg-[#f3f3f3] p-2 flex-wrap ml-10'>
      <span className='text-conduit-black '>Popular Tags</span>

      <ul className='flex  gap-2 flex-wrap  min-h-min mt-2 '>
        <li className=' text-white  bg-[#818a91] hover:bg-[#494f55] cursor-pointer  rounded-2xl  px-2 leading-5 text-[0.8rem]   '>
          fddsfdd
        </li>
        <li className=' text-white  bg-[#818a91] hover:bg-[#494f55] cursor-pointer  rounded-2xl  px-2 leading-5 text-[0.8rem]   '>
          dsfdsdf
        </li>
        <li className=' text-white  bg-[#818a91] hover:bg-[#494f55] cursor-pointer  rounded-2xl  px-2 leading-5 text-[0.8rem]   '>
          fdssfdsdf443
        </li>
        <li className=' text-white  bg-[#818a91] hover:bg-[#494f55] cursor-pointer  rounded-2xl  px-2 leading-5 text-[0.8rem]   '>
          sdfdsfsdfsdfds
        </li>
      </ul>
    </div>
  );
};
