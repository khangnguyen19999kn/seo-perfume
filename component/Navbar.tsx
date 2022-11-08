import React, {useState} from "react";
import SearchAuto from "./SearchAuto";
import SwitchToggle from "./SwitchToggle";

export default function Navbar () {
    const [tog, setTog] = useState('disable')
    const toogle = ()=>{
        if(tog==="disable"){
            setTog('responsive')
        }else setTog('disable')

    }
    
  return (
    <div className="full-Nav">
        <div className={"respon-logo"+ (tog==="responsive"?" disable-item":"")}>
        <img className="img-logo" src="https://chuanperfume.com/wp-content/uploads/logo-chuan-perfume-light.png" alt="asd" />
        </div>
      <div className={`topnav ${tog}` } id="myTopnav">
        <a className="respon-logo2">
        <img className="img-logo" src="https://chuanperfume.com/wp-content/uploads/logo-chuan-perfume.png" alt="asd" />
        </a>
        <span className="search-Side">

        <SearchAuto/>
        </span>
        <a href="#home" >
          Trang chủ
        </a>
        <div className="dropdown">
          <button className="dropbtn">
          Sản Phẩm
          </button>
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
          <span><SwitchToggle/></span>
        </span>
        <a href="#" className="icon" onClick={()=>{toogle()}}>
          {tog==="disable"?"☰":"X"}  
        </a>
      </div>
    </div>
  );
}
