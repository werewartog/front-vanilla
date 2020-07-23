import {html} from 'lit-html';
import Home from './components/home'
import About from './components/about'
import './style.scss'
const App = () => html `<wc-app>
    ${Home}
    ${About}
<wc-app/>`

export default App;