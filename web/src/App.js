import React,{useState,useEffect} from "react";
// import Card from "./component/Card";
import "./component/Card.css";
import "./App.css";
import Testcard from"./component/Testcard"
import axios from "axios";


function App() {
  const [query, setQuery] = useState("")
  const [data, setData] = useState("")

  useEffect(() => {
    const fetchUser = async ()=>{
      const res = await axios.get("http://localhost:9000/trips")
      setData(res.data);
    }
    fetchUser()
  },[]);

  // console.log(data)

  return (
    <div className="App">
        <header className="topic">
          <p>เที่ยวไหนดี ?</p>
          <input
            className="search-bar"
            placeholder="หาที่เที่ยวแล้วไปกัน..."
            style={{ outline: "none" }}
            onChange = {(e) =>  setQuery(e.target.value)}
          />
        </header>
        <div>
        {/* <div className="scroll-bg"> */}
        {/* {<Card data = {data}/>} */}
        {
          data &&
          data.map((data ,i)=>{
            return <Testcard data = {data} i = {i}/>
          }
          )
        }
        </div>
    </div>
  );
}

export default App;
