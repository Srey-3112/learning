import React from 'react'
import { Link } from 'react-router-dom'

export const ViewEmployee = (props) => {
    return (
        <div>
            <div>
                <table>
                    <tr>
                        <th>id</th>
                        <th>firstname</th>
                        <th>lastname</th>
                    </tr>



                    <tr>
                        <Link to={`/employeeDetail/${props.users.id}`}> <td>{props.users.id}</td></Link>
                        <td>{props.users.firstname}</td>
                        <td>{props.users.lastname}</td>
                    </tr>


                </table>
            </div>
        </div>
    )
}
