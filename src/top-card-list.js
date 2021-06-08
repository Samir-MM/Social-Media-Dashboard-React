import React from "react";

function TopCardList() {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          <article className="card facebook">
            <p className="card-title">
              <img src="images/icon-facebook.svg" alt="" />
              @SamirMontalvan
            </p>
            <p className="card-followers">
              <span className="card-followers-number">1483</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt="" />
              12 Today
            </p>
          </article>
          <article className="card twitter">
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
          </article>
        </div>
      </div>
    </section>
  );
}

export default TopCardList;
