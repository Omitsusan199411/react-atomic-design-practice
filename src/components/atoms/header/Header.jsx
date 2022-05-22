import styled from "styled-components";

import { Switch, Route, Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <SHeader>
        <SLink to="/">HOME</SLink>
        <SLink to="/users">Users</SLink>
      </SHeader>
      <Switch>
        <Route path="/"></Route>
        <Route path="/users"></Route>
      </Switch>
    </>
  );
};

const SHeader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`;

const SLink = styled(Link)`
  margin: 0px 8px;
`;
