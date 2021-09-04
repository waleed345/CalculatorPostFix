import { render, screen } from '@testing-library/react';
import Calculator from './Components/Calculator';
import { postfixExpression } from './Utils/Helper';

// Test the calculator Answer field
test('Renders the calculator layout', async () => {
  render(<Calculator />);
  const answerField = await screen.findByTestId('answer-field');
  expect(answerField).toBeInTheDocument()
});

// Test the Calculator Grid
test('Renders the calculator layout', async () => {
  render(<Calculator />);
  const calculatorGrid = await screen.findByTestId('calculator-grid');
  expect(calculatorGrid.children.length).toEqual(20)
});

// Test the postFix function
describe("Test the postFix function",()=>{
  let infixExpression = '(5+7)*(6-2)';

  test('passing the infix expression and getting the postfix expression',()=>{
    expect(postfixExpression(infixExpression)).toEqual('5 7 + 6 2 - *')
  })
})