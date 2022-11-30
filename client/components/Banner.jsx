import React from 'react'
import { BannerContainer, Register, Text } from './Style'

const Banner = () => {
  return (
    <BannerContainer>
        <div>
            <Text size="60px" weight="600">
                Catch Smart <span>Investment</span> for Smart Startups.
            </Text>
            <Text size={"18px"}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis sapiente ipsum fuga deleniti sint officiis natus veniam nulla alias repudiandae adipisci ipsa, eos, officia quod eum odit vel ratione numquam.
            </Text>
            <Register>
                Get Started
            </Register> 
        </div>
       
    </BannerContainer>
  )
}

export default Banner