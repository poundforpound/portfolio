import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {theme} from "../../../styles/Theme.ts";
import {Button} from "../../../components/Button.ts";
import {Link} from "../../../components/Link.ts";


const Works = styled.section`
${FlexWrapper}{
    gap:30px;
}
`

const Work = styled.div`
    width: 330px;
    flex-grow: 1;
    background-color: ${theme.colors.secondaryBg};

    ${Link} {
        padding: 10px 0;

        & + ${Link} {
            margin-left: 20px;
        }
    }
    @media ${theme.media.desktop} {
        max-width: ;
    }
`
const Info = styled.div`
    padding: 25px 20px;`

const ImageWrapper = styled.div`
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
        opacity: 0;
    }
    &:hover {
        &::before {
    opacity: 1;
        }

        ${Button} {
            opacity: 1;
        }
    }

    ${Button} {
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        &::before {
            width: 100%;
            height: 100%;
        }
    }

    @media ${theme.media.tablet} {
        &::before{
            opacity: 1;
    }
        ${Button}{
            opacity: 1;
        }

}

    
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const WorkTitle = styled.h3`
`

const WorkDescription = styled.p`
    margin: 14px 0 10px;
`

export const S = {
    Works,
    Work,
    Info,
    Image,
    ImageWrapper,
    WorkTitle,
    WorkDescription,
}