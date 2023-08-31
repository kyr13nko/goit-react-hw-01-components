import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.FriendList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li className={css.item} key={id}>
            <span className={css.status}>{isOnline}</span>
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
