import { render } from "@testing-library/react";
import { FaCrown } from "react-icons/fa";

import { ContainerExampleB, IconExampleB, TextExampleB } from "./";

const component = (
  <ContainerExampleB className="example-b-class" style={{ color: "#ff0000" }}>
    <IconExampleB className="example-b-class" style={{ color: "#ff0000" }}>
      <FaCrown data-testid="fa-crown-icon" />
    </IconExampleB>
    <TextExampleB className="example-b-class" style={{ color: "#ff0000" }}>
      This is example text
    </TextExampleB>
  </ContainerExampleB>
);

describe("ExampleB Component Testing", () => {
  it("ExampleB component should have an icon", () => {
    const { getByTestId } = render(component);
    expect(getByTestId("fa-crown-icon")).toBeInTheDocument();
  });

  it("ExampleB component should have text", () => {
    const { getByTestId } = render(component);
    expect(getByTestId("example-b-text")).toHaveTextContent("This is example text");
  });

  it("ExampleB component should have a class name example-b-class", () => {
    const { getByTestId } = render(component);
    expect(getByTestId("example-b-container")).toHaveClass("example-b-class");
    expect(getByTestId("example-b-icon")).toHaveClass("example-b-class");
    expect(getByTestId("example-b-text")).toHaveClass("example-b-class");
  });

  it("ExampleB component should have a style attribute with value color: #ff0000", () => {
    const { getByTestId } = render(component);
    expect(getByTestId("example-b-container")).toHaveStyle("color: #ff0000");
    expect(getByTestId("example-b-icon")).toHaveStyle("color: #ff0000");
    expect(getByTestId("example-b-text")).toHaveStyle("color: #ff0000");
  });
});
