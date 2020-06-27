import React from "react";
import styled from "styled-components";

const Root = styled.div`
  font-size: 4rem;
  text-align: center;
  padding-top: 10vh;
  height: 90vh;
  background-color: hsl(240, 10%, 90%);
`;

export const Step = ({ name }) => {
  return <Root>{name}</Root>;
};
