import { ReactNode } from "react";
import Header from "../organisms/Header";

interface IProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: IProps) => (
  <div>
    <Header />
    <div className="mb-[180px]" />
    {children}
  </div>
);

export default HomeLayout;
