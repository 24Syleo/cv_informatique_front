import Axios from "../model/axios.js";

class Competences {

    _axios;
    _rowEl;

    constructor() {
        this._axios = new Axios;
        this._rowEl = document.getElementById("rowImage");
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

    galerieConstruct(value) {
        this._rowEl;
        for (let i of value) {
            console.log(i);
            const div = document.createElement("div");
            div.classList.add("col-sm-4", "position-relative", "my-1");
            const divImg = document.createElement("div");
            divImg.classList.add("image-container");
            const img = document.createElement("img");
            img.src = "./pics/" + i.image;
            img.classList.add("grayscale-image", "img-fluid", "w-100", "rounded-5");
            const p = document.createElement("p");
            p.classList.add("position-absolute", "top-0", "start-50", "translate-middle-x", "text-primary", "fw-bold", "fst-italic", "text-image");
            p.innerText = i.titre;
            divImg.appendChild(img);
            divImg.appendChild(p);
            div.appendChild(divImg);
            this._rowEl.appendChild(div);
        }
    }
}

export default Competences;