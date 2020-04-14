import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostList from "./PostList";
import TopBar from "./TopBar";
import SinglePost from "./SinglePost";
import Cover from "./Cover";
import MiniBar from "./MiniBar";
import Footer from "./Footer";

const Routes = () => {
  return (
    <Router>
      <Route path="/" component={TopBar} />
      <Route exact path="/" component={Cover} />
      <Route exact path="/" component={MiniBar} />
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route path="/posts/:postId" component={SinglePost} />
      </Switch>
      <Route path="/" component={Footer} />
    </Router>
  );
};

export default Routes;
