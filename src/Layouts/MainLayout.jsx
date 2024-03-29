import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";


const MainLayout = () => {
  return (
    <div>
    <div className="max-w-7xl mx-auto">
     <Navber></Navber>

      
<Outlet></Outlet>
</div>
<Footer></Footer>
      
    </div>
  );
};

export default MainLayout;