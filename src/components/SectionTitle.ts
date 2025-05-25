import styled from "styled-components";
import {theme} from "../styles/Theme.ts";
import {font} from "../styles/Common.ts";


export const SectionTitle = styled.h2`
      ${font({family:"'Josefin Sans', sans-serif",weight:600,Fmin:30,Fmax:36})};
    text-align: center;
    letter-spacing: 5px;
    
    position: relative;
    margin-bottom: 90px;
    
    &::before{
        content:"";
        display:inline-block;
        position: absolute;
        width:55px;
        height:1px;
        background-color:${theme.colors.accent};
        left:50%;
        transform:translateX(-50%);
        bottom:-30px;
        
        @media ${theme.media.mobile} {
            bottom:-24px;
        }
    }
  `