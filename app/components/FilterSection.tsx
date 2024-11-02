'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function FilterSection() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const statuses = ['alive', 'dead', 'unknown'];
  const genders = ['female', 'male', 'genderless', 'unknown'];

  const handleFilterChange = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (params.has(type) && params.get(type) === value) {
      params.delete(type);
    } else {
      params.set(type, value);
    }
    
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mb-8 p-4 bg-gray-800 rounded-lg shadow-md border border-gray-700">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-200">Status</h3>
          <div className="flex flex-wrap gap-2">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => handleFilterChange('status', status)}
                className={`px-4 py-2 rounded-full text-sm ${
                  searchParams.get('status') === status
                    ? 'bg-purple-600 text-gray-200'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-200">Gender</h3>
          <div className="flex flex-wrap gap-2">
            {genders.map((gender) => (
              <button
                key={gender}
                onClick={() => handleFilterChange('gender', gender)}
                className={`px-4 py-2 rounded-full text-sm ${
                  searchParams.get('gender') === gender
                    ? 'bg-purple-600 text-gray-200'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {gender.charAt(0).toUpperCase() + gender.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}