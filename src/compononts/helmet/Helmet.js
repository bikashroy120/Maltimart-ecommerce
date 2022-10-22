import React from 'react'

const Helmet = (props) => {
    document.title = 'Maltimart' + props.title;
  return (
    <div>{props.chlidren}</div>
  )
}

export default Helmet