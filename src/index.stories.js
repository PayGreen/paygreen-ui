import React from 'react';
import { Button } from './lib';
import { Input } from './lib';

export default { title: 'Button' };

export const withText = () => <Button text="🚴‍♂️">Hello Button</Button>;

export const withEmoji = () => (
    <Button text="coucou"><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
);
export const other = () => (
    <Input />
);

