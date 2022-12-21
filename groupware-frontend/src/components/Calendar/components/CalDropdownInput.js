import React from "react";
import classes from '../styles/CalDropdownInput.module.css';

const CalDropdownInput = ({ dropdownList, setSelectedDropValue }) => {
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

export default CalDropdownInput;
