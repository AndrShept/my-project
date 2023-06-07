import React, { FC } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { navMenu } from '../../utils/list';
import cn from 'clsx';
import { Container } from '../container/Container';

export const Header: FC = () => {
  return (
    <header>
      <Container>
        <nav className=' py-4 '>
          <div className=' flex items-center justify-between '>
            <Link
              to='/'
              className=' font-titillium text-2xl font-bold text-conduit-green hover:text-lime-600 ease-in-out duration-300 '
            >
              conduit
            </Link>
            <ul className='list-none flex gap-4'>
              {navMenu.map((item) => (
                <li>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      cn(
                        'text-black/30 py-[.425rem] hover:text-black/60 hover:no-underline ease-linear duration-100',
                        {
                          'text-black/80': isActive,
                        }
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
};
