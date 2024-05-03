import './App.css';
import LikeImage from '../src/Components/LikeImage';
import LikePost from '../src/Components/LikePost';
import Renderprops from '../src/Components/Renderprops';
import LikeImageHoc from '../src/Components/LikeImageHoc';
import LikePostHoc from '../src/Components/LikePostHoc';
import HOC from '../src/Components/HOC';

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