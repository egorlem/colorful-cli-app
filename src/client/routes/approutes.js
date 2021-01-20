import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import EditorPage from '../pages/editorPage';
import { ResultPage } from '../pages/resultPage';

export const AppPages = () => {
  return (
    <Switch>
      <Route exact path="/psone">
        <EditorPage />
      </Route>
      <Route exact path="/result">
        <ResultPage />
      </Route>
      <Route path="/">
        <Redirect to="/psone" />
      </Route>
    </Switch>
  );
};
