import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { gifs, handleSearch, handleTermClicked, previousTerms } = useGifs();

  return (
    <>
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el Gif perfecto"
      />

      <SearchBar placeholder="Busca lo que quieras" onQuery={handleSearch} />

      <PreviousSearches
        searches={previousTerms}
        onLabelCLicked={handleTermClicked}
      />

      <GifList gifs={gifs} />
    </>
  );
};
