import React, {  useState } from "react";
import styles from "./Input.module.css";
import InputEmoji from "react-input-emoji";

function Input({ sendMessage}) {
  const [message, setMessage] = useState("");
 


  const handleSubmit = (e) => {
    if(e.preventDefault){
      e.preventDefault();
    }
    // setMessage(inputMessage)
    // console.log("my SETT MESSAGE: ", message )
    if (message.trim() !== "") {
      // console.log("my SETT MESSAGE2: ", message )
      sendMessage(message);
      setMessage("");
    }
  };



  return (
     <form onSubmit={handleSubmit} className={styles.inputForm}>
      {/* <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={styles.inputField}
      /> */}

    <InputEmoji
    // style={{flexDirection: "row-reverse"}}
    type="text"
      value={message}
      onChange={setMessage}
      // className={styles.inputField}
      borderRadius={5}
      cleanOnEnter
      onEnter={handleSubmit}
      placeholder="Type a message"

    />
      <button type="submit" className={styles.sendButton} >
        Send
      </button>
    </form>
    
  );
}

export default Input;
