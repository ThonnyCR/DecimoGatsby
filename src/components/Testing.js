import React from 'react'
import styled from 'styled-components'

const Testing = (props) => {
  return (
    <Wrapper>
      <h1 className={props.class}>Testing</h1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.red-txt{
  color: red;
}
.blue-txt{
  color: blue;
}

`
export default Testing
