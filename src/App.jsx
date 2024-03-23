import DisplayUser from "./Components/DisplayUser";
import UserDetails from "./Components/UserDetails";
import { useState } from "react";

function App() {
  const [isSumbit, setIsSubmit] = useState([]);

  const submitUserHandler = (userData) => {
    setIsSubmit((prevUser)=> {
     return [userData, ...prevUser]
    });
  };
  return (
    <>
      <div className="bg-gray-500 min-h-screen flex items-center pt-10 flex-col">
        <div className="bg-white rounded-lg p-8 w-2/5">
          <UserDetails onSubmitUser={submitUserHandler} />
        </div>
        <DisplayUser usersDetail={isSumbit} />
      </div>
    </>
  );
}

export default App;
