import React, { useState } from "react";
import styles from "../styles/createGroup.module.css";

function CreateGroup(props) {
  const defaultColor = "#ccc";
  const colors = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];

  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState(defaultColor);

  function handleInputChange(e) {
    setGroupName(e.target.value);
  }

  function handleColor(color) {
    setSelectedColor(color);
  }

  function handleCreateBtn() {
    if(groupName==='')return
    const groupObj = { title: groupName, color: selectedColor, messages:[], };
    props.setGroupsTitlesArray([...props.groupsTitlesArray, groupObj]);
    props.handlePopUp()
    setGroupName('')
    setSelectedColor(defaultColor)
  }

  return (
    <div>
      <div className={styles.outer}>
        <h3>Create New Notes Group</h3>
        <div className={styles.input}>
          <p>Group Name</p>{" "}
          <input
            type="text"
            placeholder="Enter your group name...."
            value={groupName}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.colorBox}>
          <p>Choose color</p>
          <div className={styles.colors}>
            {colors.map((color) => (
              <div
                key={color}
                className={`${styles.singleColor} ${
                  selectedColor === color ? styles.selectedColor : ""
                }`}
                style={{ background: color }}
                onClick={() => handleColor(color)}
              ></div>
            ))}
          </div>
        </div>
        <div className={styles.createbtn}>
          <button onClick={handleCreateBtn}>Create</button>
        </div>
      </div>
    </div>
  );
}

export default CreateGroup;
