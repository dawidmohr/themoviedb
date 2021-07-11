import { useState } from "react";

import { SearcherModel } from "../../models/searcherModel.model";

import PageHeader from "../../components/page-header/page-header.component";

const MovieSearcher = () => {
  const [formData, setFormData] = useState(new SearcherModel({}));

  return <>
    <div className="container">
      <div className="row mt-3">
        <div className="col">
          <PageHeader>Wyszukiwarka filmów</PageHeader>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <input
            value={formData.searcher}
            name="searcher"
            onChange={onChangeSearcher}
          />
        </div>
      </div>
    </div>
  </>

  function onChangeSearcher(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
}

export default MovieSearcher;
