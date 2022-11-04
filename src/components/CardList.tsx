import { Robot } from '../models/types';
import Card from './Card';

interface CardListProps {
  robots: Array<Robot>;
}

const CardList = ({ robots }: CardListProps): JSX.Element => {
  return (
    <div>
      {robots.map((user, i) => (
        <Card id={user.id} name={user.name} email={user.email} key={user.id} />
      ))}
    </div>
  );
};

export default CardList;
