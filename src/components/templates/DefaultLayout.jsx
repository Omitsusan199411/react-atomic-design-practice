import { Header } from "../atoms/header/Header";
import { Footer } from "../atoms/footer/Footer";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
