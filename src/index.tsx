import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import {Home} from "./view/home";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Home,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return <div>error</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
