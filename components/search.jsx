import { useContext } from 'react';
import { StoreContext } from '../pages/_app';

const Search = () => {
  const { state, dispatch } = useContext(StoreContext);

  const search = async (e) => {
    e.preventDefault();

    const fetching = await fetch('https://pokeapi.co/api/v2/pokemon?limit=900');
    const jso = await fetching.json();

    const fil = await jso.results.filter((poke) =>
      poke.name.includes(state.Search)
    );

    const pokeInfo = await Promise.all(
      fil.map(async (item) => {
        const data = await fetch(item.url);
        const jsonData = await data.json();
        return await jsonData;
      })
    );

    await dispatch({ type: 'Save', payload: pokeInfo });
    console.log(pokeInfo);
    console.log(state);
  };

  return (
    <form className="search" onSubmit={search}>
      <input
        onChange={(e) => dispatch({ type: 'Search', payload: e.target.value })}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Search;
