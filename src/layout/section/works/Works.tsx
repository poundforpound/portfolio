import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {TabMenu} from "./tabmenu/TabMenu.tsx";
import {menuWorks, worksInfo} from "../../../assets/data/data.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Work} from "./work/work.tsx";
import {Container} from "../../../components/Container.ts";

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My works</SectionTitle>
                <TabMenu items={menuWorks}/>
                <FlexWrapper wrap={"wrap"} justify={"space-between"} align={"flex-start"}>
                    {worksInfo.map((work, i) => (
                        <Work key={`${i}_${work}`} img={work.img} title={work.title} description={work.description}/>
                    ))}
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`

`