import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { FavoriteButton } from '../favorite-button/favorite';
import { TagList } from '../tag-list/TagList';
import { IArticle } from '../../api/@types/article-feed';

interface ArticleProps {
  article: IArticle;
}

export const Article: FC<ArticleProps> = ({ article }) => {
  return (
    <article>
      <div className='border-t border-black/10 py-6 '>
        <div className=' font-light flex items-center justify-between'>
          <div className='flex'>
            <Link to='/@nokwin'>
              <img
                src={article.author.image}
                alt='demo-avatar'
                className='inline-block h-8 w-8 rounded-full'
              />
            </Link>
            <div className='mr-6 ml-[0.3rem]  leading-4 flex flex-col '>
              <Link to='/@nokwin' className='font-medium'>
                {article.author.username}
              </Link>
              <span className='text-conduit-gray text-[0.8rem] '>
                {article.createdAt}
              </span>
            </div>
          </div>

          <FavoriteButton favoritesCount={article.favoritesCount} />
        </div>
      </div>
      <div className='pb-6'>
        <Link to='/article/qwer' className='hover:no-underline '>
          <h1 className='text-conduit-black mb-1 font-[600] text-2xl'>
            {article.title}
          </h1>
          <p className='text-conduit-gray font-light'>{article.description}</p>

          <div className='flex justify-between '>
            <p className='text-conduit-gray mt-6 text-[0.8rem] font-light '>
              Read more...
            </p>
            <ul className='flex gap-2 '>
              {article.tagList.map((tag) => (
                <TagList key={tag} tag={tag} />
              ))}
            </ul>
          </div>
        </Link>
      </div>
    </article>
  );
};
