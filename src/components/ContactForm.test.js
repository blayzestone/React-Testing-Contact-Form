import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import ContactForm from './ContactForm';

test('renders without errors', () => {
  render(<ContactForm />);
});

test('form can be filled in and submitted', () => {
  // arrange
  const { getByLabelText, getByTestId, findByTestId } = render(<ContactForm />);
  const firstNameInput = getByLabelText(/first name*/i);
  const lastnameInput = getByLabelText(/last name*/i);
  const emailInput = getByLabelText(/email*/i);

  expect(firstNameInput).toBeInTheDocument();
  expect(lastnameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();

  fireEvent.change(firstNameInput, { target: { value: "Joel" }});
  fireEvent.change(lastnameInput, { target: { value: "john" }});
  fireEvent.change(emailInput, { target: { value: "jason@gmail.com" }});

  const submitButton = getByTestId('submit-button');
  
  fireEvent.click(submitButton);
  findByTestId(submitButton);
  setTimeout(() => {
    const formRes = getByTestId('form-response');
    expect(formRes).toBeInTheDocument();
  }, 1);
});
