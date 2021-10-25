import React from 'react'
import styled from 'styled-components'
import tw from "twin.macro"

const LogoContainer = styled.div`
${tw`
    font-black
    text-2xl
    text-white
`}; 

`; 


function Logo() {
    return (
        <LogoContainer>
            Travelust
        </LogoContainer>
    )
}

export default Logo
