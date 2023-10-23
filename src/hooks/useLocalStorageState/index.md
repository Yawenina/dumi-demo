---
nav: Hooks
---

# useLocalStorageState
虽然每次 `count` 更新都会执行 `useLocalStorageState`, 但是初始化函数只会执行一次, 所以当 `defaultValue`是动态变量时，仍然只会以第一次传入的值为准，不会动态变更。查看 `Console`。

```jsx
import { useState, useEffect, useRef } from 'react';
import { useLocalStorageState } from 'dumi-demo';

export default function () {
  const [count, setCount] = useState(1);
  const [message, setMessage] = useLocalStorageState<string | undefined>(
    'use-local-storage-state-demo2',
    {
      defaultValue: count,
    },
  );

  useEffect(() => {
    let timerId = setInterval(() => {
        if (count < 10) {
          setCount(prev => ++prev)
        } else {
          clearInterval(timerId)
        }
    }, 200);
    return () => clearInterval(timerId);
  }, [count])

  return (
    <>
      <p>Count: {count}</p>
      <input
        value={message || ''}
        placeholder="Please enter some words..."
        onChange={(e) => setMessage(e.target.value)}
      />
      <button style={{ margin: '0 8px' }} type="button" onClick={() => setMessage('Hello~')}>
        Reset
      </button>
      <button type="button" onClick={() => setMessage(undefined)}>
        Clear
      </button>
    </>
  );
}

```