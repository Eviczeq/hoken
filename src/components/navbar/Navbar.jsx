import React from 'react'
import styled from 'styled-components';

const Navigation = styled.nav`
  
`
const Ul = styled.ul`
  padding: 12px 180px;
  background: white;
  color: white;
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
`;
const Li = styled.li`
  color: black;
  text-decoration: none;
  border-radius: 18px;
  padding: 6px 24px;
  font-size: 18px;
  cursor: pointer;
  &:hover{
    background-color: grey;

  }
`;
const Navbar = () => {
  return (
    <Navigation>
        <Ul>
          <Li>
          会社概要
          </Li>
          <Li>
          お問合わせ
          </Li>
          <Li>
            見積り
          </Li>
        </Ul>
      </Navigation>
  )
}

export default Navbar