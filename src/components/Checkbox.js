import React from 'react'

export default function Checkbox(props) {
  return (
    <div className="checkbox-options">
                        <label>
                            <input type="checkbox" />
                            <span className="custom-options"></span>
                        </label>
                        {props.details}
                    </div>
  )
}
