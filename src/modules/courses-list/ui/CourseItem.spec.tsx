import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CourseItem from "./CourseItem";

describe("CourseItem", () => {
  it("Should call delete callback", async () => {
    const onDelete = jest.fn();

    render(
      <CourseItem
        course={{
          id: "1",
          name: "test",
          description: "test",
        }}
        onDelete={onDelete}
      />,
    );

    await userEvent.click(screen.getByText("Delete"));

    expect(onDelete).toHaveBeenCalled();
  });
});
