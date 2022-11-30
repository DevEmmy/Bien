import React, { useState, useEffect } from 'react'
import ContactUs from '../components/ContactUs'

const contact = () => {
    const [show, setShow] = useState(false)

    useEffect(()=>{
      setShow(true)
    }, [])
  return (
    <>
        {
            show && 
            <ContactUs />
        }
    </>
  )
}

export default contact