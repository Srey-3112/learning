import React from 'react'
import { ContactUs } from './ContactUs'

export const Home = (props) => {
    
   
  return (
    <div>
        <h1 style={{color:'red',background:'blue',height:"70px"}}>{props.company}</h1>
        <ContactUs contactPersons={props.contactPersons}/>
    </div>
  )
}
