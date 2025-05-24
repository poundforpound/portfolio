import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {menuHeader} from "../../assets/data/data.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";



export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <HeaderMenu items={menuHeader}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background: rgba(31, 31, 32, 0.9);
    padding: 20px 0;
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`
