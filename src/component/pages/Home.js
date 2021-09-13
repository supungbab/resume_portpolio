export default function Home(){
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
        <div class="home">
            <div class="background-video-container">
                    <video class="background-video" autoplay="" muted="" playsinline="" loop="" src="https://demo.cocobasic.com/volos-wp/demo-2/wp-content/uploads/2019/12/video.mp4"></video>
            </div>
            <div class="homeText">
                <h1 class="motionh1">경명호 웹 이력서 입니다.</h1>
            </div>
        </div>
        `
    }
}