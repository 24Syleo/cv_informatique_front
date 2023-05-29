import Diplomes from "../controller/Diplomes.js";
import Competences from "../controller/Competences.js";

const dip = new Diplomes();
let res = await dip.getDiplomes();

dip.htmlConstruct(res);

const comp = new Competences();
let rese = await comp.getCompetences();
comp.galerieConstruct(rese);