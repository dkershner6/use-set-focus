import React, { useRef } from 'react';

/**
 * This hook allows for very easy focusing on an element through some other action on the page.
 */
const useSetFocus = <T extends HTMLElement>(): [
    React.MutableRefObject<T>,
    () => void
] => {
    const htmlElementRef = useRef<T>(null);
    const setFocus = (): void => {
        htmlElementRef.current && htmlElementRef.current.focus();
    };

    return [htmlElementRef, setFocus];
};

export default useSetFocus;
