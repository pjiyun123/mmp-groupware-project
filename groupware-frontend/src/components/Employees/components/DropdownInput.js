import React from "react";
import classes from '../styles/DropdownInput.module.css';

const DropdownInput = ({ dropdownList, setSelectedDropValue }) => {
  const handleDropdown = (e) => {
    const selectedValue = e.target.value;
    setSelectedDropValue(
      dropdownList.filter((list) => list.value === selectedValue)[0].id
    );
  };

  return (
    <>
			<select className={classes.dropdown} onChange={handleDropdown} name='dropdown' >
				{dropdownList.map(dept => {
					return <option key={dept.id} value={dept.value}>{dept.value}</option>
				})}
			</select>
			
    </>
  );
};

export default DropdownInput;
