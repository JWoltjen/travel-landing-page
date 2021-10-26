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



export function TopSection(){
    return (
    <TopSectionContainer>
        <LandingSection>
            <Navbar/>
        </LandingSection>
    </TopSectionContainer>
    )
}
