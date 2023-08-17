import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkUserLoggedIn = () => {
    const loggedIn =localStorage.getItem('loggedIn');
    if (!loggedIn || loggedIn === "undefined") {
      setIsLoggedIn(false);
      return navigate("/");
    }
    if(loggedIn){
      setIsLoggedIn(true);
      return navigate("/dashboard")
    }
  };
  useEffect(() => {
    checkUserLoggedIn();
  }, [isLoggedIn]);

  return <>{isLoggedIn ? props.children : null}</>;

};

export default Protected;
