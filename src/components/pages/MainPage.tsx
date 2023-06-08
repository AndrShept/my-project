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
  const { data, error, isLoading } = useGetGlobalFeedQuery('');
  console.log(data);
  if (isLoading) {
    return (
      <Container>
        <Spinner className='h-12 w-12' />
      </Container>
    );
  }
  if (error) {
    return <Container> Feed ERROR loading... </Container>;
  }

  return (
    <section>
      <Header />
      <Banner />

      <Container>
        <div className='flex justify-center'>
          <div className='w-2/3'>
            <FeedToggle />
            {data?.articles.map((article) => (
              <Article article={article} key={article.slug}/>
            ))}
          </div>
          <div>
            <PopularTags />
          </div>
        </div>
      </Container>
    </section>
  );
};
