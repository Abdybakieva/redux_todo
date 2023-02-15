import React from 'react'
import styled from 'styled-components';

function Button({children,onClick}) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button

const StyledButton=styled.button`
    background-color: antiquewhite;
    width: 10vw;
    height: 5vh;
    border: none;
    border-radius:8px;
`