
import TodoTable from './TodoTable';
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";




test('renders todotable', () => {
  const row = [
    {desc: 'Go to coffee', date: '24.01.2023'}
  ];
  render(<TodoTable todos={row} />);
  
  const table = screen.getByRole('table');

  
  expect(table).not.to.contain(/go to coffee/i);



});




