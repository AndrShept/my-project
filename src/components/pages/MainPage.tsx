import React, { FC } from 'react';
import { Article } from '../article/Article';
import { Header } from '../header/Header';
import { Banner } from '../banner/Banner';
import { Container } from '../container/Container';
import { FeedToggle } from '../feed-toggle/FeedToggle';
import { PopularTags } from '../popular-tags/PopularTags';

export const MainPage: FC = () => {
  return (
    <section>
      <Header />
      <Banner />

      <Container>
        <div className='flex'>
          <div className='w-2/3'>
            <FeedToggle />
            <Article />
            <Article />
            <Article />
            <Article />
          </div>
          <div>
            <PopularTags />
          </div>
        </div>
      </Container>
    </section>
  );
};
