import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { FavoriteButton } from '../favorite-button/favorite';
import { TagList } from '../tag-list/TagList';
import { IArticle } from '../../api/@types/article-feed';
import { DateTime } from 'luxon';
import ReactPaginate from 'react-paginate';

interface ArticleProps {
  articles: IArticle[] | undefined;
  pageCount: number | undefined;
  page: number,
  setPage: (selected : number)  => void
}

export const Article: FC<ArticleProps> = ({ articles, pageCount, page, setPage }) => {
  
  const handleChangePage = ({selected}: {selected:number}  ) =>{
    setPage(selected)
  }
  return (
    <>
      {articles?.map((article) => (
        <article>
          <div className='border-t border-black/10 py-6 '>
            <div className=' font-light flex items-center justify-between'>
              <div className='flex'>
                <Link to={`/@${article.author.username}`}>
                  <img
                    src={article.author.image}
                    alt='demo-avatar'
                    className='inline-block h-8 w-8 rounded-full'
                  />
                </Link>
                <div className=' ml-2  leading-4 flex flex-col '>
                  <Link
                    to={`/@${article.author.username}`}
                    className='font-medium'
                  >
                    {article.author.username}
                  </Link>
                  <span className='text-conduit-gray text-[0.8rem] '>
                    {DateTime.fromISO(article.createdAt).toLocaleString(
                      DateTime.DATETIME_FULL
                    )}
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
              <p className='text-conduit-gray font-light'>
                {article.description}
              </p>

              <div className='flex justify-between '>
                <p className='text-conduit-gray mt-6 text-[0.8rem] font-light  '>
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
      ))}
      <ReactPaginate
        previousLabel
        nextLabel
        pageRangeDisplayed={pageCount! / 20}
        containerClassName='flex justify-center text-conduit-darkGreen  my-8   '
        pageLinkClassName=' border border-1 border-conduit-gray px-3 py-2 -ml-px '
        activeLinkClassName=' text-white   font-bold bg-conduit-darkGreen duration-500  border   border-conduit-darkGreen '
        pageCount={pageCount! / 20}
        onPageChange={handleChangePage}
        forcePage={page}
      />
    </>
  );
};
