import PropTypes from 'prop-types';
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
Transaction.propTypes = {
  Transaction: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
