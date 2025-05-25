import React, {useEffect, useState} from 'react';
import {Logo} from "../../components/logo/Logo.tsx";
import {menuHeader} from "../../assets/data/data.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {DesktopMenu} from "./headerMenu/desktopMenu/desktopMenu.tsx";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu.tsx";
import {S} from  "./Header_Styles.ts"



export const Header: React.FC = () => {
    const [width,setWidth] = useState(window.innerWidth);
    const breakpoint = 768;

    useEffect(()=>{
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    },[]);

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    {width < breakpoint
                        ?<MobileMenu items={menuHeader}/>
                        :<DesktopMenu items={menuHeader}/>}
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};


