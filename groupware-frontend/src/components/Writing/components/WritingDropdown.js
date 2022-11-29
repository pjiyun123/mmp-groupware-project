import React from "react";

const WritingDropdown = ({ dropdownList, setSelectedDropValue }) => {
  const handleDropdown = (e) => {
    const selectedValue = e.target.value;
    setSelectedDropValue(
      dropdownList.filter((list) => list.value === selectedValue)[0].manager
    );
  };

  return (
    <div className="dropdownContainer">
			<select onChange={handleDropdown} name='dropdown' >
				{dropdownList.map(dept => {
					return <option key={dept.id} value={dept.value}>{dept.value}</option>
				})}
			</select>
			
    </div>
  );
};

export default WritingDropdown;
