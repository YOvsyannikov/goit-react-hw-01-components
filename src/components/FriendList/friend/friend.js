import PropTypes from 'prop-types';
import { Img, Item, Marker, UserName } from '../friends.styled';

export const Friend = ({ item }) => {
  return (
    <Item>
      <Marker isOnline={item.isOnline}></Marker>
      <Img src={item.avatar} alt={item.name} width="48" />
      <UserName>{item.name}</UserName>
    </Item>
  );
};

Friend.protoTypes = {
  item: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
