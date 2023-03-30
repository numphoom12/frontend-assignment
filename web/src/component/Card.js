import React, { useEffect, useState } from "react";
import "./Card.css";
import axios from "axios";

function Card() {
  const [card, setCard] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:9000/trips").then(
      // (result) => (console.log(result.data[0].title)) 
      
      (result) => {
        // const check = result.data
        console.log(result.data)
        const list = result.data.map((data, i) => {
          // console.log(data);
          return (
            <div className="content" key={i}>
              <div className="cover-bigphoto">
                <img className="big-photo" src={data.photos[0]} alt="" />
              </div>
              <div className="c-right">
                <a href={data.url} target="blank" className="subject">
                  {/* 10 Places to visit around BTS Green line! */}
                  {/* {a} */}
                  {data.title}
                </a>

                <div className="cover-readmore">
                  <p className="describe">{data.description}</p>

                  <a className="read-more" href={data.url} target="blank">
                    Read more
                  </a>
                </div>
                <p className="cover-tag">
                  หมวด{" "}
                  <a className="tag" href="a">
                    {data.tags.join(",")}
                  </a>
                </p>

                <div className="horizon">
                  <img className="small-photo" src={data.photos[1]} alt="" />
                  <img className="small-photo" src={data.photos[2]} alt="" />
                  <img className="small-photo" src={data.photos[3]} alt="" />
                </div>
              </div>
            </div>
          );
        });
        setCard(list);
      }
    );
  }, []);

  return <div className="">{card}</div>;
}

export default Card;
