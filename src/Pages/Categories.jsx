import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Categories = () => {
  const [tabIndex,setTabIndex] = useState(0);
  return (
    <div>
      <div  className="w-full bg-slate-100 my-6 rounded-xl">
        <h2 className="text-center py-6 font-bold text-3xl">Books Category</h2>
      </div>
      <div role="tablist" className="tabs tabs-lifted w-80 py-10 font-bold">
  <Link to={''} role="tab" onClick={()=> setTabIndex(0)} className={` ${tabIndex===0?'tab tab-active text-[#23BE0A] font-bold text-xl ':'tab text-xl'} `}>Technology</Link>
  <Link to={`fantasy`} role="tab" onClick={()=> setTabIndex(1)} className={` ${tabIndex===1?'tab-active tab text-[#23BE0A] font-bold text-xl ':'tab text-xl '}`}>Fantasy</Link>
  <Link to={'fiction'} role="tab" onClick={()=> setTabIndex(2)} className={` ${tabIndex===2?'tab-active tab text-[#23BE0A] font-bold text-xl ':'tab text-xl p-3 '}`}>Fiction</Link>
  
</div>

<Outlet></Outlet>
    </div>
  );
};

export default Categories;