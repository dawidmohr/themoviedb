import { useState } from "react";

import { SearcherModel } from "../../models/searcherModel.model";
import { searchMovie } from '../../api/movie-searcher.api';

import PageHeader from "../../components/page-header/page-header.component";
import Input from "../../components/input/input.component";

const MovieSearcher = () => {
  const [formData, setFormData] = useState(new SearcherModel({}));
  const [searcherTimeout, setSearcherTimeout] = useState(null);
  const [moviesData, setMoviesData] = useState([]);

  return <>
    <div className="container">
      <div className="row mt-3">
        <div className="col">
          <PageHeader>Wyszukaj film</PageHeader>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <Input
            label="Wyszukiwarka filmów"
            value={formData.searcher}
            name="searcher"
            onChange={onChangeSearcher}
            placeholder="Wpisz tekst, aby wyszukać film..."
          />
          {moviesData.map((item) => (
            <div>{item.title}</div>
          ))}
        </div>
      </div>
    </div>
  </>

  /**
   * @param {String} field 
   * @param {String} value 
   */
  function onChangeSearcher(field, value) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    searchForMovies(value)
  }

  function searchForMovies() {
    if (searcherTimeout) {
      clearTimeout(searcherTimeout);
      setSearcherTimeout(null);
    }

    const timeout = setTimeout(() => {
      searchMovie(formData.searcher).then((data) => {
        setSearcherTimeout(null);
        setMoviesData(data?.results || [])
      });
    }, 600);

    setSearcherTimeout(timeout);
  }
}

export default MovieSearcher;
