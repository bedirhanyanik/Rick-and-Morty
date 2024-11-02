import { Character } from '../types';
import Image from 'next/image';

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700">
      <div className="relative h-48 w-full">
        <Image
          src={character.image}
          alt={character.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-purple-400">
          {character.name}
        </h2>
        <div className="space-y-1">
          <p className="text-sm text-gray-300">
            <span className="font-medium">Status:</span>{' '}
            <span className={`capitalize ${
              character.status === 'Alive' ? 'text-green-400' :
              character.status === 'Dead' ? 'text-red-400' :
              'text-gray-400'
            }`}>
              {character.status}
            </span>
          </p>
          <p className="text-sm text-gray-300">
            <span className="font-medium">Type:</span> {character.species}
          </p>
          <p className="text-sm text-gray-300">
            <span className="font-medium">Gender:</span> {character.gender}
          </p>
          <p className="text-sm text-gray-300">
            <span className="font-medium">Location:</span> {character.location.name}
          </p>
        </div>
      </div>
    </div>
  );
}