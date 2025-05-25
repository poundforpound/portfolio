import React from 'react';
import {FlexWrapper} from "../FlexWrapper.ts";
import { S } from './Slider_Styles.ts';

export const Slider:React.FC = () => {
    return (
        <S.Slider>
            <FlexWrapper>
                <S.Slide>
                    <S.Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitis enim et harum illo ipsam laudantium odio officiis qui quidem! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </S.Text>
                    <S.Name>
                        @ivan ivanow
                    </S.Name>
                </S.Slide>
            </FlexWrapper>
            <S.Pagination>
                <span></span>
                <span className={"active"}></span>
                <span></span>
            </S.Pagination>
        </S.Slider>
    );
};

