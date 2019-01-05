// src/components/Hello.tsx

import * as React from 'react';
import styles from './Hello.scss'
import { Button } from 'antd'

console.log(styles)
export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className={styles.hello}>
      <div className={styles.greeting}>
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <Button type="primary" htmlType="button" onClick={onDecrement}>-</Button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}