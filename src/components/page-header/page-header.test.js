import { render, screen } from '@testing-library/react';
import { build, fake } from '@jackfranklin/test-data-bot'

import PageHeader from './page-header.component';

const buildFakeName = build({
    fields: {
        headerText: fake(f => f.lorem.word()),
    },
});

test('renders header with text', () => {
    const { headerText } = buildFakeName();

    render(<PageHeader>{headerText}</PageHeader >);

    const headerElement = screen.getByRole('heading', { name: headerText });

    expect(headerElement).toBeInTheDocument();
});