import { Link, useLocation } from "react-router-dom";

const Header = () => {
const location = useLocation()

  return (
    <header className=" flex flex-col ">
      <div className="bg-green-700 text-white p-3 my-3 rounded-3xl w-1/2 m-auto">
        <h1 className="text-2xl text-center font-bold uppercase">
          React 19 Playground
        </h1>
      </div>
      {location.pathname === "/" ? (
        ""
      ) : (
        <button className="bg-green-700 text-white px-5 py-2  rounded-3xl w-fit m-auto">
          <Link href="/">go back to homepage</Link>
        </button>
      )}
    </header>
  );
};
export default Header;
