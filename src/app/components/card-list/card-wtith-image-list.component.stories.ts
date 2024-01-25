import type { Meta, StoryObj } from '@storybook/angular';
import { CardWithImageListComponent } from './card-wtith-image-list.component';

const meta: Meta<CardWithImageListComponent> = {
  component: CardWithImageListComponent,
  title: 'Card With Image List',
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
type Story = StoryObj<CardWithImageListComponent>;

export const Primary: Story = {
  args: {
    props: {
      items: [
        {
          src: '/image.jpg',
          title: 'Title',
          description: 'Description',
        },
        {
          src: '/image.jpg',
          title: 'Title',
          description: 'Description',
        },
        {
          src: '/image.jpg',
          title: 'Title',
          description: 'Description',
        },
      ],
    },
  },
};
