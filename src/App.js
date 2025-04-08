import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img
          src="https://cdn-icons-png.flaticon.com/512/201/201623.png"
          alt="Logo"
          className="logo"
        />
        <nav>
          <ul>
            <li>Início</li>
            <li>Pacotes</li>
            <li>Sobre</li>
            <li>Contato</li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h1>Explore o mundo com a Agência Pé na Estrada!</h1>
        <p>Os melhores pacotes para suas férias dos sonhos.</p>
      </section>

      <section className="packages">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Praia"
          />
          <h2>Praia dos Sonhos</h2>
          <p>7 dias com tudo incluso</p>
        </div>
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1"
            alt="Montanha"
          />
          <h2>Aventura nas Montanhas</h2>
          <p>Pacote para quem ama natureza</p>
        </div>
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1505765050516-f72dcac9c60b"
            alt="Cidade"
          />
          <h2>Tour pela Europa</h2>
          <p>Conheça as cidades mais incríveis</p>
          <img
           src="https://images.unsplash.com/photo-1543342386-f91f5b6d6302?auto=format&fit=crop&w=1350&q=80"
           alt="Tour pela Europa"
         />
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Agência Pé na Estrada. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
