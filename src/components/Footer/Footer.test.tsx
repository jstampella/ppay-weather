import { render, screen } from '@testing-library/react';
import Footer from './Footer';
test('Should display error message on invalid email', async () => {
	render(<Footer />);
	const footer = screen.queryByText(/Development/i);

	expect(footer).not.toBeInTheDocument();
});
