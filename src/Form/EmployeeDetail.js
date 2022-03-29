import React from 'react'
import { useParams } from 'react-router-dom'

export const EmployeeDetail = () => {
    var id=useParams().id
  return (
    <div>
        <h1>detail</h1>
        <h1>Id={id}</h1>
    </div>
  )
}
