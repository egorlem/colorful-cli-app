import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AboutPage } from "../pages/aboutPage";
import { PromptEditorPage } from "../pages/prompteditorPage";
import { ResultPage } from "../pages/resultPage";
import { GolobalSettingsPage } from "../pages/settingsPage";

export const AppPages = () => {
  return (
    <>
      <Route exact path="/psone">
        <PromptEditorPage />
      </Route>
      <Route exact path="/result">
        <ResultPage />
      </Route>
      <Route exact path="/settings">
        <GolobalSettingsPage />
      </Route>
      <Route exact path="/about">
        <AboutPage />
      </Route>
      <Route exact path="/">
        <Redirect to="/psone" />
      </Route>
    </>
  );
};
