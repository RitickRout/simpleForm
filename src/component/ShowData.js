import React from 'react'

export default function ShowData(props) {
    var listItems = props.data.map((n,i)=> <li key={i} >Name:{n.name} || Department : {n.department} || Rating: {n.rating}</li>)
  return (
    <div>
        {listItems}
    </div>
  )
}
