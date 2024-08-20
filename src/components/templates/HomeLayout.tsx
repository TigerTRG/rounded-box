import { ReactNode } from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

interface IProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: IProps) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

export default HomeLayout;
