const Favoritos = ({ favorites, toggleFavorite }) => {
    return (
      <div className="bg-white p-5 rounded-lg shadow-sm border border-red-100 mb-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          Mis Favoritos
        </h2>
        
        {favorites.length === 0 ? (
          <p className="text-sm text-gray-500 italic">No tienes juegos favoritos aún.</p>
        ) : (
          <ul className="space-y-3">
            {favorites.map(game => (
              <li key={game.id} className="flex justify-between items-center border-b pb-2">
                 <div className="flex min-w-0 items-center gap-3">
                   <img
                     src={game.image}
                     alt={game.title}
                     className="h-16 w-12 flex-shrink-0 rounded object-cover"
                   />
                   <div className="min-w-0">
                     <p className="font-semibold text-sm line-clamp-1">{game.title}</p>
                     <p className="text-xs text-gray-500">{game.platform}</p>
                   </div>
                 </div>
                  
                <button 
                  onClick={() => toggleFavorite(game)}
                  className="text-xs text-red-500 hover:text-red-700 underline"
                >
                  Quitar
                </button>
              </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default Favoritos;