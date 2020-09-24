# use-set-focus

React hook to immediately place the browser's focus to your chosen element on demand.

## Installation

`npm i use-set-focus`

## Usage

```typescript
import useSetFocus from 'use-set-focus';

const [inputRef, setInputFocus] = useSetFocus<HTMLInputElement>();

const focusOnInputNow = () => {
    setInputFocus();
}

return <input ref={inputRef}>;
```
