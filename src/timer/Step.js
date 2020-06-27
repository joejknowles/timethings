import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Root = styled.div`
  font-size: 4rem;
  text-align: center;
  padding-top: 10vh;
  height: 90vh;
  background-color: hsl(240, 10%, 90%);
  position: relative;
`;

const ProgressBar = styled.div`
  position: absolute;
  top: ${({hasStarted}) => hasStarted ? 0 : "100%"};
  right: 0;
  bottom: 0;
  left: 0;
  background-color: hsla(240, 10%, 0%, 0.15);
  ${({hasStarted}) => hasStarted ? "transition: top 3.9s linear" : ""};
`;

export const Step = ({ name }) => {
  const [hasStarted, setHasStarted] = useState(false);
  useEffect(() => {
    setHasStarted(false);
    setTimeout(() => setHasStarted(true), 100);
  }, [name])
  return (
    <Root>
      {name}
      <ProgressBar {...{hasStarted}}/>
    </Root>
  );
};
