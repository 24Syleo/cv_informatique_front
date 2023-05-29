import Axios from "../model/axios.js";

class Competences {

    _axios;
    _rowEl;
    _modalEl;

    constructor() {
        this._axios = new Axios;
        this._rowEl = document.getElementById("rowImage");
        this._modalEl = document.getElementById("modalImage");
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
        this.removeChild(this._rowEl);
        for (let i of value) {
            console.log(i);
            const div = document.createElement("div");
            div.classList.add("col-sm-4", "position-relative", "my-1");
            const divImg = document.createElement("div");
            divImg.classList.add("image-container");
            const img = document.createElement("img");
            img.src = "./pics/" + i.image;
            img.classList.add("grayscale-image", "img-fluid", "w-100", "rounded-5");
            divImg.addEventListener("click", (evt) => {
                this.htmlModal(i.id);
            })
            const p = document.createElement("p");
            p.classList.add("position-absolute", "top-0", "start-50", "translate-middle-x", "text-primary", "fw-bold", "fst-italic", "text-image");
            p.innerText = i.titre;
            divImg.appendChild(img);
            divImg.appendChild(p);
            div.appendChild(divImg);
            this._rowEl.appendChild(div);
        }
    }

    async htmlModal(id) {
        //async - call beer by id
        let comp = await this.getCompetenceById(id);
        console.log(comp);
        //display grid of modal
        this._modalEl.style.display = "grid";
        this.removeChild(this._modalEl);
        //create button close
        const closeBtn = document.createElement('button');
        closeBtn.classList.add('btn');
        closeBtn.classList.add('btn-danger');
        closeBtn.classList.add('btnClose');
        closeBtn.innerText = 'X';
        this._modalEl.innerHTML =
            `<div class="image">
                    <img src="./pics/${comp.image}">
                </div>
                <div>
                    <h2 class="fs-1 my-2 mx-1">${comp.titre}</h2>
                    <a href="${comp.lien}" class="fst-italic my-2 mx-1">${comp.lien}</a>
                    <p class="my-2 mx-1">${comp.description}</p>
                </div>`;
        this._modalEl.appendChild(closeBtn);
        closeBtn.addEventListener("click", (evt) => {
            this._modalEl.style.display = "none";
        })
    }

    removeChild(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
}

export default Competences;