import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "ui/styles.css";

import { Button } from "ui";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Embrace/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // size: {
    //   options: ["small", "medium", "large"],
    //   control: { type: "select" },
    // },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Button",
  size: "medium",
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  primary: false,
  label: "Small",
  size: "small",
};
