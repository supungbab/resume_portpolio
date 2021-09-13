export default function Project(){
    this.state = {
        data:{}
    }
    this.setState = (data) => {
        this.state.data = data
        return this.render();
    }
    this.render = ()=>{
        console.log(this.state.data)
        return `
        <div class="project">
            <div class="projectIntro">
                <h1>${this.state.data["data"][0].name}</h1>
                <h3>${this.state.data["data"][0].title}</h3>
                </br>
                </br>
                <h2>${this.state.data["data"][0].info}</h2>
            </div>
            <div class="container">
                <ul class="slider-wrapper">
                    ${this.state.data["data"].map((data,index)=>{
                        return `
                        <li class="slide ${index==0?"img-sel":""}" select="${data.name}" data-slide="${index}" onclick="change('${data.name}','${data.image}','${data.title}','${data.info}');">
                            <img class="slide-image" src="${data.image}" />
                            <div class="slide-div">
                                ${data.name}</br>
                                ${data.title}
                            </div>
                        </li>
                        `
                    }).join('')}
                </ul>
            </div>
        </div>
        `
    }
}
/*
<li class="slide">
    <img class="slide-image" src="./assets/img/test_img.png" />
    <div class="slide-div">
        TodayMoon</br>
        오늘의 달 모양 사이트
    </div>
</li>
*/