import './index.css';
import Menu1 from './Menu';
import Menu from './Component/Menu.jsx';
import Post from './Component/Post.jsx';
// import Work from './Work.jsx';
import Tmon from './Tmon.jsx';
import Benefit from './Benefit.jsx';
import Soc_data from './Soc.jsx';
// import Footer from './Footer.jsx';
// import Post from './Component/Post.txt';

function App() {
  return (<>
    <Menu1 />
    <Menu />
    <Post />
    {/* <Work /> */}
    <Soc_data />
    <Tmon />
    <Benefit />

    </>
    );}

export default App;