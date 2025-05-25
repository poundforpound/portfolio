import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {TabMenu} from "./tabmenu/TabMenu.tsx";
import {menuWorks, worksInfo} from "../../../assets/data/data.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Work} from "./work/Work.tsx";
import {Container} from "../../../components/Container.ts";
import { S } from './Works_Styles.ts';

export const Works:React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My works</SectionTitle>
                <TabMenu items={menuWorks}/>
                <FlexWrapper wrap={"wrap"} justify={"space-between"} align={"flex-start"}>
                    {worksInfo.map((work, i) => (
                        <Work key={`${i}_${work}`} img={work.img} title={work.title} description={work.description}/>
                    ))}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

