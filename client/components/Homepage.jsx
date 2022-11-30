import Image from 'next/image';
import React from 'react'
import Banner from './Banner'
import Footer from './Footer';
import Nav from './Nav'
import Pricing from './Pricing';
import { Cards, Container, Text, TwoWayGrid } from './Style'

const green = "rgb(25, 50, 30)";
const white = "rgb(245, 245, 245)";
const pink = "rgb(255, 131, 114)";
const yellow = "rgb(227, 238, 96)";

const Homepage = () => {
  return (
    <Container>
        <Nav />
        <Banner />
        <Text align="center" width="75%" padding="50px" margin="0 auto" color={green} size="30px" weight="600">
            We give low risk financial oppurtunity to individuals on the Platform to help achieve thier financial goals and financial freedom.
        </Text>

        <TwoWayGrid>
            <img src="https://img.freepik.com/free-photo/investment-business-budget-credit-costs-concept_53876-125635.jpg?w=2000" />

            <div>
                <Text align="center" size="30px" weight="600" margin="0 auto" color={green}>
                    Who are we?
                </Text>
                <Text align="center" padding="10px 0" color={green}>
            The Investment is a company with a ROI platform that was created to give diverse financial opportunity to individual that want to expand their financial bounds and add more income using a low risk plan that guarantees a ‘win-win’ strategy. The ROI ranges from a minimum amount and have a limited maximum amount to help reduce huge loss that can arise.
            </Text>
            </div>
            
        </TwoWayGrid>

        <Cards>
            <div className="card">
                <Text color={yellow}>How we do it?</Text>
                <Text size="14px" padding="10px 0">
                The Investment company is a will use well-constructed financial analysis tools by our group of world class analysts and consultants to make less risk high ROI by providing our clients with various backgrounds of opportunity to become financially empowered all time on our platform by using an adequately analyzed multiple streams of income. 
Our solution is unique and world class, it will benefits all members both in financial knowledge and financial empowerment. Our world class analysts will use the expertise knowledge to provide our various range of our investment services that have different rate of ROI
The investment portfolio will cut across several fields of financial investments that will critically analyzed by The investmentfinance professionals and would be made known to our clients for transparency and legitimacy.
                </Text>
            </div>

            <div className="card">
                <Text color={yellow}>What we do?</Text>
                <Text size="14px" padding="10px 0">
                The Aim of The Investment is to give a low risk financial opportunity to individuals on the platform to help achieve their financial goals and financial freedom.
Our Mission is to use well-constructedfinancial analysis tools by our group of world class analysts and consultants to make less risk high ROI.

                </Text>
            </div>
        </Cards>
        <Pricing />
        <Footer />
    </Container>
  )
}

export default Homepage