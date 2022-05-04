import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { QuestionPageView } from "../Question";
import { useQuestions } from "../../../common/hooks";
import { act } from "react-dom/test-utils";

const hooks = { useQuestions };

jest.requireActual("../../../api/utils");

jest.mock("../../../api", () => ({
  ...jest.requireActual("../../../api"),
  getQuestions: () =>
    Promise.resolve([
      {
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
      },
    ]),
}));

describe("QuestionPageView", () => {
  const setupComponent = () => {
    const component = render(
      <BrowserRouter>
        <QuestionPageView />
      </BrowserRouter>
    );

    return { component };
  };

  it("should render successfuly", () => {
    const { component } = setupComponent();
    expect(component).toMatchSnapshot();
  });

  it("should cancel question form and return to home page", async () => {
    const { component } = setupComponent();
    const cancelButton = await component.findByTestId(
      "questionPage-cancelButton"
    );

    act(() => {
      fireEvent.click(cancelButton);
    });

    expect(window.location.pathname).toBe("/");
  });

  it("should call submitResult on form submit", async () => {
    const mockSubmitResultFunction = jest.fn();

    //@ts-ignore
    jest.spyOn(hooks, "useQuestions").mockImplementation(() => {
      return {
        submitResult: mockSubmitResultFunction,
      };
    });

    const { component } = setupComponent();
    const answer = await component.findByTestId("questionComponent-answer1");
    const form = await component.findByTestId("questionPage-form");

    act(() => {
      fireEvent.click(answer);
    });

    fireEvent.submit(form);

    expect(mockSubmitResultFunction).toHaveBeenCalled();
  });
});
