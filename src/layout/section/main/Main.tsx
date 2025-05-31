import React from 'react';
import image from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.ts";
import {S} from "./Main_Styles.ts"
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt'


export const Main: React.FC = () => {
    return (
        <S.Main id={"home"}>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <S.MainInfo>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Svetlana Dyablo</span></S.Name>
                        <S.MainTitle><p>Developer</p></S.MainTitle>
                        <S.MainTitle>
                            <Typewriter
                                options={{
                                    strings: ["I am a Web Developer"],
                                    autoStart: true,
                                    loop: true,
                                    delay: 150
                                }}
                            />
                        </S.MainTitle>
                    </S.MainInfo>
                    <Tilt
                        className="background-stripes parallax-effect-glare-scale"
                        perspective={500}
                        glareEnable={true}
                        glareMaxOpacity={0.45}
                        scale={1.02}
                    >
                        <S.PhotoWrapper>
                            <S.Photo src={image} alt=""/>
                        </S.PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

