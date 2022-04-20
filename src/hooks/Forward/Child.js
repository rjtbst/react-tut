import React, { forwardRef } from 'react'

const Child = (props, ref) => {
  return (
    <div>
      <h1>forward Ref</h1>
      <input type="text" ref={ref} />
    </div>
  )
}

export default forwardRef(Child)