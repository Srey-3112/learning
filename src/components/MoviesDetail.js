import React from 'react'
import { useParams } from 'react-router-dom'

export const MoviesDetail = () => {
    var id= useParams().id
  return (
    <div><h1>{id}</h1></div>
  )
}
