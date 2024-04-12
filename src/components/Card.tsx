import React from "react";

interface Props {
  title: string;
  subTitle: string;
  content: string;
  userImage: any;
}

const Card = (props: Props) => {
  return (
    <div className="card">
      <div className="card-body">
        <img
          loading="lazy"
          className="card-avatar"
          src={props?.userImage}
          alt="User Image"
        />
        <h5 className="card-title">{props?.title}</h5>
        <h5 className="card-title">{props?.subTitle}</h5>
        <p className="card-text">{props?.content}</p>
      </div>
    </div>
  );
};

export default Card;
