import React, { FC } from 'react';

interface ITagList {
  tag: string;
}
export const TagList: FC<ITagList> = ({ tag }) => {
  return (
    <li className='self-end font-light text-conduit-gray border border-conduit-gray hover:border-[#818a91] hover:text-[#818a91] transition-colors rounded-2xl  px-2 leading-5 text-[0.8rem]   '>
      {tag}
    </li>
  );
};
