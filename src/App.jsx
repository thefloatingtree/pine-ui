import NavbarMobile from "./stories/Navbar/NavBarMobile";
import NavBarTop from "./stories/Navbar/NavBarTop";
import LoadingBar from "./stories/LoadingBar/LoadingBar";
import Switch from "./stories/Switch/Switch";
function App() {
  return (
    <div>
      <NavBarTop></NavBarTop>
      <LoadingBar></LoadingBar>
      <Switch />
      <NavbarMobile></NavbarMobile>
    </div>
  );
}

export default App;
