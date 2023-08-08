import React, { useState } from "react";
import "./Header.style.css";

import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";

const Header: React.FC = () => {
  const [login, setLogin] = useState<boolean>(false);

  return (
    <div className="Header">
      {login ? (
        <AiOutlineLogout onClick={() => setLogin(!login)} />
      ) : (
        <AiOutlineLogin onClick={() => setLogin(!login)} />
      )}
    </div>
  );
};

export default Header;
