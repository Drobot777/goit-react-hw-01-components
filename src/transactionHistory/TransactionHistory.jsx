import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
export const TransactionHistory = ({items}) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.textHead}>Type</th>
          <th className={css.textHead}>Amount</th>
          <th className={css.textHead}>Currency</th>
        </tr>
      </thead>
      {items.map (trans => {
        return (
          <tbody key={trans.id} className={css.tbody}>
            <tr className={css.stringTabl}>
              <td className={css.text}>{trans.type}</td>
              <td className={css.text}>{trans.amount}</td>
              <td className={css.text}>{trans.currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
