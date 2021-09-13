import { historyRouterPush } from '../../router.js'

export default function RouterView({$app, initialState}){
    this.state = initialState;
    this.$target = document.createElement('div');
    this.$target.className = 'content';
    $app.appendChild(this.$target);

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }

    this.render = () =>{
        this.$target.innerHTML = historyRouterPush(this.state.route, this.state.data)
        if(this.state.route=="/project"){
            let target = document.querySelector('.slider-wrapper');
            let pivot = 0;
            let move = 100;
            let pivotNum = 0;
            target.addEventListener("click",(e)=>{
                const $slide = e.target.closest('.slide');
                if($slide){
                    if(pivot<$slide.dataset.slide){
                        
                        let $next = target.animate([
                            {transform: `translate(${pivotNum}px)`},
                            {transform: `translate(${pivotNum-move}px)`}
                        ], 250);
                        $next.addEventListener('finish', function() {
                            target.style.transform = `translate(${pivotNum-move}px)`;
                            pivotNum -= move
                        });
                        pivot = $slide.dataset.slide
                        //console.log("next pivot",pivotNum)
                    }else if(pivot>$slide.dataset.slide){
                        let $prev = target.animate([
                            {transform: `translate(${pivotNum}px)`},
                            {transform: `translate(${pivotNum+move}px)`}
                        ], 250);
                        $prev.addEventListener('finish', function() {
                            target.style.transform = `translate(${pivotNum+move}px)`;
                            pivotNum += move
                        });
                        pivot = $slide.dataset.slide
                        //console.log("prev pivot",pivotNum)
                    }
                }
            })

        }
    }
}