import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {

const dispatch = useDispatch()
const  toggleMenuHandler = () =>{
  dispatch(toggleMenu())
}

  return (
    <div className="grid grid-flow-col shadow-lg p-4 m-2">
      <div className="flex col-span-1">
        <img
        onClick={()=>toggleMenuHandler()}
          alt="menu"
          className="h-10 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkLtqymx--PGZ93MqKaIBd9T8sOOu21e1kA&s"
        />
        <img
          alt="logo"
          className="h-14 mx-4"
          src="https://1000marcas.net/wp-content/uploads/2020/02/YouTube-logo.png"
        />
      </div>
      <div className="col-span-10 text-center">
        <input   className="w-1/2 border border-gray-500 rounded-l-full p-2"  type="text"/>
        <button className="border border-gray-400  rounded-r-full p-2">Search</button>
      </div>
      <div className="col-span-1">
        <img
          alt="user"
          className="h-11"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY8RpSsXBforfK1AMh8bWlVR2G7aigYoVMTg&s"
        />
      </div>
    </div>
  );
};

export default Head;
