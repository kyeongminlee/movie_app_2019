import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "http://img.danawa.com/prod_img/500000/830/590/img/5590830_1.jpg?shrink=500:500&_v=20190522090644"
  },
  {
    name: "Samgyeopsal",
    image:
      "https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fdailylife%2F222d88e5c7dc496c8e8a8a56c3452e52.JPG"
  },
  {
    name: "Bibimbap",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/220px-Dolsot-bibimbap.jpg"
  },
  {
    name: "Doncasu",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Original_Tonkatsu.jpg/220px-Original_Tonkatsu.jpg"
  },
  {
    name: "Kimbap",
    image:
      "https://homecuisine.co.kr/files/attach/images/140/001/083/558d170258752df2dd76bef00861497f.JPG"
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
