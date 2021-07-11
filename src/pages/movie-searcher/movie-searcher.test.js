import { render, screen } from '@testing-library/react';
import MovieSearcher from './movie-searcher.component';

test('renders input', () => {
    render(<MovieSearcher />);
    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toHaveTextContent('');
});

test('renders header', () => {
    render(<MovieSearcher />);
    const headerElement = screen.getByRole('heading', { name: /wyszukiwarka filmów/i });

    expect(headerElement).toBeInTheDocument('');
});
