import Home from './src/component/pages/Home.js'
import About from './src/component/pages/About.js';
import Skill from './src/component/pages/Skill.js';
import Project from './src/component/pages/Project.js';

const routes = {
    "/": new Home(),
    "/about": new About(),
    "/skill": new Skill(),
    "/project": new Project()
};

// set browser history
export const historyRouterPush = (pathName, data) => {
    return returnHTML(routes[pathName], data);
};
  
// render
const returnHTML = (route, data) => {
    //console.log(route.render())
    return route.setState(data);
};