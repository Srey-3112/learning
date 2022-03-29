import React, { useState } from 'react'

export const SampleForm = () => {
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const firstNameChange = (e) =>{
        setfirstname(e.target.value)
        console.log(e.target.value)
    }
    
    const lastNameChange = (e) =>{
        setlastname(e.target.value)
        console.log(e.target.value)
    }
    return (
        <div>
            <form>
                <div>
                    <label>Firstname:</label>
                    <input type="text"  onChange={(e)=>firstNameChange(e)}/>
                    {firstname}
                </div>
                <div>
                    <label>Lastname:</label>
                    <input type="text" on onChange={(e)=>lastNameChange(e)}/>
                    {lastname}
                </div>
                <div>
                    <button>Submit</button>
                </div>

            </form>
            <div>
                <table>
                    <tr>
                        <th>firstname</th>
                        <th>lastname</th>
                    </tr>
                    <tr>
                        <td>{firstname}</td>
                        <td>{lastname}</td>
                    </tr>
                </table>
            </div>

        </div>

    )
}

