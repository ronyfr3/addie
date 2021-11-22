import React from "react";

const FooterHoc = ({name,header}) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="capitalize font-semibold">{header}</h2>
      {name.map((x) => (
        <ul>
          <li className="font-light">{x}</li>
        </ul>
      ))}
    </div>
  );
};

export default FooterHoc;
