import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTumblr } from '@fortawesome/free-brands-svg-icons'

const Quotes=() =>{

    const [quote,setQuote]=React.useState('');
    const [author,setAuthor]=React.useState('');
    
   
   React.useEffect(()=>{
     newQuote()
    },[])

    const newQuote=() =>{
   let api="https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
   fetch(api)
   .then(res=>res.json())
   .then(data=> {
     let dataQ=data.quotes;
     let randomNumber=Math.floor(Math.random()* dataQ.length);
     let randomQ=dataQ[randomNumber];

     setQuote(randomQ.quote);
     setAuthor(randomQ.author);
   })
   }
 
 const handleClick=()=>{
   newQuote();
 }

    return(
    <div id="quote-box">
      <i class="fas fa-quote-left"></i>
      <p id="text">{quote}</p>
      <small id="author">{author}</small>
      
      <div id="btns">
      <button id="new-quote" onClick={handleClick} >New Quote</button>
      <div id="social-media-btn">
         <a id="tweet-quote" href="twitter.com/intent/tweet" >  <FontAwesomeIcon icon={faTwitter} /></a> 
         <a id="tumblr-quote" href="twitter.com/intent/tweet">  <FontAwesomeIcon icon={faTumblr} /></a>
        
       </div>
       </div>
    </div>
   );
   

};


export default Quotes;