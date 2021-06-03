/* eslint-disable no-unused-vars */
import React from 'react';
import NumberComponent from './NumberField';

export default {
  title: 'Form/Input',
  component: NumberComponent,
};

const Template = (args) => <NumberComponent {...args} />;

export const Number = Template.bind({});
Number.args = {
  label: 'Number',
  name: 'Number',
  placeholder: 'Enter Number',
};
