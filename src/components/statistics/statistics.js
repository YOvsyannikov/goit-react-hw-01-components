import PropTypes from 'prop-types';
import {
  Statistic,
  Title,
  StatisticList,
  StatisticItem,
  Lable,
  Percentage,
} from './statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Statistic>
      {title && <Title>{title}</Title>}
      <StatisticList>
        {stats.map(stat => (
          <StatisticItem key={stat.id}>
            <Lable>{stat.label}</Lable>
            <Percentage>{stat.percentage} %</Percentage>
          </StatisticItem>
        ))}
      </StatisticList>
    </Statistic>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
