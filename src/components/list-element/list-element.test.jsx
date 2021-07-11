import { render, screen } from '@testing-library/react';
import { build, fake } from '@jackfranklin/test-data-bot'

import ListElement from './list-element.component';

const buildFakeName = build({
    fields: {
        elementText: fake(f => f.lorem.word()),
    },
});

test('renders header with text', () => {
    const { elementText } = buildFakeName();

    render(<ListElement>{elementText}</ListElement >);

    const listElement = screen.getByText(elementText);

    expect(listElement).toBeInTheDocument();
});