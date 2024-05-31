import { useState, useEffect, ChangeEvent } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";

interface SearchResult {
  _id: string;
  title: string;
}

const SearchResultsPage: NextPage = () => {
  const router = useRouter();
  const [results, setResults] = useState<SearchResult[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState("title");
  const [order, setOrder] = useState("asc");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const searchQuery = router.query.q;
        const page = router.query.page || 1;

        if (!searchQuery) return;

        const response = await fetch(
          `/api/search?q=${searchQuery}&page=${page}&sort=${sort}&order=${order}&filter=${filter}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch search results");
        }

        const data = await response.json();
        setResults(data.results);
        setTotalPages(data.totalPages);
        setCurrentPage(Number(page));
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [router.query.q, router.query.page, sort, order, filter]);

  const handlePageChange = (page: number) => {
    router.push({
      pathname: "/search",
      query: { ...router.query, page },
    });
  };

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value);
  };

  const handleOrderChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setOrder(event.target.value);
  };

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h1>Search Results</h1>
      <div>
        <label>
          Sort by:
          <select value={sort} onChange={handleSortChange}>
            <option value="title">Title</option>
            {/* my other sort options here */}
          </select>
        </label>
        <label>
          Order:
          <select value={order} onChange={handleOrderChange}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
        <label>
          Filter:
          <input type="text" value={filter} onChange={handleFilterChange} />
        </label>
      </div>
      {results.length > 0 ? (
        <>
          <ul>
            {results.map((result) => (
              <li key={result._id}>{result.title}</li>
            ))}
          </ul>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>
      {pages.map((page) => (
        <button
          key={page}
          disabled={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default SearchResultsPage;
