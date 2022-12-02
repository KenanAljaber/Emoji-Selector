import { useEffect, useState } from "react"

export const useEmoji =()=>{
    const [emojisList,setEmojisList]=useState(null);

    useEffect(  ()=>{
        
             loadInfo();
            
        
        
       
    },[]);

    async function loadInfo(){
       setTimeout(async()=>{
            const resp= await fetch(`${process.env.REACT_APP_EMOJI_URL}access_key=${process.env.REACT_APP_EMOJI_KEY}`);
          
            if(resp.ok){
            const data= await resp.json();
            const emojisArr=getEmojis(data);
          
            setEmojisList(emojisArr);
           
            }else{
              
            }
        },1000)
      
    }

    function getEmojis(data){
        const emojisArr=data.reduce((acumulator,actual)=>{
            let emoji={
                emoji:actual.character,
                name:actual.unicodeName
            };
            acumulator.push(emoji);
            return acumulator;


        },[]);
        return emojisArr;
    }
    return [emojisList];
}