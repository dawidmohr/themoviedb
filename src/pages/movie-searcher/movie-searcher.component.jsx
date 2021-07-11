import { useState } from "react";

import { SearcherModel } from "../../models/searcherModel.model";

import PageHeader from "../../components/headings/page-header.component";

const MovieSearcher = () => {
    const [formData, setFormData] = useState(new SearcherModel({}));

    return <>
        <PageHeader>Wyszukiwarka filmów</PageHeader>
        <input
            value={formData.searcher}
            name="searcher"
            onChange={onChangeSearcher}
        />
    </>

    function onChangeSearcher(e) {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }
}

export default MovieSearcher;
