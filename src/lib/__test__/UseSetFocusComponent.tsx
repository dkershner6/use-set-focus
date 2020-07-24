import React, { ReactElement, useState } from 'react';
import useSetFocus from '..';

const UseSetFocusComponent = (): ReactElement => {
    const [value, setValue] = useState('');
    const [inputRef, setInputFocus] = useSetFocus<HTMLInputElement>();

    return (
        <>
            <div>
                <button onClick={setInputFocus} data-testid="TestButton">
                    Click to Focus on Input
                </button>
            </div>
            <div style={{ marginTop: '2rem' }}>
                <input
                    ref={inputRef}
                    placeholder="Will focus here"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    data-testid="TestInput"
                />
            </div>
        </>
    );
};

export default UseSetFocusComponent;
