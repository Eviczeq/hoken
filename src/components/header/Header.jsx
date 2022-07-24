import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import myImage from '../../assets/logo.png';
import {Container,Wrapper, Left, SearchContainer, Input, Center, LogoImg ,Logo, Right} from './header-styled'
import styled from 'styled-components';
 const LogoImgBig = styled.img`
  width: 30%;
  margin-top: 50px;
`;
const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder='サイト内検索'/>
            <SearchIcon style={{color:"gray", fontSize:16}} />
          </SearchContainer>
        </Left>
        <Center>
          <LogoImg src={myImage}/>
          <Logo>
            火災保険
          </Logo>
        </Center>
        <Right>
        <LogoImgBig src={myImage}/>
        </Right>
      </Wrapper>
      
    </Container>
  )
}

export default Header