import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "../components/NewsCards/NewsCards";
import useStyles from "./styles";
import wordsToNumbers from "words-to-numbers";
import image from "./media.jpg";

const api_key =
  "169b2b5be68138c958b579a8da7222392e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: api_key,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText("Please try that again...");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening...");
          } else {
            alanBtn().playText("Please try that again...");
          }
        }
      },
    });
  }, []);
  return (
    <div>
      <div className={classes.logoContainer}>
        <img src={image} className={classes.alanLogo} alt="logo" />
      </div>
      <NewsCards
        articles={newsArticles}
        activeArticle={activeArticle}
      ></NewsCards>
    </div>
  );
}

export default App;
