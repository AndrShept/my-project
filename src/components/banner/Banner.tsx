import React, { FC } from 'react';
import { Container } from '../container/Container';

export const Banner: FC = () => {
  return (
    <div className='bg-conduit-green text-white p-8 mb-8 drop-shadow-md'>
      <Container>
        <h1 className='text-white font-titillium font-bold text-[3.5rem] text-center drop-shadow-md'>
          conduit
        </h1>
        <p className='text-center text-[1.5rem]  font-light '>
          A place to share your knowledge.
        </p>
      </Container>
    </div>
  );
};
