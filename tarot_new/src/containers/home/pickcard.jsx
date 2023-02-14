import React, {useState, useEffect} from "react";
import styles from "../../style";
import { choose, cardback } from "../../assets";
import { tarot } from "../../constants";
import './pickcard.css'
import { max, set } from 'date-fns';
import {cardback_new, question, question_3, question_final} from "../../assets";

const Pickcard = () => {

  // here are just my hooks i will need to pay attention on clicks, count, first, second and third
  // const [isActive, setIsActive] = useState(false);
  const [clicks, setClicks] = useState(localStorage.getItem('clicks'));
  // const [num, setNum] = useState(0);
  const [deck, setDeck] = useState([]);
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [third, setThird] = useState(0);
  const [count, setCount] = useState(0);

  //just to shuffle cards
  const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
  
  // with the help of this useEffect data in local storage does not disappear means i need to make these items to appear when i need

  useEffect(() => {
    const card1 = window.localStorage.getItem("card1")
    if (card1 !== null) setFirst(JSON.parse(card1));

    const name1 = window.localStorage.getItem("name1")
    if (name1 !== null) setFirst(JSON.parse(name1));

    const card2 = window.localStorage.getItem("card2")
    if (card2 !== null) setSecond(JSON.parse(card2));

    const name2 = window.localStorage.getItem("name2")
    if (name2 !== null) setSecond(JSON.parse(name2));

    const card3 = window.localStorage.getItem("card3")
    if (card3 !== null) setThird(JSON.parse(card3));

    const name3 = window.localStorage.getItem("name3")
    if (name3 !== null) setThird(JSON.parse(name3));
  },[]);


  // if i do not put this peace of code the default value of names will

  // useEffect(() => {
  //   window.localStorage.setItem("card1", tarot[first].url)
  //   window.localStorage.setItem("card2", tarot[second].url)
  //   window.localStorage.setItem("card3", tarot[third].url)

  //   window.localStorage.setItem("name1", tarot[first].name)
  //   window.localStorage.setItem("name2", tarot[second].name)
  //   window.localStorage.setItem("name3", tarot[third].name)
  //   },
  // []); 

// this code i need for shuffling
  useEffect(() => {
    function shuffledDeck() {
      setDeck(shuffle(tarot));
      }
    shuffledDeck();
    },
  []); 

  useEffect(() =>{
      function myFunction() {
        // const interval = setInterval(() => {
          // let card1 = Number(localStorage.getItem('card1'));
          let card1 = Number(localStorage.getItem('card1')) || 0;
          localStorage.setItem('card1', card1);
          document.getElementById("savedcard1").innerHTML = localStorage.getItem("card1");

          let card2 = Number(localStorage.getItem('card2')) || 0;
          localStorage.setItem('card2', card2);
          document.getElementById("savedcard2").innerHTML = localStorage.getItem("card2");

          let card3 = Number(localStorage.getItem('card3')) || 0;
          localStorage.setItem('card3', card3);
          document.getElementById("savedcard3").innerHTML = localStorage.getItem("card3");


//this part makes Fool always appear

          // if (card1 == 0){
          //   document.getElementById("mainFrameOne_1").style.display="none"; 
          //   document.getElementById("mainFrameTwo_1").style.display="block";
          // } else {
          //   document.getElementById("mainFrameOne_1").style.display="none"; 
          //   document.getElementById("mainFrameTwo_1").style.display="block";
          // }

          // if (card2 == 0){
          //   document.getElementById("mainFrameOne_2").style.display="none"; 
          //   document.getElementById("mainFrameTwo_2").style.display="block";
          // } else {
          //   document.getElementById("mainFrameOne_2").style.display="none"; 
          //   document.getElementById("mainFrameTwo_2").style.display="block";
          // }

          // if (card3 == 0){
          //   document.getElementById("mainFrameOne_3").style.display="none"; 
          //   document.getElementById("mainFrameTwo_3").style.display="block";
          // } else {
          //   document.getElementById("mainFrameOne_3").style.display="none"; 
          //   document.getElementById("mainFrameTwo_3").style.display="block";
          // }
          
        // }, 5000);
        // return () => clearInterval(interval);

      }
      myFunction();

  },[])

  useEffect(() => {
    document.getElementById("savedcard1").innerHTML = localStorage.getItem("card1");
    document.getElementById("savedcard2").innerHTML = localStorage.getItem("card2");
    document.getElementById("savedcard3").innerHTML = localStorage.getItem("card3");

  })

useEffect(() =>{
  function disappear(e) { 
  
    if (clicks >= 3) {
    // setClicks(1);
      // localStorage.setItem('clicks', 0);
      // localStorage.setItem('count', 0);
      return;
    }
    setClicks(0);
    // localStorage.setItem('clicks', clicks);
    setCount(count + 1)
    
    // if((count == 1 )){
    //   document.getElementById("mainFrameOne_1").style.display="none"; 
    //   document.getElementById("mainFrameTwo_1").style.display="block";
    //   console.log('You clicked '+ count + ' times')
    //   setFirst(e.target.id);
    //   localStorage.setItem("card1", tarot[e.target.id].url)
    //   localStorage.setItem("name1", tarot[e.target.id].name)
    // }else if (count == 2){
    //   document.getElementById("mainFrameOne_2").style.display="none"; 
    //   document.getElementById("mainFrameTwo_2").style.display="block";
    //   console.log('You clicked '+ count + ' times')
    //   setSecond(e.target.id);
    //   localStorage.setItem("card2", tarot[e.target.id].url)
    //   localStorage.setItem("name2", tarot[e.target.id].name)
    // }else if (count == 3){
    //   document.getElementById("mainFrameOne_3").style.display="none"; 
    //   document.getElementById("mainFrameTwo_3").style.display="block"; 
    //   setThird(e.target.id);
    //   localStorage.setItem("card3", tarot[e.target.id].url)
    //   localStorage.setItem("name3", tarot[e.target.id].name)
    // }else{
    //   console.log('Do not click more than 3 times');
    // }
    // return () => clearItem(count);
  }
  // function disappear(e);
},[])

function disappear(e) { 
  
  if (clicks >= 3) {
  // setClicks(1);
    // localStorage.setItem('clicks', 0);
    // localStorage.setItem('count', 0);
    return;
  }
  setClicks(0);
  // localStorage.setItem('clicks', clicks);
  setCount(count + 1)
  
  if((count == 1 )){
    document.getElementById("mainFrameOne_1").style.display="none"; 
    document.getElementById("mainFrameTwo_1").style.display="block";
    console.log('You clicked '+ count + ' times')
    setFirst(e.target.id);
    localStorage.setItem("card1", tarot[e.target.id].url)
    localStorage.setItem("name1", tarot[e.target.id].name)
  }else if (count == 2){
    document.getElementById("mainFrameOne_2").style.display="none"; 
    document.getElementById("mainFrameTwo_2").style.display="block";
    console.log('You clicked '+ count + ' times')
    setSecond(e.target.id);
    localStorage.setItem("card2", tarot[e.target.id].url)
    localStorage.setItem("name2", tarot[e.target.id].name)
  }else if (count == 3){
    document.getElementById("mainFrameOne_3").style.display="none"; 
    document.getElementById("mainFrameTwo_3").style.display="block"; 
    setThird(e.target.id);
    localStorage.setItem("card3", tarot[e.target.id].url)
    localStorage.setItem("name3", tarot[e.target.id].name)
  }else{
    console.log('Do not click more than 3 times');
  }
  // return () => clearItem(count);
}

  return (
    <div id="giftslove">
      <div>
      </div>
      <h1 className="text-center  text-[#F4CE97] flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]">
        Choose <span> three </span>{" "} cards
      </h1>
      <p className="text-center">You can choose only 3 cards today 😊</p>
      <p className="text-center">Text me to reveal the meaning ❤️</p><br/>

      <div className={`inline-block ${styles.flexCenter} `}>
        <div className='flex w-150px h-75px m-50' id="tarot" >
          {deck.map((tarot) => (
            <div >
              <div className='grid grid-cols-12 '>
                <div className='row-span-full col-start-3 col-span-12 self-center'>
                    <img style={{pointerEvents: count < 4 ? '' : 'none' }} className=" w-[100%] h-[100%] hover:opacity-100 transition  duration-300 ease-in-out cursor-pointer opacity-100 hover:opacity-50	hover:-translate-y-1" id={tarot.id} onClick={disappear} src={cardback}></img>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='sm:h-12' alt='empty div'></div>
      <div className={`${styles.flexCenter} inline-block grid grid-flow-col gap-5 content-evenly justify-center `}>
          <div>
          <p className={`${styles.flexCenter} font-bold text-[#C95672] sm:ml-10 ml-0 sm:mt-0 mt-10` } >SELF</p>
          <div id="mainFrameOne_1">
            <div>
              <img className="h-20 sm:h-96 sm:w-54 items-center" src={question_final}/>
              <a className={`${styles.flexCenter} text-[#C95672] sm:ml-10 ml-0 sm:mt-0 mt-10`}>NAME</a>
            </div>
          </div>
          <div id="mainFrameTwo_1"  className='mainFrameTwo' >
            <div className="changed">
              <img id="savedcard1" className="h-20 sm:h-96 sm:w-54 items-center" src={tarot[first].url}/>
              <a className={`${styles.flexCenter} text-[#C95672] sm:ml-10 ml-0 sm:mt-0 mt-10`} name="name">{tarot[first].name}</a>
            </div>
          </div>
        </div>

        <div>
          <p className={`${styles.flexCenter} font-bold text-[#C95672] sm:ml-10 ml-0 sm:mt-0 mt-10`} >SITUATION</p>
          <div id="mainFrameOne_2">
            <div>
              <img  className="h-20 sm:h-96 sm:w-54 items-center" src={question_final}/>
              <a className={`${styles.flexCenter} text-[#C95672] sm:ml-10 ml-0 sm:mt-0 mt-10`}>NAME</a>
            </div>
          </div>
          <div id="mainFrameTwo_2" className='mainFrameTwo' >
            <img id="savedcard2" className="h-20 sm:h-96 sm:w-54 items-center" src={tarot[second].url}/>
            <a className={`${styles.flexCenter} text-[#C95672] sm:ml-10 ml-0 sm:mt-0 mt-10`}>{tarot[second].name}</a>
          </div>
        </div>

        <div>
          <p className={`${styles.flexCenter} font-bold text-[#C95672] sm:ml-10 ml-0 sm:mt-0 mt-10`} >CHALLENGES</p>
          <div id="mainFrameOne_3">
            <div>
              <img className="h-20 sm:h-96 sm:w-54 items-center" src={question_final}/>
              <a className={`${styles.flexCenter} text-[#C95672] sm:ml-10 ml-0 sm:mt-0 mt-10`}>NAME</a>
            </div>
          </div>
          <div id="mainFrameTwo_3" className='mainFrameTwo' >
            <div>
            {/* <p className={`${styles.flexCenter} font-bold text-[#C95672] sm:ml-10 ml-0 sm:mt-0 mt-10`} >CHALLENGES</p> */}
            {/* <img className="h-20 sm:h-96 sm:w-54 items-center mx-{8} ml-6" src={tarot[third].url}/> */}
              <img id="savedcard3" className="h-20 sm:h-96 sm:w-54 items-center" src={tarot[third].url}/>
              <a className={`${styles.flexCenter} text-[#C95672] sm:ml-10 ml-0 sm:mt-0 mt-10`}>{tarot[third].name}</a>
            </div>
          </div>
        </div>
      </div>
      <div className='sm:h-12' alt='empty div'></div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`} >
        <a href="https://www.instagram.com/aaobateinkarein/" target="_blank" style={{pointerEvents: count > 2 ? '' : 'none' }}>
          <button  href="https://www.instagram.com/aaobateinkarein/" style={{pointerEvents: count > 2 ? '' : 'none' }} className = "w-60 h-10 rounded-lg transition ease-in-out delay-150 bg-[#C2B587] text-white font-bold hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#88665D] hover:border-2 hover:border-[#88665D]	duration-300 ">
            REVEAL THE MEANING
          </button>
        </a>
      </div>
      
      {/* <div class="modal">
       <div class="modal_content">
        <span class="close">&times;</span>
        <p>I'm A Pop Up!!!</p>
       </div>
      </div> */}
      
    </div>
  )
}

export default Pickcard
