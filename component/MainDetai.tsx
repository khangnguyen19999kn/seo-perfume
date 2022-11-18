import React, { useState } from "react";
import { TypeOfData } from "./NewProc";
import { Input, Image,createStyles, Button } from "@mantine/core";


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
  },
  ".mantine-Button-label" :{
    
    flexDirection:'column',

  },
  root:{
    ".mantine-Button-label" :{
    
      flexDirection:'column',

    },
    '@media (min-width: 1280px)':{

      width:'49%',
    },
    marginTop:'0.2rem',
    marginRight:'1%',
    height:'5rem',
    padding:'1rem',
   
  },

}))
// border-2 border-solid rounded-md p-2 desktop:w-1/2 mr-2 bg-red-600
export default function MainDetai({ posts }: DetailPro) {
  const { img } = posts;
 
  const [active, setActive] = useState(0);
  const {classes} = useStyles();

  return (
    <div className="desktop:mx-auto desktop:w-1/2 flex desktop:mt-[7%] mobile:mt-[10vh] desktop:flex-row tablet:flex-col mobile:flex-col ">
      <div className="desktop:w-2/6 tablet:mx-auto mobile:mx-auto">
        <CarouselThumb img={img} setActive={setActive} active={active} />
      </div>
    

      <div className="desktop:w-3/6 px-5 mobile:text-center">
        <div className="flex flex-col mobile:items-center">
          <h1 className="font-bold m-0">{posts.name}</h1>
          <h2 className="text-red-500 font-semibold m-0">{posts.priceFor10ml+ "đ- "+ posts.priceForFull +"đ"}</h2>
          <hr className="desktop:w-full"  />
          <p className="mt-2 mb-2">
            Thương hiệu: <span>Maison Margiela</span>
          </p>
          <hr className="w-full"/>
          <p className="mt-2 mb-2">
            Nhóm hương: <span>Hương Síp</span>
          </p>
          <hr className="w-full"/>
          <p className="mt-2 mb-2">
            Nồng độ: <span>Eau de Parfum (EDP)</span>
          </p>
          <hr className="w-full"/>
          <p className="mt-2 mb-2">Phong cách:Cuốn hút, Nổi bật</p>
          <p className="text-red-400">Miễn phí vận chuyển toàn quốc</p>
        </div>
        <div className="mt-3">
          <button className="border-2 border-solid rounded-sm desktop:p-1 w-1/3 mr-2 mobile:w-[45%] mobile:py-1">
            <span >10ml</span>
            <p className="text-red-500 m-0 mt-1">{posts.priceFor10ml}</p>
          </button>
          <button className="border-2 border-solid rounded-sm desktop:p-1 w-1/3 mr-2 mobile:w-[45%] mobile:py-1 ">
            <span>100ml</span>
            <p className="text-red-500 m-0 mt-1">{posts.priceForFull}</p>
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
          <Button color={'red'} className={classes.root}>
            <a className="no-underline text flex items-center flex-col text-white" href="https://zalo.me/0334146207 " target="_blank" rel="noopener noreferrer" >
            <span className="font-bold text-[18px] ">Mua Ngay</span>
            <p className=" mt-2 text-[14px]">Thanh Toán COD hoặc Online</p>
            </a>
          </Button>
          <Button color="dark.3" className={classes.root}>
            <span className="font-bold text-[18px]">Trả góp qua thẻ </span>
            <p className="mt-2 text-[14px] ">Áp dụng với đơn trên 3tr</p>
          </Button>
       
        </div>
      </div>
    
      <div className="desktop:w-1/6 mobile:w-5/6 mobile:mx-auto">
        {/* <Image width={"100%"} height={"100%"} src={img[0]} /> */}
        <div className="border-2 border-solid rounded-md px-3 pb -1 mt-5 ">
          <p>
            <strong>Thông tin hữu ích</strong>
          </p>
          <div className="flex mt-2 items-center" >
            <Image
              width={"20px"}
              height={"20px"}
              src={
                "https://chuanperfume.com/wp-content/uploads/icon-giftbox.png"
              }
              alt="gift"
            ></Image>

            <p className="m-0 ml-2">Dịch vụ gói quà</p>
          </div>
          <hr />
          <div className="flex mt-2 items-center">
            <Image
              width={"20px"}
              height={"20px"}
              src={
                "https://chuanperfume.com/wp-content/uploads/icon-cam-ket-chinh-hang.png"
              }
              alt="Cam kết chính hãng"
            ></Image>

            <p className="m-0 ml-2">Cam kết chính hãng</p>
          </div>
          <hr />
          <div className="flex mt-2 items-center">
            <Image
              width={"20px"}
              height={"20px"}
              src={
                "https://chuanperfume.com/wp-content/uploads/icon-huong-dan-perfume.png"
              }
              alt="Hướng dẫn sử dụng"
            ></Image>

            <p className="m-0 ml-2">Sử dụng & bảo quản nước hoa</p>
          </div>

        </div>
      </div>
    </div>
  );
}
