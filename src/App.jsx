import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import Renderprops from './components/Renderprops';
import LikeImageHoc from './components/LikeImageHOC';
import LikePostHoc from './components/LikepostHOC';
import HOC from './components/HOC';

const HocLikeImage = HOC(LikeImageHoc);
const HocLikePost = HOC(LikePostHoc);

function App() {
  return (
    <div>
      <div className='main'>
      <h1>Some Blog</h1>
        <br />
        <h3>With Render Props </h3>
        <Renderprops render={(increase,count)=>{
          return <LikeImage handleimgcount={increase} imagecount={count}/>
        }} />
        <Renderprops render={(increase,count)=>{
          return <LikePost handlepostcount={increase} postcount={count}/>
          }} />
    
            <h3>With HOC</h3>
            <HocLikeImage />
            <HocLikePost />
    </div>
     </div>
  );
}

export default App;