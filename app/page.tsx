import { Suspense } from 'react';
import CharacterList from './components/CharacterList';

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Home({ searchParams }: Props) {
  return (
    <main className="min-h-screen bg-gray-900 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-400">
          Rick and Morty Characters
        </h1>
        <Suspense fallback={<div className="text-gray-300">Loading...</div>}>
          <CharacterList searchParams={searchParams} />
        </Suspense>
      </div>
    </main>
  );
}