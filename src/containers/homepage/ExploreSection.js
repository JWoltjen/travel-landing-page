import React from 'react'
import {Element} from 'react-scroll'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'
import lacBay from '../../images/lacbay.jpg'
import kralendijk from '../../images/downtown-kralendijk-1-xl.jpg'
import diveBoats from '../../images/diveBoats.jpg'
import hiddenBeach from '../../images/hiddenBeach.jpg'
import luxuryVillas from '../../images/luxuryVillas.jpg'
import scenicVista from '../../images/scenicVista.jpg'

import "react-responsive-carousel/lib/styles/carousel.min.css";

const ExploreSectionContainer = tw(Element)`
    w-full
    h-screen
    flex
    flex-col
    relative
    pt-1
    pb-1
    xl:pt-2
    xl:pb-2
    items-center
`; 

const Title = tw.h1`
    text-2xl
    lg:mt-0
    xl:text-3xl
    2xl:text-5xl
    2xl:mt-6
    2xl:mb-6
    text-gray-800
    font-bold
    text-center
`

const SectionInfo = tw.p`
    text-base
    2xl:text-lg
    text-gray-700 
    text-center
    mt-4
    2xl:mt-2
    max-w-lg
    xl:max-w-3xl
    pl-4
    pr-4
    lg:pl-2
    lg:pr-2
`; 

const ExploreSectionWrapper = tw.div`
    w-full
    h-full
    flex
    flex-col
    justify-center
    items-center
    mt-3
    xl:mt-6
    2xl:mt-10
    max-w-sm
    xl:max-w-2xl
    2xl:max-w-4xl 
`
const Item = styled.div`
    ${tw`
        flex
        flex-col
    `}
    img {
        ${tw`
            max-w-full
            max-h-full 
        `}
    }
`; 

const Description = tw.p`
    text-gray-300
    text-center
    bg-black
    bottom-10
    left-1/2
    pl-4
    pr-4
    pt-2
    pb-2
    rounded-2xl
    opacity-80
    transform[translateX(-50%)]
    absolute
`; 



function ExploreSection() {
    return (
        <ExploreSectionContainer name="Explore">
            <Title>Explore Travel Places</Title>
            <SectionInfo>
                View our tour package and find out more about the places we will visit together on this journey to
                beautiful Bonaire, a desert island full of untold treasure and adventure.
            </SectionInfo>
            <ExploreSectionWrapper>
                <Carousel dynamicHeight={false}>
                    <Item>
                        <img src={lacBay}/>
                        <Description>Lac Bay</Description>
                    </Item>
                    <Item>
                        <img src={kralendijk}/>
                        <Description>Kralendijk</Description>
                    </Item>
                    <Item>
                        <img src={diveBoats}/>
                        <Description>Boat Dives</Description>
                    </Item>
                    <Item>
                        <img src={hiddenBeach}/>
                        <Description>Hidden Beach</Description>
                    </Item>
                    <Item>
                        <img src={luxuryVillas}/>
                        <Description>Luxury Villas</Description>
                    </Item>
                    <Item>
                        <img src={scenicVista}/>
                        <Description>Salt Pier</Description>
                    </Item>
                </Carousel>
            </ExploreSectionWrapper>
        </ExploreSectionContainer>
    )
}

export default ExploreSection
