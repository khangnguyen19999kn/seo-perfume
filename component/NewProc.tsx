import React from "react";

import { createStyles, Loader, Image } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  topTittle: {
    background:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.dark[0],
  },
}));

export type TypeOfData = {
  name: string;
  img: [string];
  type: string;
  price: string;
};

export type NewProcProps = {
  posts: TypeOfData[] ;

}

export default function NewProc({ posts }: NewProcProps) {

  
  const showItem = () => {
    if (posts) {
      const grpIteem = posts.map((element: TypeOfData, index: number) => (
        <li key={index} className="List-item">
          <div className="card-item-list-new">
            <Image
              width={"100%"}
              height={"100%"}
              src={element.img[0]}
              alt={`${index}`}
            />

            <span className="card-item-list-new-type ml3px">
              {element.type}
            </span>
            <span className="card-item-list-new-name ml3px">
              {element.name}
            </span>
            <span className="card-item-list-new-price ml3px">
              {element.price + "đ"}
            </span>
          </div>
        </li>
      ));
      return grpIteem.splice(0, 8);
    } else return <Loader height={400} />;
  };

  const { classes } = useStyles();

  return (
    <div className="List-new-product">
      <div className="fit-List-new-product">
        <div className={"tiite-list-new-pro" + " " + classes.topTittle}>
          <h2 className="main-title-list-new-prod">
            <span className="text-title-list-new-prod">NƯỚC HOA MỚI</span>
          </h2>
          <div className="btn-view-all-new-prod">
            <span className="txt-btn-view-all-new-prod">
              Xem tất cả <i className="fas fa-arrow-right"></i>
            </span>
          </div>
        </div>
        <div className="content-list-new-pro">
          <ul className="content-list">{showItem()}</ul>
        </div>
      </div>
    </div>
  );
}
