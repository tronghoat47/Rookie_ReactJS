import "./App.css";
import { useState } from "react";
import Profile from "./components/Profile";
import Counter from "./components/Counter";
import Checkbox from "./components/Checkbox";
import Pokemon from "./components/Pokemon";

function App() {
  const optionsArray = [
    {
      value: 1,
      display: `Welcome`,
      name: `welcome`,
    },
    {
      value: 2,
      display: `Counter`,
      name: `counter`,
    },
    {
      value: 3,
      display: `Checkboxes`,
      name: `checkboxes`,
    },
    {
      value: 4,
      display: `Pokemon`,
      name: `pokemon`,
    },
  ];

  const profilesArray = [
    {
      styleName: { backgroundColor: `red` },
      profile: {
        name: `Trong Hoa`,
        age: 22,
      },
    },
    {
      styleName: { backgroundColor: `green` },
      profile: {
        name: `Trong hieu`,
        age: 6,
      },
    },
    {
      styleName: { backgroundColor: `yellow` },
      profile: {
        name: `Son Tung`,
        age: 30,
      },
    },
  ];

  const [optionValue, setOptionValue] = useState(`1`);
  const [noteOption, setNoteOption] = useState(`welcome`);

  const handleSelect = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const selectedOption = optionsArray[selectedIndex];
    setNoteOption(selectedOption.name);
    setOptionValue(e.target.value);
  };
  return (
    <div className="select">
      <select onChange={handleSelect}>
        {optionsArray.map((option, index) => (
          <option key={index} name={option.name} value={option.value}>
            {option.display}
          </option>
        ))}
      </select>
      <p>Option selected: {noteOption}</p>
      {optionValue === "1" &&
        profilesArray.map((item, index) => (
          <Profile
            key={index}
            styleName={item.styleName}
            profile={item.profile}
          />
        ))}

      {optionValue === `2` && <Counter />}
      {optionValue === `3` && <Checkbox />}
      {optionValue === `4` && <Pokemon />}
    </div>
  );
}

export default App;
