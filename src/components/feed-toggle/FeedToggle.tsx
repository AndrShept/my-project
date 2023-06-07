import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const FeedToggle: FC = () => {
  return (
    <div>
      <ul>
        <li className='bg-white border-b-2 border-conduit-green px-4 py-2  inline-block'>
          <NavLink to='/'>Global Feed</NavLink>
        </li>
      </ul>
    </div>
  );
};
