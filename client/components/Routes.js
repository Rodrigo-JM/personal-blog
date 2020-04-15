import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import PostList from "./PostList";
import TopBar from "./TopBar";
import SinglePost from "./SinglePost";
import Cover from "./Cover";
import MiniBar from "./MiniBar";
import Footer from "./Footer";
import PostForm from "./PostForm";

const Routes = () => {
  return (
    <Router>
      <Route path="/" component={TopBar} />
      <Route exact path="/blog" component={Cover} />
      <Route exact path="/blog" component={MiniBar} />
      <Switch>
        <Route exact path="/blog" component={PostList} />
        <Route path="/blog/posts/:postId/edit" component={PostForm} />
        <Route path="/blog/posts/new" component={PostForm} />
        <Route exact path="/blog/posts/:postId" component={SinglePost} />
        <Redirect to="/blog" />
      </Switch>
      <Route path="/" component={Footer} />
    </Router>
  );
};

export default Routes;
