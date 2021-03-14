import React from "react";

import { Route } from "react-router-dom";
import HomeLayout from "../Page/Index/Home";
function FadingRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <HomeLayout>
          <Component {...matchProps} />
        </HomeLayout>
      )}
    />
  );
}
export default FadingRoute;
