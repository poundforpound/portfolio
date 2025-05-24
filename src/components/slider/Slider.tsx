import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.tsx";
import {theme} from "../../styles/Theme.ts";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                    </Text>
                    <Name>
                        @ivan ivanow
                    </Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span className={"active"}></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    border: 1px solid red;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`


const Slide = styled.div`
    text-align: center;`

const Text = styled.p``

const Name = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 1;
    margin: 22px 0 42px;
`

const Pagination = styled.span`
    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 20px;

        & + span {
            margin-left: 5px;
        }
        &.active {
            background-color: ${theme.colors.accent};
            width: 20px;
        }
    }
`