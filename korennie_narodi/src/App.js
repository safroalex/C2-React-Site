import Header from "./components/Header/header";
import Main from "./components/Main/main";
import Section1 from "./components/Sections/Section1/section1";
import Section2 from "./components/Sections/Section2/section2";
import Section3 from "./components/Sections/Section3/section3";


function App() {
  return (
    <div className="App">
      <div className="all-content">

        <Header />
        
        <Main />

        <Section1 />

        <Section2 />

        <Section3 />

      </div>
    </div>
  );
}

export default App;
