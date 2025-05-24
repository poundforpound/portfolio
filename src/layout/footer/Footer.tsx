import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {socialList} from "../../assets/data/data.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {theme} from "../../styles/Theme.ts";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Svetlana</Name>
                <SocialList>
                    {socialList.map((item, index) => (
                        <SocialItem key={index}>
                            <SocialLink>
                                <Icon width={"21px"} height={"21px"} viewBox={"0 0 21 21"} iconId={`${item}`}/>
                            </SocialLink>
                        </SocialItem>
                    ))}
                </SocialList>
                <Copyright>@Copy& 2025</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background: ${theme.colors.primaryBg};
    padding: 40px 0;
`

const Name = styled.span`
    font-family: "Josifin Sans", sans-serif;
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 3px;
`

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`

const SocialItem = styled.li``

const SocialLink = styled.a`
    background-color: rgba(255,255,255,0.1);
    border-radius: 50%;
    width: 35px;
    height: 35px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    color:${theme.colors.accent};
    &:hover{
        color:${theme.colors.primaryBg};
        transform: translateY(-4px);
    }
`

const Copyright = styled.span`
font-weight: 400;
    font-size:12px;
    text-align: center;
    opacity: 0.5;
`