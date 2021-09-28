import Header from "./component/Header.js";
import RouterView from "./component/RouterView.js"
import { request } from "./api.js"

export default function App({$app}){
    this.state = {
        route: "/"
    }
    const header = new Header({
        $app,
        onClick:(select)=>{
            //console.log(select)
            const data = request(select);
            //console.log(data)
            this.setState({
                ...this.state,
                route:select,
                data:data
            })
        }
    });

    const routerView = new RouterView({
        $app,
        initialState:this.state.route
    })

    this.setState = (nextState) => {
        this.state = nextState;
        header.setState(this.state)
        routerView.setState(this.state)
    }

    const init = async () => {
        this.setState({...this.state})
    }

    init();
}