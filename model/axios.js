import { urlDiplome } from "../libs/config.js";
import { urlCompetence } from "../libs/config.js";

class Axios {
    async getDiplomes() {
        try {
            let res = await axios.get(urlDiplome);
            return res.data;
        } catch (e) {
            throw new Error("problème");
        }
    }

    async getDiplomeById(id) {
        try {
            let res = await axios.get(urlDiplome + "/" + id);
            return res.data;
        } catch (e) {
            throw new Error("problème");
        }
    }

    async getCompetences() {
        try {
            let res = await axios.get(urlCompetence);
            return res.data;
        } catch (e) {
            throw new Error("problème");
        }
    }

    async getCompetenceById(id) {
        try {
            let res = await axios.get(urlCompetence + "/" + id);
            return res.data;
        } catch (e) {
            throw new Error("problème");
        }
    }
}

export default Axios