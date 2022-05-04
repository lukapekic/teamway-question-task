import { useEffect, useState } from "react";
import * as api from "../../api";
import { PersonalityType, Question } from "../../api/types";
import { Answers } from "./types";

export const useQuestions = (
  onInteractionEnd: (result: PersonalityType) => void
) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const questions = await api.getQuestions();
        setQuestions(questions);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestions();
  }, []);

  const addAnswer = (answerId: number) =>
    setAnswers((prevValue) => ({
      ...prevValue,
      [answerId]: (prevValue[answerId] ?? 0) + 1,
    }));

  const submitResult = async (answer: number) => {
    const isNextQuestion = activeQuestion < questions.length - 1;

    if (!isNextQuestion) {
      try {
        const response = await api.submitQuestions(answers);
        const result = await response.json();
        onInteractionEnd(result);
      } catch (error) {
        console.error(error);
      }
    } else {
      addAnswer(answer);
      setActiveQuestion((prevState) => prevState + 1);
    }
  };

  return {
    questions,
    answers,
    activeQuestion,
    addAnswer,
    submitResult,
  };
};
