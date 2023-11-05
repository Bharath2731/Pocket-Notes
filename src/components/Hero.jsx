import React from 'react'
import heroImage from '../images/heroImage.png'
import styles from '..//styles/pocketNotes.module.css'
import encryptIcon from "../images/encryptIcon.png";

function Hero() {
  return (
    <div>
      <div className="heroOuter" style={{ display:'flex',height:'90vh',alignItems:'center',justifyContent:'center',fontFamily:'Roboto',letterSpacing:'1px'}}>
        <div className="heroInner"style={{ display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center',}}>
            <img src={heroImage} alt="" />
            <h1 style={{fontWeight:'400',}}>Pocket Notes</h1>
            <p style={{lineHeight:'120%',textAlign:'center',margin:'0'}}>Send and receive messages without keeping your phone online. <br />
                Use Pocket Notes on up to 4 linked devices and 1 mobile phone.</p>
        </div>
      </div>
      <div className={styles.encryptDiv}>
            <img src={encryptIcon} alt="" />
            <p>end-to-end encrypted </p>
          </div>
    </div>
  )
}

export default Hero
