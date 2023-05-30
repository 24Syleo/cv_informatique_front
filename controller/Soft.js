import Axios from "../model/axios.js";

class Soft {

    _axios;

    constructor() {
        this._axios = new Axios;
    }

    async getSofts() {
        try {
            let competences = await this._axios.getSofts();
            return competences;
        } catch (e) {
            throw e.error;
        }
    }

    async getSoftById(id) {
        try {
            let soft = await this._axios.getSoftById(id);
            return soft;
        } catch (e) {
            throw new e.error;
        }
    }
}

export default Soft;