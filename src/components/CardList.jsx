import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => (
        <Card id={user.id} name={user.name} email={user.email} key={user.id} />
      ))}
    </div>
  );
};

export default CardList;
