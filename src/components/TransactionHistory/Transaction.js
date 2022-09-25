import { Td } from './TransactionHistory.styled';

export const Transaction = ({ type, amount, currency }) => {
  return (
    <>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </>
  );
};
