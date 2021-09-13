import { circle } from '../../utils/circle.js'

export default function Skill(){
    this.state = {
        data:{}
    }
    this.setState = (data) => {
        this.state.data = data
        return this.render();
    }
    this.render = ()=>{
        console.log(this.state.data)
        const types = ["Language","Framework","Database","Cloud","Development Tool","ETC"]

        return `
        <div class="skill">
            ${types.map((type)=>{
                return `
                <h1 class="skill-type">${type}</h1>
                <div class="skill-wrap">
                    ${this.state.data[type].name.map((name,index)=>{
                        //console.log(name)
                        return `
                        <div class="canvas-wrap">
                            <div class="canvas"><i class="fas fa-star"></i></div>
                            <span class="procent">${this.state.data[type].rating[index]}</span>
                            <span class="skill_name"><h3>${name}</h3></span>
                        </div>
                        `
                    }).join('')}
                </div>
                `
            }).join('')}
        </div>
        `
    }
}

