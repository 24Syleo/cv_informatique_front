import Axios from "../model/axios.js";

class Competences {

    _axios;
    _carEl;

    constructor() {
        this._axios = new Axios;
        this._carEl = document.getElementById("rowImage");
    }

    async getCompetences() {
        try {
            let competences = await this._axios.getCompetences();
            return competences;
        } catch (e) {
            throw e.error;
        }
    }

    async getCompetenceById(id) {
        try {
            let competence = await this._axios.getCompetenceById(id);
            return competence;
        } catch (e) {
            throw new e.error;
        }
    }

    carrousselConstruct(value) {
        this._carEl;
        for (let i of value) {
            console.log(i);

        }
    }
}

export default Competences;