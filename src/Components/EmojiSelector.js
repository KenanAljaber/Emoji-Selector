import { useEmoji } from "../Hooks/useEmoji";
import { forwardRef, useEffect, useState } from "react";
import "../Styles/emojisSelector.css";
import SearchEmoji from "./SearchEmoji";



const EmojiSelector = ({ props, inputRef }) => {
    const [emojis] = useEmoji();
    const [showEmoji, setShowEmoji] = useState(false);
    const [emojisList, setEmojisList] = useState();
    useEffect(() => {

        setEmojisList(emojis ? emojis : null);
    }, [emojis]);

    function searchEmoji(txt) {
        console.log(txt);
        const arr = emojisList.filter((it) => it.name.includes(txt));
        console.log(arr);
        setEmojisList(txt ? arr : emojis);


    }

    //cancel the window if clicked outside 
    window.onclick = function (ev) {
       console.log(ev.target.className)
        if (ev.target.className !== "emojisContainer" && ev.target.className !== "emojisBtn" &&
         ev.target.className !== "emoji" && ev.target.className !== "messageInput" && ev.target.className !== "searchContainer" &&
         ev.target.className !== "searchContainer-input"
          ) 
         {
            console.log("no")
            setShowEmoji(false);
        }
    };


    function emojiClicked(e) {

        const emoji = e.target.outerText;
        /* let old = inputRef.current.value;
         inputRef.current.value = old + emoji;*/

        const cursorPos = inputRef.current.selectionStart;
        const text = inputRef.current.value;
        const prev = text.slice(0, cursorPos);
        const next = text.slice(cursorPos);

        //set the crusor where it was 
        inputRef.current.value = prev + emoji + next;
        inputRef.current.selectionStart = cursorPos + emoji.length;
        inputRef.current.selectionEnd = cursorPos + emoji.length;
        inputRef.current.focus();
    }

    return (
        <div>
            <button className="emojisBtn" onClick={() => { setShowEmoji(!showEmoji) }}>&#x1F600;</button>
            {showEmoji ? <div className="emojisContainer">
                <SearchEmoji searchEmoji={searchEmoji}/>
                <div className="emojiCell">{emojisList ? emojisList.map((it) => {
                    return <p className="emoji" id="emoji" onClick={emojiClicked} style={{ display: "inline" }}>{it.emoji}</p>
                }) : ""}</div>
            </div> : ""
            }
        </div>
    );
}

export default forwardRef(EmojiSelector);

