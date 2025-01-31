import { useSelector } from "react-redux";

const Sidebar = () => {

const isMenuOpen = useSelector((store)=> store.app.isMenuOpen)

// Early return
if(!isMenuOpen) return null;


  return (
    <div className="p-5 shadow-lg w-48 ">
      <h1 className="font-bold py-5">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="py-5 font-bold">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
