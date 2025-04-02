import Category from "./components/Category";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Myname from "./components/Myname";
import OnlineResta from "./components/OnlineResta";
import TopResta from "./components/TopResta";

function App() {
  return (
    <div className="App">
      <Header />
      <Category />
      <TopResta />
      <OnlineResta />
      <Footer />
      <Myname />
    </div>
  );
}

export default App;
