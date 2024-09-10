
import './App.css';

import EffectDemo from './components/EffectDemo';
import Posts from './components/Posts';
import ManageTasks from './components/tasks-demo/ManageTasks';
import Test1 from './components/Test1';

function App() {
  //business logic
  //return react element
  return (
    <div className='container text-center'>
      <ManageTasks />
      {/* nest component Products */}
      {/* <Products /> */}

      {/*  write comment here*/}
      {/* <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" width="500px" alt="" />
      <img src={img1} width="5000px" alt="" />
      <img src={svgImg} width="5000pc" alt="" /> */}
      {/* <FcBusinessman className='icon' /> */}
      {/* nest First component */}
      {/* <First /> */}
     
    </div>
  );
}

export default App;
