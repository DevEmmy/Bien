import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import { ContactContainer, Container, Text } from './Style'

const green = "rgb(25, 50, 30)";
const white = "rgb(245, 245, 245)";
const pink = "rgb(255, 131, 114)";
const yellow = "rgb(227, 238, 96)";

const ContactUs = () => {
  return (
    <Container>
        <Nav/>

        <ContactContainer>
            <Text color={green} size="30px" weight="600">
                Let us hear from you.
            </Text>

            <form action="">
                <div>
                    <Text color={green} size="14px">
                        Your Name
                    </Text>
                    <input type="text" placeholder="John Doe"/>
                </div>

                <div>
                    <Text color={green}
                    size="14px">
                        Your Email
                    </Text>
                    <input type="text" placeholder="johndoe@gmail.com"/>
                </div>
                
                <div>
                    <Text color={green}
                    size="14px">
                        Subject
                    </Text>

                    <input type="text" placeholder="A Complaint"/>
                </div>

                <div>
                    <Text color={green} size="14px">
                        Your Message
                    </Text>
                    <textarea placeholder="Message"/>
                </div>

                <div className="submit">
                    Submit
                </div>
            </form>
        </ContactContainer>

        <Footer />
    </Container>
  )
}

export default ContactUs