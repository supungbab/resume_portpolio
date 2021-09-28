export default function Header({$app, initialState, onClick}){
    this.state = initialState;
    this.onClick = onClick;
    this.$target = document.createElement('header');
    this.$target.className = 'header side-bar';
    $app.appendChild(this.$target);

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        this.$target.innerHTML = `
        <ul class="nav">
            <li class="history" route="/"><i class="fa fa-home"></i></li>
            <li class="history" route="/about"><i class="far fa-user"></i></li>
            <li class="history" route="/skill"><i class="fas fa-bolt"></i></li>
            <li class="history" route="/project"><i class="fab fa-angellist"></i></li>
        </ul>
        `
        const $historys = document.querySelectorAll('.history')
        //console.log($historys)
        $historys.forEach((history)=>{
            //console.log(history.getAttribute("route"), this.state.route)
            history.className=history.getAttribute("route")===this.state.route?"history select":"history"
        })
    }
    this.$target.addEventListener('click',(e)=>{
        const $history = e.target.closest('.history');
        if($history){
            const pathName = $history.getAttribute("route")
            onClick($history.getAttribute("route"));
        }
    })
}