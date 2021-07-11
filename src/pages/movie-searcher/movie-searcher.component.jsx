import { useState } from "react";

import { SearcherModel } from "../../models/searcherModel.model";

import PageHeader from "../../components/page-header/page-header.component";
import Input from "../../components/input/input.component";

const MovieSearcher = () => {
  const [formData, setFormData] = useState(new SearcherModel({}));

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
  }
}

export default MovieSearcher;
