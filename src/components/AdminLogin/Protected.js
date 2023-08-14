import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Protected = (props) => {
  const { Comp } = props;
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem("loggedIn");
    if (!login) {
      navigate("/");
    }
  });
  return (
    <>
      <Comp />
    </>
  );
};
export default Protected;
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Protected = (props) => {
//   const { Comp, isLoggedIn } = props;
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!isLoggedIn) {
//       navigate("/");
//     }
//   }, [isLoggedIn, navigate]);

//   return <>{isLoggedIn && <Comp />}</>;
// };

// export default Protected;