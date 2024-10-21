import type { Meta, StoryObj, StoryFn } from "@storybook/react";

import Modal from "./modal.component";
import { useState } from "react";

const meta: Meta<typeof Modal> = {
  title: "Stateful Components/Common/Modal",
  component: Modal,
} satisfies Meta<typeof Modal>;
export default meta;

type Story = StoryObj<typeof meta>;
const Template: StoryFn<typeof Modal> = (args) => {
  const [show, setShow] = useState<boolean>(true);

  return (
    <>
      <button onClick={() => setShow(true)}>Show Modal</button>
      <Modal {...args} show={show} onClose={() => setShow(false)} />
    </>
  );
};

export const DefaultWithoutHeaderCmp: Story = Template.bind({});

DefaultWithoutHeaderCmp.args = {
  title: "Filter",
  children: [
    <Modal.Header>Header Component</Modal.Header>,
    <Modal.Body>Body Component</Modal.Body>,
    <Modal.Footer>Footer Component</Modal.Footer>,
  ],
};

export const Default: Story = Template.bind({});
Default.args = {
  title: "Title prop",
  children: [
    <Modal.Body>Body Component</Modal.Body>,
    <Modal.Footer>Footer Component</Modal.Footer>,
  ],
};

export const SidebarLeft: Story = Template.bind({});
SidebarLeft.args = {
  align: 'left',
  children: [
    <Modal.Header>Header Component</Modal.Header>,
    <Modal.Body>Body Component</Modal.Body>,
    <Modal.Footer>Footer Component</Modal.Footer>,
  ],
};

export const SidebarRight: Story = Template.bind({});
SidebarRight.args = {
  align: 'right',
  children: [
    <Modal.Header>Header Component</Modal.Header>,
    <Modal.Body>Body Component</Modal.Body>,
    <Modal.Footer>Footer Component</Modal.Footer>,
  ],
};
