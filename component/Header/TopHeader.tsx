/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Image } from "@mantine/core";
import SwitchToggle from "./SwitchToggle";
import SearchAuto from "./SearchAuto";
import { IconShoppingCart } from '@tabler/icons';
import Link from "next/link";


export default function () {

  return (
    <div className="top-header">
      <div className="content-top-header">
        <div className="Logo-top-header">
          <h4>
            <Link href="/">
            <Image width={'100%'} height={'100%'} className="img-logo" src="https://chuanperfume.com/wp-content/uploads/logo-chuan-perfume-light.png" alt="asd" />
            </Link>
          </h4>
        </div>
        <div className="Search-Top-side">

        <SearchAuto/>
        </div>
        <div className="cart-header">
          <div className="cart-header-btn">
            <span className="cart-header-btn-txt">
              Giỏ hàng <IconShoppingCart/>
            </span>
          </div>
        </div>
        <div className="dark-theme-btn">
          <SwitchToggle />
        </div>
      </div>
    </div>
  );
}
