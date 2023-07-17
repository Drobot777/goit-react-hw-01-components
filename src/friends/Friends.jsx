import PropTypes from 'prop-types';
import css from './Friends.module.css';

export const FriendList = ({friends}) => {
  return (
    <ul className={css.friendlist}>
      {friends.map (({avatar, name, isOnline, id}) => {
        const statColor = isOnline ? '#8AC926' : '#FF595E';
        return (
          <li key={id} className={css.item}>
            <span
              className={css.status}
              style={{backgroundColor: `${statColor}`}}
            />
            <img
              className={css.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
