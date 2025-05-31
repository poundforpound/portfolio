import styled, {css} from "styled-components";
import {theme} from "../styles/Theme.ts";


export const Link = styled.a<{ active?:boolean }>`
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 10px;
    position: relative;
    z-index: 0;

    &::before {
        content: "";
        position: absolute;
        display: inline-block;
        background: ${theme.colors.accent};
        left: 0;
        right: 0;
        bottom: 5px;
        z-index: -1;
            height: 0;
        transition: ${theme.animations.transition};

        ${props => props.active && css<{ active?: boolean }>`
            height: 10px;
        `}
    }

    &:hover {
        &::before {
            height: 10px;
        }
    }
`