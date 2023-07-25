import './App.css';
// import AdminLogin from './components/AdminLogin/AdminLogin';
// import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AdminRegistration from './components/AdminRegistar/AdminRegistration';
// import TestMaterial from './components/testmatirial';
import AdminDeshboard from './components/AdminDeshboard/AdminDeshboard';
// import { BrowserRouter , Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <AdminLogin/> */}
      <AdminRegistration />
      <AdminDeshboard />
      
      {/* Testing Material Design  */}
      {/* <TestMaterial/> */}
      
    </div>
  );
}

export default App;
