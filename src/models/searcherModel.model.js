export class SearcherModel {
    /**
     * @param {Object} searcherData
     * @param {String} searcherData.searcher
     */
    constructor({
        searcher = ''
    }) {
        this.searcher = searcher
    }
}