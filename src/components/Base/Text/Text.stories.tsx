import { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'Basic/Text',
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Paragraph: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ratione tenetur totam hic dolore quia, aliquam alias nemo, rem temporibus vero quidem optio et itaque assumenda asperiores ipsum deserunt! Nulla! Quos, culpa facilis nobis officia quasi obcaecati ipsam neque soluta numquam praesentium magnam nostrum molestias libero ipsa repellat quo, modi est. Ducimus eius ipsam veritatis atque modi incidunt animi omnis. Ad autem, quod adipisci ab reiciendis ea similique libero quisquam fugiat, maiores officiis praesentium illum repudiandae dolorem! Autem esse dolorum, eligendi odio quasi assumenda alias quibusdam rerum distinctio molestiae praesentium?',
  },
};

export const Heading1: Story = {
  name: 'Heading 1',

  args: {
    tag: 'h1',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  name: 'Heading 2',

  args: {
    tag: 'h2',
    children: 'Heading 2',
  },
};

export const Heading3: Story = {
  name: 'Heading 3',

  args: {
    tag: 'h3',
    children: 'Heading 3',
  },
};

export const Heading4: Story = {
  name: 'Heading 4',

  args: {
    tag: 'h4',
    children: 'Heading 4',
  },
};

export const Heading5: Story = {
  name: 'Heading 5',

  args: {
    tag: 'h5',
    children: 'Heading 5',
  },
};

export const Heading6: Story = {
  name: 'Heading 6',

  args: {
    tag: 'h6',
    children: 'Heading 6',
  },
};

export const Span: Story = {
  args: {
    tag: 'span',
    children: 'Span',
  },
};
