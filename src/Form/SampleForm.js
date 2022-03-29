import React, { useState } from 'react'
import { ViewEmployee } from './ViewEmployee'

export const SampleForm = () => {
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [id, setid] = useState('')
    const [users, setusers] = useState([])
    const firstNameChange = (e) => {
        setfirstname(e.target.value)
        console.log(e.target.value)
    }
    const submit = (e) => {
        e.preventDefault();
        console.log(firstname)
        console.log(lastname)
        var obj={
            firstname:firstname,
            lastname:lastname,
            id:id
        }
        console.log(obj)
        setusers([...users,obj])

    }
    const lastNameChange = (e) => {
        setlastname(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <label>Id:</label>
                    <input type="text" onChange={(e) => setid(e.target.value)} />
                    {id}
                </div>

                <div>
                    <label>Firstname:</label>
                    <input type="text" onChange={(e) => firstNameChange(e)} />
                    {firstname}
                </div>
                <div>
                    <label>Lastname:</label>
                    <input type="text" on onChange={(e) => lastNameChange(e)} />
                    {lastname}
                </div>
                <div>
                    <input type="submit" value="Submit" />  
                </div>

            </form>
           
            {

                users.map((user)=>{
                    
                    <ViewEmployee users={user}/>
                })
            }
            

        </div>

    )
}

