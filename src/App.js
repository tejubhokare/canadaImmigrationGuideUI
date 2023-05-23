// import Test from "./home";
// import Login from "./login";
// import Register from "./createNew";
// import Services from "./services";
// import CustReview from "./review";
// import { Country } from './Country';
import Practise from "./Practise";

function Tejaswi() {
  const name = "Tejaswi"
  const serviceNum = 3;
  const currentDate = new Date();
  const lastLoginDate = new Date("2023-05-02");
  const diff = currentDate - lastLoginDate;
  const numOfDays = Math.round(diff / (1000 * 60 * 60 * 24));

  return (
    <div>
      {/* <Test name={name} number={numOfDays} />
      <Login />
      <Register />
      <Services num={serviceNum} />
      <CustReview name={name} />
      <Country /> */}
      <Practise />

    </div>
  )
}

export default Tejaswi;


