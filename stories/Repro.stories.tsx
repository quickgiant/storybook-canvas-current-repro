import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button, { ButtonProps } from '../components/Button';

// @ts-expect-error - MDX import errors without a module declaration
import docs from './Repro.docs.mdx';

export default {
    title: 'Button',
    component: Button,
    parameters: {
      docs: {
        page: docs,
      },
    },
  } as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const defaultButton = Template.bind({});
defaultButton.args = {
    text: 'Button text',
};

export const redButton = Template.bind({});
redButton.args = {
    text: 'Button text',
    textColor: 'red'
};
