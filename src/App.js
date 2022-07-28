import Navbar from "./components/Navbar";
import Container from "./components/Container";
import "./styler.css"

function App() {
  return (
    <div >
        <Navbar/>
        <div className="container">
          <div className="text-center">
            <div className="containerr">
              <h3>Results</h3>
            </div>
          </div>
        <Container></Container> 
        </div>
    </div>
  );
}

export default App;
