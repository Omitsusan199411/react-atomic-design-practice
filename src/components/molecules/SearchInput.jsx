import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const SearchInput = () => {
  return (
    <div>
      <input placeholder="検索条件の入力" />
      <PrimaryButton>検索</PrimaryButton>
    </div>
  );
};
