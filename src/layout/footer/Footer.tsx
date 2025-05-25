import React from 'react';
import {Icon} from "../../components/icon/Icon.tsx";
import {socialList} from "../../assets/data/data.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import { S } from './Footer_Styles.ts';


export const Footer:React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Svetlana</S.Name>
                <S.SocialList>
                    {socialList.map((item, index) => (
                        <S.SocialItem key={index}>
                            <S.SocialLink>
                                <Icon width={"21px"} height={"21px"} viewBox={"0 0 21 21"} iconId={`${item}`}/>
                            </S.SocialLink>
                        </S.SocialItem>
                    ))}
                </S.SocialList>
                <S.Copyright>@Copy& 2025</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};

