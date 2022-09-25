import PropTypes from 'prop-types';
import { Friend } from './friend/friend';
import { List } from './friends.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(item => {
        return <Friend key={item.id} item={item} />;
      })}
    </List>
  );
};

FriendList.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
