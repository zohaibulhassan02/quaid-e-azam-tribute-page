import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/speech1.jpg";
import IMG2 from "../../assets/speech2.jpg";
import IMG3 from "../../assets/speech3.png";
import IMG4 from "../../assets/speech4.gif";
import IMG5 from "../../assets/speech5.jpg";
import IMG6 from "../../assets/speech6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Speech at the Constituent Assembly of Pakistan",
    blog: "https://na.gov.pk/en/content.php?id=74",
    youtube: "https://www.youtube.com/watch?v=-e4hLI2Y2aA",
  },
  {
    id: 2,
    image: IMG2,
    title: "Speech on the Eve of Independence",
    blog: "https://na.gov.pk/en/content.php?id=74#:~:text=You%20are%20free%3B%20you%20are,State%20(Hear%2C%20hear).",
    youtube: "https://www.youtube.com/watch?v=afF_cEUe_NE",
  },
  {
    id: 3,
    image: IMG3,
    title: "Speech at Islamia College, Peshawar",
    blog: "https://defence.pk/threads/jinnahs-speech-at-islamia-college-peshawar-on-april-12-1948.630714/",
    youtube: "https://www.youtube.com/watch?v=S9ZEtHLoIWU",
  },
  {
    id: 4,
    image: IMG4,
    title: "Speech at the State Bank of Pakistan Inauguration",
    blog: "https://www.sbp.org.pk/about/history/h_moments.htm#:~:text=We%20will%20thereby%20be%20fulfilling,end%20I%20thank%20you%2C%20Mr.",
    youtube: "https://www.dailymotion.com/video/xcvoqo",
  },
  {
    id: 5,
    image: IMG5,
    title: "Speech at University Stadium, Lahore",
    blog: "https://defence.pk/threads/quaid-e-azams-address-to-a-huge-crowd-in-lahore-the-task-ahead.124908/",
    youtube: "https://www.youtube.com/watch?v=DsY_RpK6204",
  },
  {
    id: 6,
    image: IMG6,
    title: "Speech to Army Officers at Malir, Karachi",
    blog: "https://epwing.gov.pk/SiteImage/Misc/files/Coffee%20Table%20Quaid%20Book%20final.pdf",
    youtube:
      "https://www.facebook.com/OfficialPakArmy/videos/historical-speech-by-quaid-e-azam-mohammad-ali-jinnah/394323217357365/",
  },
];

const Portfolio = () => {
  return (
    <section id="speeches">
      <h5>Quaid-e-Azam's Iconic Speeches</h5>
      <h2>Quaid-e-Azam's Vision in Iconic Speeches</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, blog, youtube }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={blog} className="btn" target="_blank">
                  Read Post
                </a>
                <a
                  href={youtube}
                  className="btn btn-primary btn-shine"
                  target="_blank"
                >
                  Watch Speech
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
