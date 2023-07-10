import Sidebar from "./Sidebar";
import '../index.css'


function Layout({ children }) {
  return (
    <div className="bg-green-900 w-screen h-screen flex">

      <Sidebar />
      <div className="bg-white flex-grow mt-1 mr-2 mb-2 rounded-lg p-4"> {children}</div>
    </div>

  );
}

export default Layout;
