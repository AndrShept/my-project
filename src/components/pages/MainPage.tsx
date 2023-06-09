import React, { FC } from 'react';
import { Article } from '../article/Article';
import { Header } from '../header/Header';
import { Banner } from '../banner/Banner';
import { Container } from '../container/Container';
import { FeedToggle } from '../feed-toggle/FeedToggle';
import { PopularTags } from '../popular-tags/PopularTags';
import { useGetGlobalFeedQuery } from '../../api/repository';
import { Spinner } from '../spinner/Spinner';

export const MainPage: FC = () => {
  const [page, setPage] = React.useState(1)
  const { data, error, isLoading } = useGetGlobalFeedQuery({page : page + 1});
  console.log(data?.articlesCount);

  if (error) {
    return <Container> Feed ERROR loading... </Container>;
  }

  return (
    <section>
      <Header />

      <Banner />

      <Container>
        <div className='flex justify-between'>
          <div className='w-2/3'>
            <FeedToggle />
            {isLoading ? (
              <Spinner className='h-12 w-12' />
            ) : (
         
                <Article articles={data?.articles} page={page} setPage={setPage}  pageCount={data?.articlesCount} />
            
            )}
          </div>
          <div>
            <PopularTags />
          </div>
        </div>
      </Container>
    </section>
  );
};
