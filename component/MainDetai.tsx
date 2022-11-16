import React, { useState } from "react";
import { TypeOfData } from "./NewProc";
import { Input, Image,createStyles } from "@mantine/core";


import CarouselThumb from "././CarouselThump";
export type DetailPro = {
  posts: TypeOfData;
};
 const useStyles = createStyles((theme) => ({
  wrapper:{
    "input":{
      color:'red'
    },
    background:theme.colors.blue[0]
  }
}))
export default function MainDetai({ posts }: DetailPro) {
  const { img } = posts;
  const [active, setActive] = useState(0);
  const {classes} = useStyles();

  return (
    <div className="desktop:mx-auto desktop:w-1/2 flex desktop:mt-[15vh] mobile:mt-[10vh] desktop:flex-row tablet:flex-col mobile:flex-col ">
      <div className="desktop:w-2/6 tablet:mx-auto mobile:mx-auto">
        <CarouselThumb img={img} setActive={setActive} active={active} />
      </div>
    

      <div className="desktop:w-3/6 ml-5 mobile:text-center">
        <div className="flex flex-col mobile:items-center">
          <h1 className="font-bold">{posts.name}</h1>
          <h2 className="text-red-500 font-semibold">{posts.price}</h2>
          <hr className="desktop:w-5/6"  />
          <p className="mt-2 mb-2">
            Thương hiệu: <span>Maison Margiela</span>
          </p>
          <hr className="w-5/6"/>
          <p className="mt-2 mb-2">
            Nhóm hương: <span>Hương Síp</span>
          </p>
          <hr className="w-5/6"/>
          <p className="mt-2 mb-2">
            Nồng độ: <span>Eau de Parfum (EDP)</span>
          </p>
          <hr className="w-5/6"/>
          <p className="mt-2 mb-2">Phong cách:Cuốn hút, Nổi bật</p>
          <p className="text-red-400">Miễn phí vận chuyển toàn quốc</p>
        </div>
        <div className="mt-3">
          <button className="border-2 border-solid rounded-sm desktop:p-2 w-1/3 mr-2 mobile:w-[45%] mobile:py-1">
            <span>100ml</span>
            <p className="text-red-500 mt-1">{posts.price}</p>
          </button>
          <button className="border-2 border-solid rounded-sm desktop:p-2 w-1/3 mr-2 mobile:w-[45%] mobile:py-1 ">
            <span>100ml</span>
            <p className="text-red-500 mt-1">{posts.price}</p>
          </button>
        </div>
        {/* <div className="w-[15%] mt-3 flex ">
          <Input className={classes.wrapper} style={{ height: "100%" }} type="number" defaultValue={1} />
          <div className="flex flex-col ml-1">
            <input
              value={"+"}
              type="button"
              className="border-[1px] border-solid w-[20px] text-center"
            />
            <input
              value={"-"}
              type="button"
              className="border-[1px] border-solid w-[20px] text-center"
            />
          </div>
        </div> */}
        <div className="flex mt-2 mobile:flex-col">
          <button className="border-2 border-solid rounded-md p-2 desktop:w-1/2 mr-2 bg-red-600 ">
            <span className="font-bold text-white">Mua Ngay</span>
            <p className=" mt-1 text-white">Thanh Toán COD hoặc Online</p>
          </button>
          <button className="border-2 border-solid rounded-md p-2 desktop:w-1/2 mr-2 bg-[#324553]">
            <span className="font-bold text-white">Trả góp qua thẻ </span>
            <p className="mt-1 text-white ">Áp dụng với đơn trên 3tr</p>
          </button>
        </div>
      </div>
    
      <div className="desktop:w-1/6 mobile:w-5/6 mobile:mx-auto">
        {/* <Image width={"100%"} height={"100%"} src={img[0]} /> */}
        <div className="border-2 border-solid rounded-md p-3 mt-5 ">
          <p>
            <strong>Thông tin hữu ích</strong>
          </p>
          <div className="flex mt-2">
            <Image
              width={"20px"}
              height={"20px"}
              src={
                "https://chuanperfume.com/wp-content/uploads/icon-giftbox.png"
              }
              alt="gift"
            ></Image>

            <p className="ml-2">Dịch vụ gói quà</p>
          </div>
          <hr />
          <div className="flex mt-2">
            <Image
              width={"20px"}
              height={"20px"}
              src={
                "https://chuanperfume.com/wp-content/uploads/icon-cam-ket-chinh-hang.png"
              }
              alt="Cam kết chính hãng"
            ></Image>

            <p className="ml-2">Cam kết chính hãng</p>
          </div>
          <hr />
          <div className="flex mt-2">
            <Image
              width={"20px"}
              height={"20px"}
              src={
                "https://chuanperfume.com/wp-content/uploads/icon-huong-dan-perfume.png"
              }
              alt="Hướng dẫn sử dụng"
            ></Image>

            <p className="ml-2">Sử dụng & bảo quản nước hoa</p>
          </div>

        </div>
      </div>
    </div>
  );
}
