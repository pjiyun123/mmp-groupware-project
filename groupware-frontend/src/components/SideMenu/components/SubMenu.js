import React from "react";

const SubMenu = ({ menuName }) => {
  const onlyManagerMenu = ["직원계정생성", "직원계정삭제"];
  return (
    <div
      className={
        onlyManagerMenu.includes(menuName) ? "subMenu onlyManager" : "subMenu"
      }
    >
      {menuName}
    </div>
  );
};

export default SubMenu;
