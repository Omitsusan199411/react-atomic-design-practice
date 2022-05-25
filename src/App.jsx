import { Router } from "./router/Router";
import { RecoilRoot } from "recoil";
import { UserProvider } from "./providers/UserProvider";
import "./styles.css";

export const App = () => {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
};
