const Filtradores = ({ 
  searchTerm, 
  setSearchTerm, 
  platform, 
  setPlatform,
  genre,
  setGenre
 }) => {
  const inputBase =
    "w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-shadow " +
    "placeholder-slate-400 outline-none transition " +
    "focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40";
  return (
    

    <div className="bg-slate-800 p-4 rounded-lg shadow-sm mb-6 flex flex-col sm:flex-row gap-4 border border-slate-700">

      <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-4">

        <div className="w-full">  
          <input 
            type="text" 
            placeholder="Buscar por nombre de juego..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:border-blue-500"
          />

        </div>

      <div className="w-full">

          <select 
            value={platform} 
            onChange={(e) => setPlatform(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full bg-white focus:outline-none focus:border-blue-500"
          >
            <option value="">Todas las consolas</option>
            <option value="PC">PC</option>
            <option value="PlayStation 5">PlayStation 5</option>
            <option value="Nintendo Switch">Nintendo Switch</option>
            <option value="Xbox Series X">Xbox Series X</option>
          </select>
      </div>

      <div className="w-full">
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="w-full rounded border border-gray-300 bg-white p-2"  
          
        >
        <option value="">
          Todos los generos
        </option>

        <option value="Terror">
          Terror
        </option>

        <option value="Hack and Slash">
          Hack and Slash
        </option>

        <option value="RPG / Sci-Fi">
          RPG
        </option>

        <option value="Acción / Aventura">
          Accion / Aventure
        </option>

        <option value="Plataformas">
          Plataformas
        </option>

        <option value="Mundo Abierto">
          Mundo Abierto
        </option>

        <option value="Metroidvania">
          Metroidvania
        </option>

        <option value="Shooter">
          Shooter
        </option>



        </select>


      </div>

      <div className="w-full">

        <button className="rounded bg-gray-700 px-4 py-2 text-white hover:bg-gray-600" onClick={() => {

          setSearchTerm("");
          setPlatform("");
          setGenre("");


         }}
        >
        X
        </button>


      </div>

    </div>
  </div>  

  );
};

export default Filtradores;