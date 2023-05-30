import Axios from "../model/axios.js";

class Diplomes {

    _axios;
    _rowEl;
    _modalEl;

    constructor() {
        this._axios = new Axios;
        this._rowEl = document.getElementById("rowList");
        this._modalEl = document.getElementById("modalParent");
    }

    async getDiplomes() {
        try {
            let diplomes = await this._axios.getDiplomes();
            this.htmlConstruct(diplomes);
        } catch (e) {
            throw e.error;
        }
    }

    async getDiplomeById(id) {
        try {
            let diplome = await this._axios.getDiplomeById(id);
            return diplome;
        } catch (e) {
            throw new e.error;
        }
    }

    htmlConstruct(value) {
        this._rowEl
        this.removeChild(this._rowEl);
        for (let i of value) {
            const colEl = document.createElement('div');
            colEl.classList.add('col-sm-4');
            const card = document.createElement('div');
            card.classList.add('card');
            card.classList.add('m-2');
            card.classList.add('shadow-lg');
            const img = document.createElement('img');
            img.classList.add('card-img-top');
            const body = document.createElement('div');
            body.classList.add("card-body");
            const heading = document.createElement('h5');
            heading.classList.add('card-title');
            const btn = document.createElement('button');
            btn.classList.add('btn');
            btn.classList.add('btn-info')
            btn.addEventListener("click", (evt) => {
                this.htmlModal(i.id);
            })
            img.src = "./pics/" + i.path;
            heading.innerText = i.langages;
            btn.innerText = "lire plus"
            this._rowEl.appendChild(colEl);
            colEl.appendChild(card);
            card.appendChild(img);
            card.appendChild(body);
            body.appendChild(heading);
            body.appendChild(btn);
        }
    }

    async htmlModal(id) {
        //async - call beer by id
        let dip = await this.getDiplomeById(id);
        console.log(dip);
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
                    <img src="./pics/${dip.path}">
                </div>
                <div>
                    <h2 class="fs-1 my-2 mx-1">${dip.ecoles}</h2>
                    <h5 class="fst-italic my-2 mx-1">${dip.langages}</h5>
                    <p class="my-2 mx-1">${dip.description}</p>
                    <h5 class="fst-italic my-2 mx-1">${dip.date}</h5>
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

export default Diplomes;