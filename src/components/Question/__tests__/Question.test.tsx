import { fireEvent, render } from "@testing-library/react";
import { Question as QuestionType } from "../../../api/types";
import { Question } from "../Question";

const question: QuestionType = {
  id: 1,
  question: "Question 1",
  answers: [
    {
      id: 1,
      label: "Answer 1",
    },
    {
      id: 2,
      label: "Answer 2",
    },
  ],
};

describe("QuestionComponent", () => {
  const handleClick = jest.fn();

  const setupComponent = () => {
    const component = render(
      <Question
        question={question.question}
        answers={question.answers}
        id={question.id}
        selectedAnswer={1}
        onClick={handleClick}
      />
    );

    return { component };
  };

  it("should render successfuly", () => {
    const { component } = setupComponent();
    expect(component).toMatchSnapshot();
  });

  it("should call onClick prop when answer is clicked", async () => {
    const { component } = setupComponent();

    const firstAnswer = await component.findByTestId(
      "questionComponent-answer1"
    );
    fireEvent.click(firstAnswer);

    expect(handleClick).toHaveBeenCalledWith(1);
  });
});
