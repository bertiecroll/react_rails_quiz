import React from 'react'

const Answer = function(props) {

  return (
    <label className="answer">
      <input
        type="radio"
        name="answer"
        points={props.points}
        value={props.index}
        checked={props.checked}
        onChange={props.onChange}
      />
      {props.description}
    </label>
  )

}

export default Answer