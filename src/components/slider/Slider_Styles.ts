import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

const Slider = styled.div`
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

export const S = {
    Slider,
    Slide,
    Name,
    Text,
    Pagination,
}