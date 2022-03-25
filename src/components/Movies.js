import React from 'react'
import { Link } from 'react-router-dom'

export const Movies = () => {
  var movie = [{
    name: "pushpa",
    duration: 2.5,
    id: 1,
    rating: 8.5

  },
  {
    name: "kashmir files",
    duration: 2.9,
    id: 2,
    rating: 9.5

  },
  {
    name: "BacchanPandey",
    duration: 2.2,
    id: 3,
    rating: 6.5

  }]
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            
          </tr>
        </thead>
        <tbody>

          {
            movie.map((x) => {
              return (
                <tr>
                  <td><Link to={`/movies/moviedetail/${x.id}`}>{x.name}</Link></td>
                </tr>
              )
            })
          }


        </tbody>
      </table>

    </div>
  )
}
