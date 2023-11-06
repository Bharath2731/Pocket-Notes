import React,{useState,useEffect} from "react";
import styles from "../styles/titleCard.module.css";

function TitleCard(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const TitleInCircle = props.title ? props.title.slice(0, 2).toUpperCase() : "";
  const isSelected = props.selectedTitle && props.selectedTitle.title === props.title;
  const backGroundcolorIfSelected = {
    backgroundColor: isSelected ? (windowWidth > 600 ?'#F7ECDC':'') : 'transparent',
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        <div
          className={styles.outerContainer}
          style={backGroundcolorIfSelected}
        >
          <div
            className={styles.circlerDiv}
            style={{ backgroundColor: props.color }}
          >
            <h3>{TitleInCircle}</h3>
          </div>
          <div className={styles.title}>
            <p>{props.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleCard;
