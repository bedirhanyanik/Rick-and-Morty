import { fetchCharacters } from '../lib/api';
import FilterSection from './FilterSection';
import CharacterCard from './CharacterCard';

type Props = {
  searchParams?: {
    status?: string;
    gender?: string;
  };
}

export default async function CharacterList({ searchParams }: Props) {
  const { results } = await fetchCharacters(searchParams || {});

  return (
    <div>
      <FilterSection />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {results.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}
