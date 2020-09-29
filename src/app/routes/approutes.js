import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { AboutPage } from "../pages/aboutPage";
import { PromptEditorPage } from "../pages/prompteditorPage";
import { ResultPage } from "../pages/resultPage";
import { GolobalSettingsPage } from "../pages/settingsPage";
const Test404 = () => {
  return <>404</>;
};
export const AppPages = () => {
  return (
    <Switch>
      <Route path="/psone">
        <PromptEditorPage />
      </Route>
      <Route path="/result">
        <ResultPage />
      </Route>
      <Route path="/settings">
        <GolobalSettingsPage />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/">
        <Redirect to="/psone" />
      </Route>
      <Route component={Test404} />
    </Switch>
  );
};
