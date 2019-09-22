import React from 'react';
import { Button } from './lib';
import { Input } from './lib';
export default { title: 'Button' };

export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
);
export const other = () => (
    <Input />
);

