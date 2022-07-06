import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../components/Header";
import * as S from "./styles";

import routes from "./config";
import GlobalStyles from "../globalStyles";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <GlobalStyles />
      <S.DecorationBg />
      <Header />
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
};

export default Router;
