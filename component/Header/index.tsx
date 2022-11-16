import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import TopHeader from "./TopHeader";

export type activeResponsive = {
  tog: string;
  setTog: (value: string) => void;
};
export default function Header() {
  const [tog, setTog] = useState("disable");
  const toogle = () => {
    if (tog === "disable") {
      setTog("responsive");
    } else setTog("disable");
  };

  return (
    <div className={tog === "responsive" ? "header-responsive " : "header "}>
      <TopHeader />

      <Navbar tog={tog} setTog={setTog} />
    </div>
  );
}
