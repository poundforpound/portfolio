import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

type menuProps = {
    items: Array<string>
}

export const HeaderMenu = (props: menuProps) => {
    return (
        <StyledMenu>
            <ul>
                {props.items.map((value: string, i: number) =>
                    <StyledItem key={`${i}_${value}`}>
                        <Link href="">
                            {value}
                            <Mask>
                                <span>{value}</span>
                            </Mask>
                            <Mask>
                                <span>{value}</span>
                            </Mask>
                        </Link>
                    </StyledItem>
                )}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
`


const Link = styled.a`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 30px;
    font-weight: 400;
    text-align: center;
    color: transparent;
`

const Mask = styled.span`
    position: absolute;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    top: 0;
    left: 0;
    //outline: 1px solid red;
    color: ${theme.colors.accent};
    
    &+&{   
        top:50%;
        span{
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`

const StyledItem = styled.li`
    position: relative;
    &::before{
        content: "";
        display:inline-block;
        height: 3px;
        background: ${theme.colors.accent};
        position:absolute;
        top:50%;
        left:-10px;
        right:-10px;
        z-index: 1;
        transform: scale(0);
    }
    &:hover{
        &::before{
            transform: scale(1);
        }
        ${Mask}{
            transform:skewX(12deg) translateX(5px);
            color:${theme.colors.font};
            
            
        & + ${Mask}{
            transform:skewX(12deg) translateX(-5px);
        }
        }
    }
    
`
