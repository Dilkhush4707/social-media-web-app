import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/sidebar";
import Form from "./components/Createform";
import Createpost from "./components/createpost";
import Postlist from "./components/Postlist";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [tab ,settab]=useState("");
  return (
    <div className="app-containor">
      <Sidebar tab={tab }  settab={settab}/>
      <div className="contant">
        <Header />
        <Form />
        {tab==="Home"?(<Postlist />):(<Createpost />)}
        <Footer />
      </div>
    </div>
  );
}

export default App;
