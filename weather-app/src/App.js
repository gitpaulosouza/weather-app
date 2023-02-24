function App() {
  const api = {
    key: "a7e1c95fe959748f1ca9aece59579049",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  return (
    <div className="app">
      <main>
        <div className="searchBox">
          <input
            type="text"
            className="searchBar"
            placeholder="Search..."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
