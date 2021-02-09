import React from "react";
import { action } from "@storybook/addon-actions";
import { PureInboxScreen } from "./InboxScreen";
import * as TaskListStories from "./TaskList.stories";
import { Provider } from "react-redux";

const store = {
  getState: () => {
    return {
      tasks: TaskListStories.Default.args.tasks,
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
};

const settings = {
  component: PureInboxScreen,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  title: "InboxScreen",
};

export default settings;

const Template = (args) => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: "Something",
};
