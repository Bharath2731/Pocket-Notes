import React from "react";
import styles from "../styles/messageBox.module.css";
import sendBtn from "../images/sendBtn.png";
function MessageBox(props) {
    const TitleInCircle =
      props.selectedTitle?.title?.slice(0, 2).toUpperCase() || "";
  
    function formateDate(string) {
      const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
      ];
      return string.split('/')[1] + ' ' + months[string.split('/')[0] - 1] + ' ' + string.split('/')[2];
    }
  
    function handleSendMessage() {
      if (props.newMessage.trim() !== '') {
        const message = {
          time: new Date().toLocaleString(),
          text: props.newMessage,
        };
  
        // Create a copy of the selectedTitle
        const updatedSelectedTitle = { ...props.selectedTitle };
  
        // Update the messages array in the copied selectedTitle
        updatedSelectedTitle.messages = updatedSelectedTitle.messages || [];
        updatedSelectedTitle.messages.push(message);
  
        // Find the index of selectedTitle in groupsTitlesArray
        const index = props.groupsTitlesArray.findIndex(
          (group) => group.title === updatedSelectedTitle.title
        );
  
        // Update the groupsTitlesArray with the updated selectedTitle
        const updatedGroupsTitlesArray = [...props.groupsTitlesArray];
        updatedGroupsTitlesArray[index] = updatedSelectedTitle;
  
        // Save the updated groupsTitlesArray in localStorage
        localStorage.setItem('groupsTitlesArray', JSON.stringify(updatedGroupsTitlesArray));
  
        // Clear the input field
        props.setNewMessage('');
        props.setSelectedTitle(updatedSelectedTitle);
  
        // Log the updated messages for testing
        console.log(updatedSelectedTitle.messages);
      }
    }
  
    return (
      <div>
        <div className={styles.outer}>
          <div className={styles.titleArea} style={{ display: 'flex', alignItems: 'center' }}>
            <div className={styles.circler} style={{ background: props.selectedTitle.color }}>
              <p>{TitleInCircle || ''}</p>
            </div>
            <p style={{ textAlign: 'center', fontFamily: 'Roboto', letterSpacing: '1px', margin: '10px', fontWeight: '500' }}>
              {props.selectedTitle.title}
            </p>
          </div>
          <div className={styles.messagesArea}>
            {props.selectedTitle?.messages.map((element, index) => (
              <div className={styles.messagearea} key={index}>
                <div className={styles.messageareaLeft}>
                  <span>{element.time.split(',')[1]}</span>
                  <span>{formateDate(element.time.split(',')[0])}</span>
                </div>
                <div className={styles.messageareaRight}>
                  <span>{element.text}</span>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.inputArea}>
            <textarea
              placeholder="Enter your Note Here....."
              value={props.newMessage}
              onChange={(e) => {
                props.setNewMessage(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
            <img src={sendBtn} alt="" onClick={handleSendMessage} />
          </div>
        </div>
      </div>
    );
  }
  
  export default MessageBox;
