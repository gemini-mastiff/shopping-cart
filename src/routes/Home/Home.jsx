import "./Home.css";
import ClownImg from "../../assets/clown.jpg";

export default function Home() {
  return (
    <div className="homepage">
      <section className="hero__bg">
        <div className="hero container">
          <div className="hero__para">
            <h1 className="hero__title">BUY MY STUFF!</h1>
            <p className="hero__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam porro rem velit facilis architecto molestias sunt modi,
              nihil ipsam suscipit ratione alias aspernatur ad quasi aliquid
              neque dolore saepe dolor!
            </p>
            <a className="hero__cta">Call to Action!</a>
          </div>
          <div className="hero__img">
            <img src={ClownImg} alt="clown shouting" />
          </div>
        </div>
      </section>
      <div className="page__bg">
        <div className="page container">
          <section className="info1">
            <h3 className="info__title--main">Information!</h3>
            <div className="info__container">
              <div className="info__block">
                <h4 className="info__title">Info</h4>
                <p className="info__text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, pariatur ipsum. Unde quia sequi quis explicabo, harum
                  laudantium vel praesentium, sint magnam a aperiam veritatis
                  minus nulla delectus ipsam deleniti!
                </p>
              </div>
              <div className="info__block">
                <h4 className="info__title">More Info!</h4>
                <p className="info__text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repudiandae id, error ex sint a quod esse magnam possimus quas
                  laudantium placeat excepturi hic ullam sed delectus, at
                  asperiores. Aspernatur, excepturi!
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="info2__bg">
        <section className="info2 container">
          <div className="info__img">
            <img src={ClownImg} alt="clown shouting" />
          </div>
          <div className="info__para">
            <h1 className="info2__title">MORE WORDS!</h1>
            <p className="info__text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis explicabo magnam at ducimus dolorem optio voluptates
              ipsa fuga quia facilis, quasi accusantium alias dicta voluptatibus
              maxime neque sequi ipsum in.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
