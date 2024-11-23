import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Inputs/Button',
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Solid: Story = {
  args: {
    label: 'Solid',
    className: 'bg-blue-500 text-white',
  },
};

export const Outline: Story = {
  args: {
    label: 'Outline',
    variant: 'outline',
    className: 'bg-blue-500 text-blue-500 border-blue-500',
  },
};

export const Ghost: Story = {
  args: {
    label: 'Ghost',
    variant: 'ghost',
    className: 'hover:bg-blue-500 text-blue-500',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
    className: 'bg-blue-500 text-white',
  },
};
