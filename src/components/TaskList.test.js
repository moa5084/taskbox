import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { WithPinnedTasks } from "./TaskList.stories";

it("renders pinned tasks at the start of the list", () => {
  const { getAllByTestId } = render(
    <WithPinnedTasks {...WithPinnedTasks.args} />
  );
  const listItems = getAllByTestId("list-item");
  expect(listItems[0]).toHaveClass("TASK_PINNED");
});
