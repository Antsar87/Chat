import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PokeInfo = (props) => {
  console.log(props);

  return (
    <div className={props.info.types[0].type.name}>
      <Head>
        <title>{props.info.name}</title>
      </Head>

      <Link href="/">
        <a>Home</a>
      </Link>
      <p>{props.info.name}</p>
      <Image
        width={100}
        height={100}
        src={props.info.sprites.front_shiny}
        alt="pokemon"
      />
      <ul>
        {props.info.moves.map((item, idx) => (
          <li key={idx}>{item.move.name}</li>
        ))}
      </ul>
    </div>
  );
};

PokeInfo.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const { id } = query;
  const fetching = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const json = await fetching.json();
  return { info: json };
};

export default PokeInfo;
