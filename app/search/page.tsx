import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';

const SearchResultsPage = () => {
  const router = useRouter();
  const { query, page = 1, sort = 'relevance' } = router.query;

  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(Number(page));
  const [totalPages, setTotalPages] = useState(1);
  const [selectedSort, setSelectedSort] = useState(sort);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      fetchResults();
    }
  }, [query, currentPage, selectedSort]);

  const fetchResults = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/search', {
        params: {
          query,
          page: currentPage,
          sort: selectedSort,
        },
      });
      setResults(response.data.results);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching search results', error);
    }
    setLoading(false);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    router.push({
      pathname: '/search',
      query: { ...router.query, page },
    }, undefined, { scroll: false });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sort = e.target.value;
    setSelectedSort(sort);
    setCurrentPage(1); // Reset to first page on sort change
    router.push({
      pathname: '/search',
      query: { ...router.query, sort, page: 1 },
    }, undefined, { scroll: false });
  };

  return (
    <div>
      <header>
        <h1>Search Results for "{query}"</h1>
        {loading ? <p>Loading...</p> : <p>{results.length} results found</p>}
        <div>
          <label>
            Sort by:
            <select value={selectedSort} onChange={handleSortChange}>
              <option value="relevance">Relevance</option>
              <option value="date">Date</option>
            </select>
          </label>
        </div>
      </header>
      <ul>
        {results.map((result: { id: number, title: string, description: string, link: string }) => (
          <li key={result.id}>
            <h2>{result.title}</h2>
            <p>{result.description}</p>
            <Link href={result.link} target="_blank" rel="noopener noreferrer">{result.link}</Link>
          </li>
        ))}
      </ul>
      <footer>
        <nav>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              disabled={page === currentPage}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
        </nav>
      </footer>
    </div>
  );
};

export default SearchResultsPage;
