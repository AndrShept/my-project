import React from 'react';

export const FavoriteButton = ({
  favoritesCount,
}: {
  favoritesCount: number;
}) => {
  return (
    <div className='flex items-center gap-1 border border-conduit-green px-2 py-1 leading-5 cursor-pointer text-sm rounded-[0.2rem] font-[400] text-conduit-green hover:text-white hover:bg-conduit-green duration-200 focus:bg-conduit-darkGreen'>
      <i className='ion-heart'></i>
      <span>{favoritesCount}</span>
    </div>
  );
};
