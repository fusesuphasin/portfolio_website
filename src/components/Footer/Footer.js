import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:0638419845">0638419845</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="gmail:suphasin.yosang@gmail.com">
            suphasin.yosang@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project a time</Slogan>
        </CompanyContainer>
        <SocialIcons href="gttps://github.com">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="gttps://linkedin.com">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="gttps://instagram.com">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
