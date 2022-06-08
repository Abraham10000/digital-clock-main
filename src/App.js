import { useState } from "react";
import "./App.css";
import Redirection from "./Clock/Bouton";
import { Clock, ClockClassComponent } from "./Clock/Clock";
import CountdownTimer from "./Countdown";

function App() {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  const [alter, setAlter] = useState(true);
  const changer = (event) =>{
    setAlter(!alter);
  }
let label;
let balise;
if(alter){
  label = "Time";
  balise = <Clock/>;
}
else{
  label = "Clock"
  balise=<CountdownTimer targetDate={dateTimeAfterThreeDays}/>
}
  return (
    <>
    <div onClick={changer} id="Change">{label}</div>
    {balise}
    </>
  );
}



 

  

export default App;
