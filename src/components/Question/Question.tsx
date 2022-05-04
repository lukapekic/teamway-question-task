import classNames from "classnames";
import { FunctionComponent } from "react";
import type { Question as QuestionType } from "../../api/types";
import style from "./Question.module.scss";

interface QuestionProps extends QuestionType {
  onClick: (answerId: number) => void;
  active?: boolean;
  selectedAnswer: null | number;
}

export const Question: FunctionComponent<QuestionProps> = ({
  question,
  onClick,
  answers,
  active,
  selectedAnswer,
}) => {
  return (
    <div
      className={classNames({
        [style["question"]]: true,
        [style["question--disabled"]]: !active,
      })}
    >
      <h1>{question}</h1>
      <div className={style["answers__wrapper"]}>
        {answers.map(({ id, label }) => {
          return (
            <li
              data-testid={"questionComponent-answer" + id}
              key={id}
              onClick={() => onClick(id)}
              className={classNames({
                [style["answers__item"]]: true,
                [style["answers__item--active"]]: selectedAnswer === id,
              })}
            >
              {id} - {label}
            </li>
          );
        })}
      </div>
    </div>
  );
};
