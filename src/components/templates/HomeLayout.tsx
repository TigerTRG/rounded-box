import { ReactNode } from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

interface IProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: IProps) => (
  <div>
    <Header />
    <div className="mb-[16vw]" />
    {children}
    <Footer />
  </div>
);

export default HomeLayout;
