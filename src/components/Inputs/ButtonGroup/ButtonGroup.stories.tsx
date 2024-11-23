import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button/Button';

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  title: 'Inputs/ButtonGroup',
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Solid: Story = {
  args: {
    children: [<Button label="Button 1" />, <Button label="Button 2" />, <Button label="Button 3" />],
    slot: { item: { className: 'bg-blue-500 text-white' } },
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: [<Button label="Button 1" />, <Button label="Button 2" />, <Button label="Button 3" />],
    slot: { item: { className: 'bg-blue-500 text-blue-500 border-blue-500' } },
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: [<Button label="Button 1" />, <Button label="Button 2" />, <Button label="Button 3" />],
    slot: { item: { className: 'hover:bg-blue-500 text-blue-500' } },
  },
};

export const Disabled: Story = {
  args: {
    children: [<Button label="Button 1" />, <Button label="Button 2" />, <Button label="Button 3" />],
    slot: { item: { disabled: true, className: 'bg-blue-500 text-white' } },
  },
};
