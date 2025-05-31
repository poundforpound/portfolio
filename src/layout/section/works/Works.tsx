import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {TabMenu, TabsStatusType} from "./tabmenu/TabMenu.tsx";
import {tabsItems, worksInfo} from "../../../assets/data/data.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Work} from "./work/Work.tsx";
import {Container} from "../../../components/Container.ts";
import { S } from './Works_Styles.ts';
import {AnimatePresence, motion} from "framer-motion";

export const Works:React.FC = () => {
    const [currentFilterStatus,setCurrentFilterStatus] = useState("all");

    const  filteredWorks = currentFilterStatus === "all"
      ? worksInfo
      : worksInfo.filter((item) => {return item.type=== currentFilterStatus});

    function changeFilterStatus(value: TabsStatusType){
        setCurrentFilterStatus(value);
    }


    return (
        <S.Works id={"works"}>
            <Container>
                <SectionTitle>My works</SectionTitle>
                <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus} currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper wrap={"wrap"} justify={"space-between"} align={"flex-start"}>

                    <AnimatePresence>
                        {filteredWorks.map((work) => {
                         return( <motion.div
                                style={{width:"40c0px",flexGrow:1,maxWidth:"540px"}}
                                layout={true}
                                initial={{ opacity: 0 }}
                                animate={{opacity: 1}}
                                exit={{ opacity: 0 }}
                                key={work.id}
                            >
                                <Work key={work.id}
                                      img={work.img}
                                      title={work.title}
                                      description={work.description}/>

                            </motion.div>)
                    })}
                    </AnimatePresence>

                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

