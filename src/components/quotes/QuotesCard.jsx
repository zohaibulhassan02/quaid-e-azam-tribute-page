import React from "react";
import Marquee from "react-fast-marquee";
import { LiaQuoteLeftSolid } from "react-icons/lia";
import image from "../../assets/quaid e azam.png";

const QuoteMarquee = () => {
  const quotes = [
    {
      text: "Faith, Unity, Discipline.",
      date: "28 December, 1947",
    },
    {
      text: "There is no power on earth that can undo Pakistan.",
      date: "30 October, 1947",
    },
    {
      text: "Expect the best, prepare for the worst.",
      date: "14 August, 1947",
    },
    {
      text: "No nation can rise to the height of glory unless your women are side by side with you.",
      date: "25 March, 1944",
    },
    {
      text: "We are now all Pakistanis.",
      date: "23 March, 1948",
    },
    {
      text: "You are free; you are free to go to your temples, you are free to go to your mosques.",
      date: "11 August, 1947",
    },
    {
      text: "Our object should be peace within and peace without.",
      date: "15 August, 1947",
    },
    {
      text: "Work honestly and sincerely.",
      date: "28 December, 1947",
    },
    {
      text: "My message to you all is of hope, courage, and confidence.",
      date: "14 August, 1947",
    },
    {
      text: "Failure is a word unknown to me.",
      date: "3 June, 1947",
    },
    {
      text: "I do not believe in taking the right decision, I take a decision and make it right.",
      date: "12 October, 1947",
    },
  ];

  return (
    <section id="quote-card">
      <h5>Inspiring Quotes</h5>
      <h2>Quaid-e-Azam's Timeless Wisdom</h2>
      <Marquee gradient={true} gradientColor="#000" speed={60}>
        {quotes.map((quote, index) => (
          <div key={index} style={styles.card}>
            <LiaQuoteLeftSolid style={styles.quoteIcon} />
            <p style={styles.quoteText}>{quote.text}</p>
            <div style={styles.bottomContent}>
              <p style={styles.dateText}>{quote.date}</p>
              <img src={image} alt="Quaid e Azam" style={styles.image} />
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginRight: "20px",
    padding: "2rem",
    backgroundColor: "#0fffc8",
    borderRadius: "5px",
    border: "1px solid #ddd",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    boxSizing: "border-box",
    overflow: "hidden", // Ensures content does not overflow out of the card
  },
  quoteIcon: {
    fontSize: "72px",
    color: "#000",
    marginBottom: "10px",
  },
  quoteText: {
    fontSize: "16px",
    fontStyle: "italic",
    color: "#333",
    margin: 0,
    marginBottom: "10px",
    overflow: "hidden", // Ensures text does not overflow
    whiteSpace: "normal",
    wordWrap: "break-word",
    lineHeight: "1.5", // Adds space between lines for readability
  },
  bottomContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "auto", //
  },
  dateText: {
    fontSize: "14px",
    color: "#888",
    margin: 0,
  },
  image: {
    width: "50px",
    height: "50px",
    marginLeft: "20px",
    borderRadius: "50%",
    objectFit: "cover",
  },
};

export default QuoteMarquee;
