import styled from "styled-components";
import {Link} from "../../../../components/Link.ts";

export type TabsStatusType = "all" | "landing" | "react" | "spa";

type TabMenuPropsType = {
    tabsItems:Array<{title:string,status:TabsStatusType}>
    changeFilterStatus: (value: TabsStatusType) =>void
    currentFilterStatus:string
}


export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.tabsItems.map((value: {title:string,status:TabsStatusType}, i: number) =>
                    <ListItem key={`${i}_${value.title}`}>
                        <Link active={props.currentFilterStatus===value.status} as = {"button"} onClick={()=>{props.changeFilterStatus(value.status)}}>{value.status}</Link>
                    </ListItem>
                )}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
    
    ul {
        display: flex;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        margin: 0 auto 40px;
    }
`
const ListItem = styled.li`

`

