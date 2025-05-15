import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';

const mockProject = {
  title: 'Test Project',
  description: 'This is a test project.',
  image: '/Photos/test.png',
  link: 'https://example.com'
};

test('renders ProjectCard with correct content', () => {
  render(<ProjectCard {...mockProject} />);
  expect(screen.getByText('Test Project')).toBeInTheDocument();
  expect(screen.getByText('This is a test project.')).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /test project/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /view project/i })).toHaveAttribute('href', 'https://example.com');
}); 