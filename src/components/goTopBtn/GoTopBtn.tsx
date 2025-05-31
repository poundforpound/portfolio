import  {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {animateScroll as scroll} from "react-scroll";

export const GoTopBtn = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200)
                setShowButton(true)
            else {
                setShowButton(false)
            }
        });
    }, [])
    return (
        <>
            {showButton && (
                <StyledGoTopBtn onClick={() => scroll.scrollToTop()}>
                    <Icon width={"16"} height={"15"} viewBox={"0 0 16 15"} iconId={"arrow"}/>
                </StyledGoTopBtn>
            )}
        </>
    );
};

const StyledGoTopBtn = styled.button`
    background-color: rgba(0, 0, 0, 0.3);
    padding: 8px;
    position: fixed;
    right: 30px;
    bottom: 30px;
`