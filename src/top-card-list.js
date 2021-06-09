import React from "react";
import Card from "./card";

const cardListData = [
  {
    username: "@Samir Montalvan",
    id: 1,
    followers: 1583,
    todayFollowers: 12,
    icon: "images/icon-facebook.svg",
    name: "twitter",
  },
  {
    username: "@Samir Montalvan",
    id: 2,
    followers: "28k",
    todayFollowers: 25,
    icon: "images/icon-twitter.svg",
    name: "facebook",
  },
  {
    username: "@Samir Montalvan",
    id: 3,
    followers: "6k",
    todayFollowers: 222,
    icon: "images/icon-instagram.svg",
    name: "instagram",
  },
  {
    username: "@Samir Montalvan",
    id: 4,
    followers: "12k",
    todayFollowers: -42,
    icon: "images/icon-youtube.svg",
    name: "youtube",
  },
];

function TopCardList() {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {cardListData.map((cardData) => (
            <Card key={cardData.id} {...cardData} />
          ))}
          {/*   <article className="card twitter">
            <p className="card-title">
              <img src="images/icon-twitter.svg" alt="" />
              @SamirMontalvan
            </p>
            <p className="card-followers">
              <span className="card-followers-number">27k</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt="" />
              12 Today
            </p>
          </article>
          <article className="card instagram">
            <p className="card-title">
              <img src="images/icon-instagram.svg" alt="" />
              @SamirMontalvan
            </p>
            <p className="card-followers">
              <span className="card-followers-number">4k</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt="" />
              12 Today
            </p>
          </article>
          <article className="card youtube">
            <p className="card-title">
              <img src="images/icon-youtube.svg" alt="" />
              @SamirMontalvan
            </p>
            <p className="card-followers">
              <span className="card-followers-number">22k</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt="" />
              12 Today
            </p>
          </article> */}
        </div>
      </div>
    </section>
  );
}

export default TopCardList;
