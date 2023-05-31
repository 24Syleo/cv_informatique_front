import Axios from "../model/axios.js";

class Soft {

    _axios;
    _rowEl;

    constructor() {
        this._axios = new Axios;
        this._rowEl = document.getElementById("slickCaroussel");
    }

    async getSofts() {
        try {
            let soft = await this._axios.getSofts();
            this.htmlSlider(soft);
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

    htmlSlider(value) {
        this._rowEl

        for (let i of value) {
            const div = document.createElement('div');
            const divImg = document.createElement('div');
            divImg.classList.add('text-center');
            const img = document.createElement('img');
            img.classList.add("img-fluid", "img-thumbnail", "rounded-4", "shadow-lg");
            img.src = "./pics/" + i.image;
            const divDeux = document.createElement('div');
            const heading = document.createElement('h1');
            heading.classList.add("text-center", "fw-bold", "fs-1");
            heading.innerText = i.title;
            const p = document.createElement("p");
            p.classList.add("fw-400","fs-3");
            p.innerText = i.description
            this._rowEl.appendChild(div);
            div.appendChild(divImg);
            div.appendChild(divDeux);
            divImg.appendChild(img);
            divDeux.appendChild(heading);
            divDeux.appendChild(p);
        }
    }
}

export default Soft;