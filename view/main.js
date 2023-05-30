import Diplomes from "../controller/Diplomes.js";
import Competences from "../controller/Competences.js";
import Soft from "../controller/Soft.js";

const dip = new Diplomes();
let res = await dip.getDiplomes();

dip.htmlConstruct(res);

const comp = new Competences();
let rese = await comp.getCompetences();
comp.galerieConstruct(rese);