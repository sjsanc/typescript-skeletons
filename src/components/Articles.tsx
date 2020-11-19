import React, { useState, useEffect } from "react";
import { fetchApi } from "../services/apiCall";
import { IPostList } from "../types/APIInterfaces";
import SkeletonArticle from "./SkeletonArticle";
import { Theme } from "../types/types";

export default function Articles(props: { theme: Theme }) {
  const [articles, setArticles] = useState<IPostList | null>(null);

  useEffect(() => {
    setTimeout(async () => {
      const data = await fetchApi("posts");
      setArticles(data);
    }, 5000);
  }, []);

  return (
    <div className="articles">
      <h2>Articles</h2>

      {articles &&
        articles.map((article) => (
          <div className="article" key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </div>
        ))}

      {!articles &&
        [1, 2, 3, 4, 5].map((n) => (
          <SkeletonArticle key={n} theme={props.theme} />
        ))}
    </div>
  );
}
