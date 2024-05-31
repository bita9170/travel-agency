import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import router, { NextRouter } from 'next/router';

interface SearchClientProps {
  router: NextRouter | undefined;

}

const SearchClient = dynamic(() => import('@/components/header/SearchClient'), {
  ssr: false,
});

const Search = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      {isClient && <SearchClient
        router={router}/>}

    </div>
  );
};

export default Search;
