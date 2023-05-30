import Diplomes from "../controller/Diplomes.js";
import Competences from "../controller/Competences.js";
import Soft from "../controller/Soft.js";

const dip = new Diplomes();
await dip.getDiplomes();

const comp = new Competences();
await comp.getCompetences();

const soft = new Soft();
await soft.getSofts();

let slider = tns({
    "container": "#slickCaroussel",
    "items": 1,
    "mouseDrag": true,
    "nav": false,
    "controlContainer": "#controls",
    "prevButton": ".previous",
    "nextButton": ".next"
});