import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { FavoriteButton } from '../favorite-button/favorite';
import { TagList } from '../tag-list/TagList';

export const Article: FC = () => {
  return (
    <article>
      <div className='border-t border-black/10 py-6'>
        <div className='mb-4 font-light flex items-center justify-between'>
          <div className='flex'>
            <Link to='/@nokwin'>
              <img
                src='https://api.realworld.io/images/demo-avatar.png'
                alt='demo-avatar'
                className='inline-block h-8 w-8 rounded-full'
              />
            </Link>
            <div className='mr-6 ml-[0.3rem]  leading-4 flex flex-col '>
              <Link to='/@nokwin' className='font-medium'>
                Dmytro Batarin
              </Link>
              <span className='text-conduit-gray text-[0.8rem]'>
                9 october, 2022
              </span>
            </div>
          </div>

          <FavoriteButton />
        </div>
      </div>
      <Link to='/article/qwer' className='hover:no-underline'>
        <h1 className='text-conduit-black mb-1 font-semibold text-2xl'>
          {' '}
          If we quantify the alarm, we can get to the FTP pixel through the
          online SSL interface!
        </h1>
        <p className='text-conduit-gray'>
          Omnis perspiciatis qui quia commodi sequi modi. Nostrum quam aut
          cupiditate est facere omnis possimus. Tenetur similique nemo illo
          soluta molestias facere quo. Ipsam totam facilis delectus nihil quidem
          soluta vel est omnis.
        </p>

        <div className='flex justify-between items-center'>
          
          <p className='text-conduit-gray mt-6 text-[0.8rem] font-light '>Read more...</p>
          <TagList />
        </div>
      </Link>

      <hr className='bg-conduit-gray mt-6' />
    </article>
  );
};
