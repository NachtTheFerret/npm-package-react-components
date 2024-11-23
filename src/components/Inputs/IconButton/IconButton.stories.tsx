import { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: 'Inputs/IconButton',
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Solid: Story = {
  args: {
    icon: '🚀',
    className: 'bg-blue-500',
  },
};

export const Outline: Story = {
  args: {
    icon: '🚀',
    variant: 'outline',
    className: 'bg-blue-500 text-blue-500 border-blue-500',
  },
};

export const Ghost: Story = {
  args: {
    icon: '🚀',
    variant: 'ghost',
    className: 'hover:bg-blue-500 text-blue-500',
  },
};

export const Disabled: Story = {
  args: {
    icon: '🚀',
    disabled: true,
    className: 'bg-blue-500',
  },
};
