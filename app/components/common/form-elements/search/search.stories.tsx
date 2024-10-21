import type { Meta, StoryObj, StoryFn } from "@storybook/react";

import Search from "./search.component";

const meta: Meta<typeof Search> = {
  title: "Stateful Components/Common/Search",
  component: Search,
} satisfies Meta<typeof Search>;
export default meta;

type Story = StoryObj<typeof meta>;
const Template: StoryFn<typeof Search> = (args) => <Search {...args} />;

export const Default: Story = Template.bind({});

Default.args = {
  placeholder: "Search Element",
};
