import Image from 'next/image';
import Link from 'next/link';
import style from '../styles/card.module.scss';

const Card = (props) => {
  return (
    <Link href={`/pokeInfo/${props.name}`} passHref>
      <div className={`${style.card} ${props.types[0].type.name}`}>
        <Image
          src={props.sprites.front_default}
          alt={props.name}
          width={100}
          height={100}
        />

        <h3>{props.name}</h3>

        <ul>
          {props.types.map((item, idx) => (
            <li key={idx}>{item.type.name}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default Card;
