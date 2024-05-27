import React, { useState } from "react";

const Checkbox = () => {
  const checkboxesArray = [
    // {
    //   value: `0`,
    //   display: `All`,
    // },
    {
      value: `1`,
      display: `Coding`,
    },
    {
      value: `2`,
      display: `Musis`,
    },
    {
      value: `3`,
      display: `Reading books`,
    },
  ];

  let selectedArray = [];
  //new array selected
  //check length two arrays

  const [displayValue, setDisplayValue] = useState();

  // const []

  const handleCheckbox = (e) => {};
  const handleSelectAll = (e) => {};

  return (
    <div>
      <input
        id="checkboxAll"
        type="checkbox"
        checked={selectedArray.length === checkboxesArray.length}
        onChange={handleSelectAll}
      />
      <label htmlFor="checkboxAll">All</label>
      {checkboxesArray.map((item, index) => {
        return (
          <div>
            <input
              key={index}
              id={item.display}
              type="checkbox"
              value={item.value}
              onChange={handleCheckbox}
            />
            <label key={index + 1} htmlFor={item.display}>
              {item.display}
            </label>
            <br />
          </div>
        );
      })}
      <label>You selected: {displayValue}</label>
    </div>
  );
};

export default Checkbox;
