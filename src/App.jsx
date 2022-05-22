import { BrowserRouter } from "react-router-dom";

import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import "./styles.css";

const user = {
  name: "あああ",
  image:
    "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469",
  email: "1234@example.com",
  phone: "000-111-2222",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export const App = () => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
};
