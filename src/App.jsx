import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import "./styles.css";

export const App = () => {
  return (
    <div className="App">
      <SearchInput>検索</SearchInput>
    </div>
  );
};
