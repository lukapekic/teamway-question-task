import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getQuestions } from "./api";
import { Question } from "./api/types";
import styles from "./App.module.scss";
import {
  ErrorBoundary,
  LandingPageView,
  QuestionPageView,
  ResultPageView,
} from "./views";

function App() {
  return (
    <div className={styles["wrapper"]}>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPageView />} />
            <Route path="/questions" element={<QuestionPageView />} />
            <Route path="/result" element={<ResultPageView />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
