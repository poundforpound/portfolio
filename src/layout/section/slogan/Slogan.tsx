import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Button} from "../../../components/Button.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.ts";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle>I Am Available For Freelance</SectionTitle>
                    <Button>Hire me</Button>
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
min-height: 30vh;
background: #ffe1f5;`