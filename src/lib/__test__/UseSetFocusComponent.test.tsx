import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UseSetFocusComponent from './UseSetFocusComponent';

describe('useSetFocus', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Should render with the correct input and button', async () => {
        const { getByTestId } = render(<UseSetFocusComponent />);

        expect(getByTestId('TestInput')).toBeInTheDocument();
        expect(getByTestId('TestButton')).toBeInTheDocument();
    });

    it('Should focus the input after clicking the button', async () => {
        const { getByTestId } = render(<UseSetFocusComponent />);

        fireEvent.click(getByTestId('TestButton'));
        expect(document.activeElement).toBe(getByTestId('TestInput'));
    });
});
