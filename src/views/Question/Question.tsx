import type { FormEvent, FunctionComponent } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuestions } from "../../common/hooks";
import { Button, ButtonType } from "../../components";
import { Question } from "../../components";
import style from "./Question.module.scss";

export const QuestionPageView: FunctionComponent = () => {
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const { questions, submitResult, activeQuestion } = useQuestions((result) =>
    navigate("/result", { state: result })
  );

  return (
    <div className={style["question__wrapper"]}>
      <form
        data-testid="questionPage-form"
        onSubmit={(event: FormEvent) => {
          event.preventDefault();
          submitResult(selectedAnswer as number);
          setSelectedAnswer(null);
        }}
      >
        {questions.length !== 0 &&
          questions.map(({ question, answers, id }, index) => (
            <Question
              key={id}
              id={id}
              question={question}
              answers={answers}
              onClick={setSelectedAnswer}
              active={activeQuestion === index}
              selectedAnswer={selectedAnswer}
            />
          ))}
        <div className={style["action__wrapper"]}>
          <Button
            data-testid="questionPage-cancelButton"
            type="reset"
            variant={ButtonType.SECONDARY}
            onClick={() => navigate("/")}
          >
            Cancel
          </Button>
          <Button
            data-testid="questionPage-submitButton"
            type="submit"
            disabled={!selectedAnswer}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};
