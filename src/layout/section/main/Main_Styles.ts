import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {font} from "../../../styles/Common.ts";

const Main = styled.section`
    min-height: 100vh;
    background: #1F1F20;
    display: flex;

`

const MainInfo = styled.div`
    text-align: left;
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;

    &::before {
        content: "";
        position: absolute;
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};
        top: -24px;
        left: 24px;
        z-index: -1;
        @media ${theme.media.mobile} {
            width: 314px;
            height: 414px;
            top:-17px;
            left:20px;
        }
        @media  ${theme.media.mobile} {
            margin-top: 65px;
        }
    }
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    margin-right: 20px;
    @media ${theme.media.mobile} {
        width: 310px;
        height: 380px;
    }
`

const MainTitle = styled.h1`
    ${font({ weight:400, Fmin:20,Fmax:27})} 
    p{
        display:none;
    }
`
const Name = styled.h2`
    ${font({family:"'Josefin Sans',sans-serif", weight:700, Fmin:36,Fmax:50})}
    letter-spacing: 0.05em;
    margin: 10px 0;

    span {
        position: relative;
        z-index: 0;
        white-space: nowrap;

        &::before {
            content: "";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};
            position: absolute;
            bottom: 0;
            z-index: -1;
        }

    }
    
    @media ${theme.media.mobile}{
        margin: 15px 0 22px;
    }

`

const SmallText = styled.h2`
    font-weight: 400;
    font-size: 14px;
`

export const S = {
    Main,
    MainInfo,
    PhotoWrapper,
    Photo,
    MainTitle,
    SmallText,
    Name
}