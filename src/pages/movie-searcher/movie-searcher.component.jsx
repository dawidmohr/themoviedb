import { useState } from 'react';

import { SearcherModel } from '../../models/searcherModel.model';
import { searchMovie } from '../../api/movie-searcher.api';

import PageHeader from '../../components/page-header/page-header.component';
import Input from '../../components/input/input.component';
import ListElement from '../../components/list-element/list-element.component';

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
            <ListElement key={item.id}>{item.title} <small className="text-muted">{item.original_title}</small></ListElement>
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

  function searchForMovies(value) {
    if (searcherTimeout) {
      clearTimeout(searcherTimeout);
      setSearcherTimeout(null);
    }

    if (value === '') {
      setMoviesData([]);

      return null;
    }

    const timeout = setTimeout(() => {
      searchMovie(value).then((data) => {
        setSearcherTimeout(null);
        setMoviesData(data?.results || [])
      });
    }, 600);

    setSearcherTimeout(timeout);
  }
}

export default MovieSearcher;
