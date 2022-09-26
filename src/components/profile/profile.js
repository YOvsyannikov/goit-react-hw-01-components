import {
  Card,
  CardContainer,
  CardInfo,
  Picture,
  Name,
  UserInfo,
  StatisticsBox,
  StatColums,
  StatisticNames,
  StatisticCount,
} from './profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({ user }) => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user;
  return (
    <Card>
      <CardContainer>
        <CardInfo>
          <Picture src={avatar} alt={username} />
          <Name>{username}</Name>
          <UserInfo>{tag}</UserInfo>
          <UserInfo>{location}</UserInfo>
        </CardInfo>
        <StatisticsBox>
          <StatColums>
            <StatisticNames>Followers</StatisticNames>
            <StatisticCount>{followers}</StatisticCount>
          </StatColums>
          <StatColums>
            <StatisticNames>Views</StatisticNames>
            <StatisticCount>{views}</StatisticCount>
          </StatColums>
          <StatColums>
            <StatisticNames>Likes</StatisticNames>
            <StatisticCount>{likes}</StatisticCount>
          </StatColums>
        </StatisticsBox>
      </CardContainer>
    </Card>
  );
};
Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
