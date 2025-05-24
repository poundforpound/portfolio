import React from 'react';
import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {theme} from "../../../../styles/Theme.ts";

type skillPropsType = {
    img: string;
    title: string,
    description: string,
}

export const Skill = (props: skillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper align={"center"} direction={"column"}>
                <IconWrapper>
                    <Icon iconId={props.img}/>
                </IconWrapper>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillDescription>{props.description}</SkillDescription>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 380px;
    padding: 62px 20px 40px;
    font-family: "Josefin Sans", sans-serif;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
`

export const IconWrapper = styled.div`
    position: relative;

    &::before {
        content: "";
        position: absolute;
        display: inline-block;
        width: 80px;
        height: 80px;
        background-color: rgba(255, 255, 255, 0.1);
        transform: rotate(-45deg) translate(-50%, -50%);

        top: 50%;
        left: 50%;
        transform-origin: top left;

    }
`

const SkillTitle = styled.h3`
    margin: 70px 0 15px;
    text-transform: uppercase;
`

const SkillDescription = styled.p`
    text-align: center;
    line-height: 1.4;
`