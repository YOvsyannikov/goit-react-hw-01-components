import PropTypes from 'prop-types';
import { Transaction } from './Transaction';
import { Table, Tr, Th, Tr2, Head, Body } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Head>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Head>
      <Body>
        {items.map(transaction => (
          <Tr2 key={transaction.id}>
            <Transaction
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          </Tr2>
        ))}
      </Body>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
