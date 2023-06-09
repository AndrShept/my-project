import React, {FC} from 'react';
import cn from 'clsx';

interface ISpinner{
    className?:string
}

export const Spinner:FC<ISpinner> = ({ className }) => {
  return (
    <div className='flex justify-center items-center mt-40 '>
      <div
        className={cn(
          `inline-block border-[5px] rounded-full border-t-[#818a91] animate-spin h-10 w-10 mr-4 `,
          className
        )}
      />
      <span className='text-[#818a91]'>Loading...</span>
    </div>
  );
};
