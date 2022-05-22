import styled from "styled-components";

import { Switch, Route, Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <SFooter>&copy; 2021 test Inc</SFooter>
    </>
  );
};

const SFooter = styled.footer`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  width: 100%;
  bottom: 0px;
`;
