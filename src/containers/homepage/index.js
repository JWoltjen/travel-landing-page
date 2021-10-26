import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import {Navbar} from '../../components/Navbar'
import BackgroundImage from '../../images/bonaire-shoreline-of.jpg'

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
    ${tw`
        w-full
        h-screen
        flex
        flex-col
    `}

    background-image: url(${BackgroundImage}), 
        linear-gradient(to right, #005b9c, #b1d1b148); 
    background-size: cover; 
    background-position: bottom 10% left; 
    backround-blend-mode: overlay; 
`; 

const InfoSection = styled.div`
    ${tw`
        absolute
        top[150px]
        left-3
        lg:top[150px]
        lg:right-10
        lg:left-auto
        2xl:right-60
        2xl:top[240px]
        2xl:left-auto
    `}
`

const FloatingText = styled.h1`
    ${tw`
        m-0
        font-black
        text-white
        font-size[60px]
        font-size[25px]
        line-height[25px]
        lg:font-size[125px]
        lg:line-height[90px]
        2xl:font-size[170px]
    `}
`


export function TopSection(){
    return (
    <TopSectionContainer>
        <LandingSection>
            <Navbar/>
        </LandingSection>
    </TopSectionContainer>
    )
}
