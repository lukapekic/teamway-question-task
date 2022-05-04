import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ResultPageView } from "../Result";

describe("ResultPageView", () => {
  const setupComponent = () => {
    const component = render(
      <BrowserRouter>
        <ResultPageView />
      </BrowserRouter>
    );

    return { component };
  };

  it("should render successfuly", () => {
    const { component } = setupComponent();
    expect(component).toMatchSnapshot();
  });
});
