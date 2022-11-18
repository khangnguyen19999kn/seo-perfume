import { Image } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import { activeResponsive } from ".";
import SearchAuto from "./SearchAuto";
import SwitchToggle from "./SwitchToggle";
import Link from "next/link";
import { useWindowScroll } from "@mantine/hooks";

export default function Navbar({ tog, setTog }: activeResponsive) {
  const [scroll] = useWindowScroll();
  const toogle = () => {
    if (tog === "disable") {
      setTog("responsive");
    } else setTog("disable");
  };
  const [lastScroll, setLastScroll] = useState(0);
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scroll.y > lastScroll) {
        if (ref.current) {
          ref.current.className = "hidden";
        }
      } else {
        if (ref.current) {
          ref.current.className = "full-Nav";
        }
      }

      setLastScroll(scroll.y);
    });
    setTimeout(() => {
      if (ref.current) {
        if (scroll.y > 100) {
          ref.current.className = "hidden";
        }
      }
    }, 3000);
    console.log(scroll.y);
  }, [scroll.y]);

  return (
    <div className="full-Nav" ref={ref}>
      <div
        className={
          "respon-logo" + (tog === "responsive" ? " disable-item" : "")
        }
      >
        <Link href="/">
          <Image
            width={"100%"}
            height={"100%"}
            className="img-logo"
            src="https://chuanperfume.com/wp-content/uploads/logo-chuan-perfume-light.png"
            alt="asd"
          />
        </Link>
      </div>
      <div className={`topnav ${tog}`} id="myTopnav">
        <Link className="respon-logo2" href="/">
          <Image
            width={"100%"}
            height={"100%"}
            className="img-logo"
            src="https://chuanperfume.com/wp-content/uploads/logo-chuan-perfume.png"
            alt="asd"
          />
        </Link>
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
