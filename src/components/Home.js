import React from 'react'
import { ContactUs } from './ContactUs'

export const Home = ({contactPersons},{company}) => {
    
   
  return (
    <div>
        <h1 style={{color:'red',background:'blue'}}>{company}</h1>
        <ContactUs contactPersons={contactPersons}/>
    </div>
  )
}
