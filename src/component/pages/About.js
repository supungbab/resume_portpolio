export default function About(){
    this.state = {
        data:{
        }
    }
    this.setState = (data) => {
        this.state.data = data
        return this.render();
    }
    this.render = ()=>{
        console.log(this.state.data)
        return `
        <div class="about">
            <div class="intro">
                <div>
                    <h2>Introduce</h2>
                </div>
                <div class="card_title">
                    <p>지원해 보기까지 6년이 걸린 신입 웹 프론트엔드 개발자 경명호 입니다.</p>
                </div>
                <div class="card_content">
                    <p>
                        안녕하세요. 지원해 보기까지 6년이 걸린 신입 웹 프론트엔드 개발자 경명호 입니다.</br>
                        6년 전, TV 매체를 통해 핸드스튜디오를 처음 알게 되었습니다.</br>
                        그 후 핸드스튜디오에 대해 알아보게 되었고, 어린 나이의 개발자라는 꿈을 가질 수 있었습니다.</br>
                        아직은 부족한 점이 많지만 핸드스튜디오에서 보고 배우며 전문가로 거듭나고 싶습니다.
                    </p>
                </div>
                <div class="profile">
                    <p><span>Name: </span><span>경명호</span></p>
                    <p><span>Career: </span><span>${this.state.data.career}</span></p>
                    <p><span>Birth: </span><span>${this.state.data.birth}</span></p>
                    <p><span>Phone: </span><span>${this.state.data.phone}</span></p>
                    <p><span>E-mail: </span><span>${this.state.data.email}</span></p>
                    <p><span>GitHub: </span><span>${this.state.data.github}</span></p>
                </div>
            </div>
            <div class="core">
                ${this.state.data.core.map((node, index)=>{
                    return `
                    <p>
                        <img src="${this.state.data.img[index]}" /></br>
                        ${node}
                    </p>
                    `
                }).join('')}
            </div>
        </div>
        `
    }
}

/*
<div class="about">
    <div class="intro">
        <div>
            <h2>Introduce</h2>
        </div>
        <div class="card_title">
            <p>지원해 보기까지 6년이 걸린 신입 웹 프론트엔드 개발자 경명호 입니다.</p>
        </div>
        <div class="card_content">
            <p>
                안녕하세요. 지원해 보기까지 6년이 걸린 신입 웹 프론트엔드 개발자 경명호 입니다.
                6년 전, TV 매체를 통해 핸드스튜디오를 처음 알게 되었습니다.
                핸드스튜디오로 인해 개발자를 지망하게 되었습니다.
                아직은 부족한 점이 많지만 핸드스튜디오를 통해 보고 배우며 전문가로 거듭나고 싶습니다.
            </p>
        </div>
        <div class="profile">
            <p><span>Name: </span><span>경명호</span></p>
            <p><span>Career: </span><span>Career</span></p>
            <p><span>Birth: </span><span>Birth</span></p>
            <p><span>Phone: </span><span>Phone</span></p>
            <p><span>E-mail: </span><span>E-mail</span></p>
            <p><span>GitHub: </span><span>GitHub</span></p>
        </div>
    </div>
    <div class="core">
        <p>
            <img src="./assets/img/bnr-js.jpg" />
            Vanilla JS를 이용해 선언형 프로그래밍과 컴포넌트 형식 구현 가능.
        </p>
    </div>
</div>
*/