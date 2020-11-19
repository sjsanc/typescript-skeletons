import React from "react";
import { SkeletonTypes } from "../types/types";
import "../styles/Skeleton.css";

export default function Skeleton(prop: { type: SkeletonTypes }) {
  const classes = `skeleton ${prop.type}`;

  return <div className={classes}></div>;
}
