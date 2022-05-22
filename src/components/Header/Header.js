import "./header.sass";

//Icons
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";

function Navbar() {
  return (
    <header className="header">
      <button>
        <Icon path={mdiMenu} size={1.3} />
      </button>
      <p>MyTasks</p>
    </header>
  );
}

export default Navbar;
