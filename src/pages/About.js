import React from "react";
import { Link, useRouteMatch, Route } from "react-router-dom";
import SinglePage from "./SinglePage";

export default function About() {
  const { url, path } = useRouteMatch();
  console.log(url, path);

  return (
    <div className="about__content">
      <ul className="about__list">
        <li>
          <Link to={`${url}/about-app`}>About App</Link>
        </li>
        <li>
          <Link to={`${url}/about-author`}>About Author</Link>
        </li>
      </ul>
      <Route path={`${path}/:slug`}>
        <SinglePage />
      </Route>
    </div>
  );
}
