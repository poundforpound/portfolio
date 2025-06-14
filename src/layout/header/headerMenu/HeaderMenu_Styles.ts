import {theme} from "../../../styles/Theme.ts";
import styled, {css} from "styled-components";
import {Link} from "react-scroll";

//Menu

const Mask = styled.span`
    position: absolute;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    top: 0;
    left: 0;
    //outline: 1px solid red;
    color: ${theme.colors.accent};
    transition: ${theme.animations.transition};
    
    &+&{   
        top:50%;
        span{
            display: inline-block;
            transform: translateY(-50%);
        }
    }

`

const MenuItem = styled.li`
    position: relative;
    `


const NavLink = styled(Link)`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 30px;
    font-weight: 400;
    text-align: center;
    color: transparent;

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
        transition: ${theme.animations.transition};
    }

    &:hover, &.active{
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






//Mobile Menu

const MobileMenu = styled.nav`

    `
const MobileMenuPopup = styled.div<{isOpen:boolean}>`
position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color: rgba(31,31,32,0.9);
    z-index: 99999;
    display: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    transition: 1s ease-in-out;
    ul{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        transition: gap 0.5s ease-in-out;
    }
    ${props=> props.isOpen && css<{isOpen:boolean}>`
        transform: translateY(0);
        & ul {
            gap:30px
        }
    `}
`

const BurgerButton = styled.button<{isOpen:boolean}>`
    position: fixed;
    width: 200px;
    height: 200px;
    top: -100px;
    right: -100px;
    z-index: 999999;
    cursor: pointer;

    span {
        display: block;
        position: absolute;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        left: 40px;
        bottom: 50px;
        
        ${props=> props.isOpen && css<{isOpen:boolean}>`
            background-color: rgba(255,255,255,0);
            
        `}

        &::before {
            position: absolute;
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            transform: translateY(-10px);
            background-color: ${theme.colors.font};
            
            ${props=> props.isOpen && css<{isOpen:boolean}>`
                transform:rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: "";
            position: absolute;
            display: block;
            width: 24px;
            height: 2px;
            transform: translateY(10px);
            background-color: ${theme.colors.font};
            ${props=> props.isOpen && css<{isOpen:boolean}>`
                transform:rotate(45deg) translateY(0);
                width: 36px;
            `}
        }
    }

`


//Desktop Menu

const DesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
   `

export const S = {
    NavLink,
    Mask,
    MenuItem,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
    DesktopMenu,
}