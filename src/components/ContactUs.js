import React from 'react'

export const ContactUs = (props) => {
    var divStyle={
        color:'red'
    }
    var td={
        fontSize:'20px',
        fontWeight:'bold'
    }
    
    return (
        <div>
            <h1 class="company">{props.company}</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col" style={td}>NAME</th>
                        <th scope="col" style={td}>AGE</th>
                        <th scope="col" style={td}>ELIGIBILITY</th>
                        <th scope="col" style={td}>CONTACT.NO</th>
                        <th scope="col" style={td}>GENDER</th>
                        
                    </tr>
                </thead>
                <tbody>

                    {
                        props.contactPersons.map((person) => {
                        return(<tr style={person.age<22 ? {backgroundColor:'red'}:{backgroundColor:'green'}}>      
                            <td style={td}>{person.name}</td>
                            <td style={td}>{person.age}</td>
                            <td>
                            {
                                person.age<22 ? <h4> not eligible</h4> : <h4>eligible</h4>
                            }
                            </td>
                            <td style={td}>{person.contact}</td>
                            <td style={td}>{person.gender}</td>
                        </tr>)
                     
                        })
                    }


                </tbody>
            </table>
        </div>
    )
}
