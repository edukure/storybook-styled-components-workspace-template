// Button.stories.ts | Button.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button, { Props } from './index';

export default {
  title: 'Button',
  component: Button,
} as Meta;

// https://storybook.js.org/docs/react/writing-stories/introduction

//👇 We create a “template” of how args map to rendering
const Template: Story<Props> = (args) => <Button {...args}>LOL</Button>;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { backgroundColor: 'lightseagreen', textColor: 'white', disabled: false };
