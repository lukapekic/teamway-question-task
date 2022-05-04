import { render } from "@testing-library/react";
import { Button } from "../Button";

describe("ButtonComponent", () => {
  it("should render successfuly", () => {
    const component = render(<Button />);
    expect(component).toMatchSnapshot();
  });
});
