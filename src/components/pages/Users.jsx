import React, { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

import styled from "styled-components";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: `${val + 1}`,
    name: `aaa-${val + 1}`,
    image:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469",
    email: "1234@example.com",
    phone: "000-111-2222",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const onClickSwitch = () => {
    setUserInfo({ isAdmin: !userInfo.isAdmin });
  };
  return (
    <SContainer>
      <h2>Usersページ</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((obj) => (
          <UserCard key={obj.id} user={obj} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;
