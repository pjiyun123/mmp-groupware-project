import React from 'react';

const DeptTypesDropdown = ({ dropdownList, setSelectedDropValue }) => {
	const handleDropdown = (e) => {
    const selectedValue = e.target.value;
    setSelectedDropValue(
      dropdownList.filter((list) => list.deptNm === selectedValue)[0].id
    );
  };
	return (
		<div>
			<select onChange={handleDropdown} name='dropdown' >
				{dropdownList.map(dept => {
					return <option key={dept.deptNo} value={dept.deptNm}>{dept.deptNm}</option>
				})}
			</select>
		</div>
	);
};

export default DeptTypesDropdown;