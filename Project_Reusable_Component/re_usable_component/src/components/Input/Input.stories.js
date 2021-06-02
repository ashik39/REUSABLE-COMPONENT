import React from 'react';
import TextField from './TextField';
import NumberField from './NumberField';

export default {
  title: 'Form/Input',
  component: TextField,
  NumberField,
};

export const Textfield = () => <TextField placeholder="TEXT" />;
export const Numberfield = () => <NumberField placeholder="TEXT" />;
