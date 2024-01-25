import type { Meta, StoryObj } from '@storybook/angular';
import { CardWithImageComponent } from './card-wtith-image.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
const meta: Meta<CardWithImageComponent> = {
  component: CardWithImageComponent,
  title: 'Card With Image',
  decorators: [
    (story) => ({
      ...story(),
      template: `<div
      style="background-color: #eee; padding: 3rem;"
      >${story().template}</div>`,
    }),
  ],
};
export default meta;
type Story = StoryObj<CardWithImageComponent>;

export const Primary: Story = {
  args: {
    src: '/image.jpg',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getAllByRole('img')).toHaveLength(1);
  },
};
