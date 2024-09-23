import React, { useState, useEffect } from "react";
import NewsItems from "./NewsItems"; // Ensure correct import

const Home = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=8cde1524e9da4e5ab9344b74cbaa0b94`;
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok " + res.statusText);
        }
        return res.json();
      })
      .then((data) => setArticles(data.articles))
      .catch((err) => console.error("Fetch error: ", err));
  }, [category]);

  return (
    <div>
      <div className="text-center p-5">
        <h1 className="text-3xl font-bold mb-5">Today in <span className="text-red-600">the World </span> </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-7">
        {articles.length > 0 ? (
          articles.map((news, index) => (
            <NewsItems
              key={index}
              title={news.title}
              url={news.url}
              description={news.description}
              src={news.urlToImage || "path/to/default-image.jpg"} 
            />
          ))
        ) : (
          <p>Loading articles...</p> 
        )}
      </div>
    </div>
  );
};

export default Home;
