import React, { useState,useEffect } from "react";
import TitleCard from "./TitleCard";
import styles from "../styles/pocketNotes.module.css";
import CreateGroup from "./CreateGroup";
import encryptIcon from "../images/encryptIcon.png";
import Hero from "./Hero";
import MessageBox from "./MessageBox";
function PocketNotes() {
  const [groupsTitlesArray, setGroupsTitlesArray] = useState(
    JSON.parse(localStorage.getItem("groupsTitlesArray")) || []
  );

  const [selectedTitle, setSelectedTitle] = useState(groupsTitlesArray[0]);
  const [newMessage,setNewMessage]=useState('')

  useEffect(() => {
    localStorage.setItem("groupsTitlesArray", JSON.stringify(groupsTitlesArray));
  }, [groupsTitlesArray]);

  const [popUp, setPopUp] = useState(false);

  function handlePopUp() {
    setPopUp(!popUp);
  }

  const handleTitleCardClick = (titleData) => {
    setSelectedTitle(titleData);
    setNewMessage('')
  };

  return (
    <div>
      <div className={popUp ? styles.createGroupPopUp : styles.dontShowpopUp}>
        <CreateGroup
          groupsTitlesArray={groupsTitlesArray}
          setGroupsTitlesArray={setGroupsTitlesArray}
          handlePopUp={handlePopUp}
        />
      </div>
      <div
        className={`${styles.outerContainer} ${
          popUp ? styles.outerContainerOpacity : ""
        }`}
      >
        <div className={styles.left}>
          <h2>Pocket Notes</h2>
          <div className={styles.createBox}>
            <p onClick={handlePopUp}>+ Create Notes group</p>
          </div>
          <div className={styles.titleCards}>
            {groupsTitlesArray.map((element)=>{
              return <div onClick={() => handleTitleCardClick(element)}> <TitleCard title={element.title} color={element.color} selectedTitle={selectedTitle} /> </div>
            })}
          </div>
        </div>
        <div className={styles.right}>
        {selectedTitle ? (
            <MessageBox selectedTitle={selectedTitle} newMessage={newMessage} setNewMessage={setNewMessage} groupsTitlesArray={groupsTitlesArray} setSelectedTitle={setSelectedTitle} />
          ) : (
            <Hero />
          )}
        </div>
      </div>
    </div>
  );
}

export default PocketNotes;
