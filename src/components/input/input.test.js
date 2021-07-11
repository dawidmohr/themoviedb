import { render, screen } from '@testing-library/react';
import { build, fake } from '@jackfranklin/test-data-bot'
import userEvent from '@testing-library/user-event';

import Input from './input.component';

const createInputProps = build({
    fields: {
        label: fake(f => f.lorem.word()),
        name: fake(f => f.lorem.word()),
        placeholder: fake(f => f.lorem.word()),
        value: fake(f => f.lorem.word()),
        onChange: jest.fn(),
    }
});

const generateWord = build({
    fields: {
        word: fake(f => f.lorem.word()),
    }
});

test('renders input', () => {
    const { label, name, placeholder, value, onChange } = createInputProps();

    render(<Input
        label={label}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />);

    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toHaveTextContent('');
});

test('renders input with properties', () => {
    const { label, name, placeholder, value, onChange } = createInputProps();

    render(<Input
        label={label}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />);

    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toHaveProperty('name');
    expect(inputElement).toHaveProperty('placeholder');
    expect(inputElement).toHaveProperty('value');
});


test('renders label with text', () => {
    const { label, name, placeholder, value, onChange } = createInputProps();

    render(<Input
        label={label}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />);

    const labelElement = screen.getByText(label);

    expect(labelElement).toBeInTheDocument();

});

test('handle onChange', () => {
    const { label, name, placeholder, value, onChange } = createInputProps();

    render(<Input
        label={label}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />);

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveTextContent('');
    const { word } = generateWord();
    userEvent.type(inputElement, word);
    expect(inputElement).toHaveValue(value + word);
    expect(onChange).toBeCalledTimes(word.length);
});