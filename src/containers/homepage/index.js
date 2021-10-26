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
        h-screenflex
        flex-col

`}
`



export function TopSection(){
    return <TopSectionContainer>
        <Navbar/>
    </TopSectionContainer>
}
