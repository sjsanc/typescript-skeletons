import React from "react";
import Skeleton from "./Skeleton";
import Shimmer from "./Shimmer";
import { Theme } from "../types/types";

export default function SkeletonArticle(props: { theme: Theme }) {
  const themeClass = props.theme || "light";

  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-article">
        <Skeleton type="title" />
        <Skeleton type="text" />
        <Skeleton type="text" />
      </div>
      <Shimmer />
    </div>
  );
}
