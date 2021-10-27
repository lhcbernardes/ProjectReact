import styled, { css } from 'styled-components';
import { GrLinkedin } from 'react-icons/gr';
import { AiFillHome, AiOutlineBell, AiFillCaretDown, AiOutlinePoweroff } from 'react-icons/ai';

export const Nav = styled.div`
 background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;

  @media (min-width: 1180px) {
    display: block;
  }
`;

export const NavLogo = styled.div`
color: #fff;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
`;

// .fa-firstdraft {
//   margin-left: 0.5rem;
//   font-size: 1.6rem;
// }

export const NavMenu = styled.div`
display: flex;
  flex-direction: row;
  list-style: none;
  text-align: center;
  width: 60vw;
  justify-content: end;
  margin-right: 2rem;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  height: 80px;
`;

export const NavLinks = styled.div`
 color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;

  &:holver{
    background-color: var(--color-primary);
  border-radius: 4px;
  transition: all 0.2s ease-out;
  }
`;


// .fa-bars {
//   color: #fff;
// }

// .nav-links-mobile {
//   display: none;
// }
