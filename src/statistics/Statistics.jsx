import css from './Statistics.module.css';
import PropTypes from 'prop-types';
export const Statistics = ({stats}) => {
  return (
    <section className={css.statix}>
      <h2 className={css.title}>Upload stats</h2>
      <ul className={css.statlist}>
        {stats.map (stat => {
          let colorRandom = getRandomColor ();
          return (
            <li
              key={stat.id}
              className={css.item}
              style={{backgroundColor: `${colorRandom}`}}
            >
              <span className={css.labels}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>

            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
};

function getRandomColor () {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor (Math.random () * 16)];
  }
  return color;
}
