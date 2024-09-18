import { Link,Outlet } from "react-router-dom";

function Technologies() {
  return (
    <div>
     
      <div className=" py-2">
        <ul className="nav justify-content-center fs-4">
          <li className="nav-item">
            <Link className="nav-link text-warning" to="java">
              Java
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-warning " to="node">
              Node
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-warning" to="vue">
              Vue
            </Link>
          </li>
        </ul>

        {/* placeholder for selected component */}
        <Outlet />
      </div>
    </div>
  );
}

export default Technologies;
