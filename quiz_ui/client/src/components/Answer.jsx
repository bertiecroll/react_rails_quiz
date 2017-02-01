import React from 'react'

const Answer = function(props) {

  return (
    <label className="answer">
      {props.description}
      <input
        type="radio"
        name="answer"
        points={props.points}
        value={props.index}
        checked={props.checked}
        onChange={props.onChange}
      />
    </label>
  )

}

export default Answer