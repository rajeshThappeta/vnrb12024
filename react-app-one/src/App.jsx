import First from './components/first/First';
import { FcBusinessman } from "react-icons/fc";
import './App.css';
import img1 from './assets/1.jpg';
import svgImg from './assets/3.svg';
import A from './components/first/A';
import Products from './components/products/Products';
import UserInteractionDemo from './components/user-interaction-demo/UserInteractionDemo';
import StateChangeDemo from './components/user-interaction-demo/StateChangeDemo';

function App() {
  //business logic
  //return react element
  return (
    <div>
      <StateChangeDemo />
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
