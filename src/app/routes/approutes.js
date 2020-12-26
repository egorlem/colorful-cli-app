import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { PromptEditorPage } from '../pages/prompteditorPage';
import { ResultPage } from '../pages/resultPage';

export const AppPages = () => {
  return (
    <Switch>
      <Route path="/psone">
        <PromptEditorPage />
      </Route>
      <Route path="/result">
        <ResultPage />
      </Route>
      <Route path="/">
        <Redirect to="/psone" />
      </Route>
    </Switch>
  );
};
