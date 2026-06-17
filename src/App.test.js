// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NodeToken title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NodeToken/i);
    expect(titleElement).toBeInTheDocument();
});
