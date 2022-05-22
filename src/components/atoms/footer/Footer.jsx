import styled from "styled-components";

import { Switch, Route, Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <SFooter>
        <SLink to="/">HOME</SLink>
        <SLink to="/users">Users</SLink>
      </SFooter>
      <Switch>
        <Route path="/"></Route>
        <Route path="/users"></Route>
      </Switch>
    </>
  );
};

const SFooter = styled.footer`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`;

const SLink = styled(Link)`
  margin: 0px 8px;
`;
