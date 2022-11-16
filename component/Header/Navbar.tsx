import { Image } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import { activeResponsive } from ".";
import SearchAuto from "./SearchAuto";
import SwitchToggle from "./SwitchToggle";

export default function Navbar({ tog, setTog }: activeResponsive) {
  const toogle = () => {
    if (tog === "disable") {
      setTog("responsive");
    } else setTog("disable");
  };
  const [scrollPosition, setScrollPosition] = useState(0);
  const [lastScroll, setLastScroll] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scroll", () => {
      if (scrollPosition < lastScroll) {
        ref.current!.className = "hidden";
      }
      if (scrollPosition < 50) {
        ref.current!.className = "full-Nav";
      }
      setLastScroll(scrollPosition);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div className="full-Nav" ref={ref}>
      <div
        className={
          "respon-logo" + (tog === "responsive" ? " disable-item" : "")
        }
      >
        <Image
          width={"100%"}
          height={"100%"}
          className="img-logo"
          src="https://chuanperfume.com/wp-content/uploads/logo-chuan-perfume-light.png"
          alt="asd"
        />
      </div>
      <div className={`topnav ${tog}`} id="myTopnav">
        <a className="respon-logo2" href="#">
          <Image
            width={"100%"}
            height={"100%"}
            className="img-logo"
            src="https://chuanperfume.com/wp-content/uploads/logo-chuan-perfume.png"
            alt="asd"
          />
        </a>
        <span className="search-Side">
          <SearchAuto />
        </span>
        <a href="#home">Trang chủ</a>
        <div className="dropdown">
          <button className="dropbtn">Sản Phẩm</button>
          <div className="dropdown-content">
            <a href="#">Nước hoa Nam</a>
            <a href="#">Nước hoa Nữ</a>
            <a href="#">Nước hoa Unisex</a>
          </div>
        </div>
        <a href="#news">Cửa hàng</a>
        <a href="#contact">Liên hệ</a>
        <a href="#about">Hướng dẫn</a>
        <span className="darkModeToggle-inNav">
          <span>DarkMode</span>
          <span>
            <SwitchToggle />
          </span>
        </span>
        <a
          href="#"
          className="icon"
          onClick={(e) => {
            toogle();
            e.preventDefault();
          }}
        >
          {tog === "disable" ? "☰" : "X"}
        </a>
      </div>
    </div>
  );
}
