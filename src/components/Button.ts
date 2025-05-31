import styled from "styled-components";
import {theme} from "../styles/Theme.ts";


export const Button = styled.button`
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 1.4;
    width: 170px;
    height: 32px;
    position: relative;
    z-index: 0;
    &:hover{
        &::before{
            width: 100%;
            height: 100%;
        }
    }
    &::before{
        content:"";
        display:inline-block;
        width:50%;
        height:10px;
        position:absolute;
        background-color:${theme.colors.accent};
        bottom:0;
        left:50%;
        transform:translateX(-50%);
            z-index: -1;
        
        transition: ${theme.animations.transition};
    }
    
`