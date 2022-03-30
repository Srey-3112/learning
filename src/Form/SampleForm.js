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
        var obj = {
            firstname: firstname,
            lastname: lastname,
            id: id
        }
        console.log(obj)
        setusers([...users, obj])

    }
    const lastNameChange = (e) => {
        setlastname(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div>
            {/* <form onSubmit={submit}>
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

            </form> */}
            <form class="form-horizontal" onSubmit={submit}>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="email">Id:</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="email" placeholder="Enter Id" onChange={(e) => setid(e.target.value)}/>
                    </div>
                    {id}
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="email">Firstname:</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="email" placeholder="Enter Firstname" onChange={(e) => firstNameChange(e)}/>
                    </div>
                    {firstname}
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="pwd">Lastname:</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="pwd" placeholder="Enter lastname" onChange={(e) => lastNameChange(e)}/>
                    </div>
                    {lastname}
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        <div class="checkbox">
                            <label><input type="checkbox"/> Remember me</label>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" class="btn btn-default">Submit</button>
                    </div>
                </div>
            </form>


            {

                users.map((user) => {
                    return (
                        <ViewEmployee users={user} />
                    )
                })
            }


        </div>

    )
}

