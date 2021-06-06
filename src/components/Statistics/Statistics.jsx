import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css'


const Statistics = ({title, stats}) => (
    <section className={style.statistics}>
        {title && <h2 className={style.title}>{title}</h2>}

        <ul className={style.stat_list}>
            {stats.map(({id, label, percentage}) => (
            <li className={style.item} key={id}>
                <span className={style.label}>{label}</span>
                <span className={style.percentage}>{percentage}%</span>
            </li>
            ))}
        </ul>
    </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
export default Statistics;