import Axios from "../model/axios.js";

class Competences {

    _axios;
    _carEl;

    constructor() {
        this._axios = new Axios;
        this._carEl = document.getElementById("carousselList");
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
            const div = document.createElement("div");
            div.classList.add("caroussel-item", "active");
            const img = document.createElement("img");
            img.src = "./pics/" + i.image;
            img.classList.add("d-block", "w-100");
            const divCont = document.createElement("div");
            divCont.classList.add("container", "d-flex", "justify-content-center", "align-content-center");
            const divRow = document.createElement("div");
            divRow.classList.add("row");
            const h2 = document.createElement("h2");
            h2.innerText = i.titre;
            const p = document.createElement("p");
            p.innerText = i.description;
            const a = document.createElement("a");
            a.innerText = i.titre;
            a.setAttribute("href", i.lien);
            divRow.appendChild(h2);
            divRow.appendChild(p);
            divRow.appendChild(a);
            divCont.appendChild(divRow);
            div.appendChild(img);
            div.appendChild(divCont);
            this._carEl.appendChild(div);
        }
    }
}

export default Competences;