import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import {Navbar} from '../../components/Navbar'
import BackgroundImage from '../../images/bonaire-shoreline-of.jpg'
import MobileBackgroundImage from '../../images/reversed.jpg'
const TopSectionContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-col
        h-screen
        relative
    `}
`; 

const LandingSection = styled.div`
    background-image: url(${BackgroundImage}), 
    linear-gradient(to right, #005b9c, #b1d1b148); 
    ${tw`
        w-full
        h-screen
        flex
        flex-col
    `}; 
    @media screen and (max-width: 640px){
        background-image: url(${MobileBackgroundImage})
    }
   
    background-size: cover; 
    background-position: bottom 10% left; 
    backround-blend-mode: overlay; 
`; 

const InfoSection = styled.div`
    ${tw`
        absolute
        top[100px]
        sm:p-0
        lg:left-auto
        2xl:left-60
        2xl:top[240px]
        2xl:right-auto
    `};
`;

const FloatingText = styled.h1`
    ${tw`
        mx-8
        font-black
        text-white
        font-size[25px]
        sm:line-height[1px]
        lg:font-size[125px]
        lg:line-height[90px]
        2xl:font-size[170px]
        font-family["Archivo Narrow"]
        flex 
        items-center
    `};
`;

const OutlinedTextSvg = styled.svg`
    font: bold 100px Century "Archivo Narrow", Arial;
    ${tw`
        ml-3
        mb-3
        p-0
        items-center
        height[80px]
        lg:width[550px]
        lg:height[110px]
        2xl:width[550px]
        2xl:height[110px]
        flex 
    `};
    overflow: overlay;
    text {
        max-height: 100%; 
        flex: 1; 
        fill: none; 
        stroke: white; 
        stroke-width: 1px; 
        stroke-linejoin: round; 
        z-index: 99; 
        ${tw`
            2xl:transform[translateY(113px)]
            lg:transform[translateY(97px)]
            transform[translateY(71px)]
        `}
        text-shadow: 0px 0px 0px rgba(255, 255, 255, 0.5); 
    };
`; 

const DescriptionText = styled.p`
    ${tw`
        mx-8
        text-xl
        text-white
        font-bold
        items-center
        text-opacity-100
        min-w-min
        max-w-2xl
        sm: w-8/12
        sm: text-base
        sm: text-left
        sm: py-40
        md: mt-28
        xl: mt-10
    `}; 
`; 

const ViewMoreButton = styled.button`
    ${tw`
        absolute
        bottom-4
        left-1/2
        -translate-x-1/2
        text-white 
        text-4xl 
        transition-colors
        duration-200 
        hover:text-green-400
    `};
`; 

export function TopSection(){
    return (
    <TopSectionContainer>
        <LandingSection>
            <Navbar/>
            <InfoSection>
                <FloatingText>
                    WORLD
                </FloatingText>
                <FloatingText style={{ display: "inline-flex"}}>
                    OF
                    <OutlinedTextSvg viewBox="0 0 530 100">
                        <text>WONDER</text>
                    </OutlinedTextSvg>
                </FloatingText>
                <FloatingText>BONAIRE</FloatingText>
                <DescriptionText>
                    Come explore a diver's paradise nestled 
                    in the Caribbean Sea.
                    Enjoy three vacation packages at competitive prices designed to 
                    maximize the treasures you wil discover on this tropical island
                    adventure.
                </DescriptionText>
            </InfoSection>
        </LandingSection>
    </TopSectionContainer>
    )
}
