import { useState, useEffect } from 'react';

const SearchUI = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (fetched) return;

    const timer = setTimeout(async () => {
      try {
        const req = await fetch(
          `https://dummyjson.com/products/search?q=${searchTerm}`
        );

        if (!req.ok) {
          throw new Error('network response was not ok');
        }

        const data = await req.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <div>
      <h1>här är min search komponent</h1>

      <input
        type="text"
        placeholder="sök här..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setFetched(false);
        }}
      />

      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {products.map((item) => (
          <li key={item.id} style={{ listStyle: 'none' }}>
            <div
              className="card"
              style={{ width: '18rem', border: '2px red solid' }}
            >
              <img src={item.images[1]} alt={item.title} width={100} />
              <div>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchUI;
