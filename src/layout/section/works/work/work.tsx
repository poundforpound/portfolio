import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link.tsx";
import {theme} from "../../../../styles/Theme.ts";
import {Button} from "../../../../components/Button.tsx";

type workType = {
    img: string,
    title: string,
    description: string,
}

export const Work = (props: workType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.img}/>
                <Button>View Project</Button>
            </ImageWrapper>
            <Info>
                <WorkTitle>{props.title}</WorkTitle>
                <WorkDescription>{props.description}</WorkDescription>
                <Link href={"#"}>Demo</Link>
                <Link href={"#"}>Code</Link>
            </Info>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    max-width: 540px;
    width: 100%;
    background-color: ${theme.colors.secondaryBg};

    ${Link} {
        padding: 10px 0;

        & + ${Link} {
            margin-left: 20px;
        }
    }
`
const Info = styled.div`
    padding: 25px 20px;`

const ImageWrapper = styled.div`
    position: relative;

    &:hover {
        &::before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(4px);
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
