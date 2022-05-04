import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { LandingPageView } from "../Landing";

describe("LandingPageView", () => {
  const setupComponent = () => {
    const component = render(
      <BrowserRouter>
        <LandingPageView />
      </BrowserRouter>
    );

    return { component };
  };
  it("should render successfuly", () => {
    const { component } = setupComponent();
    expect(component).toMatchSnapshot();
  });

  it("should start test on Button click", async () => {
    const { component } = setupComponent();
    const introButton = await component.findByTestId("landingView-startButton");

    fireEvent.click(introButton);

    expect(window.location.pathname).toBe("/questions");
  });
});
