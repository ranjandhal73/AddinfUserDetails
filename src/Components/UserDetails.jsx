import { useState } from "react";
import CustomPopup from "./CustomPopup";


function UserDetails(props) {
const [user, setUser] = useState('');
const [age, setAge] = useState('');
const [collegeName, setcollegeName] = useState('');
const [showEmptyFieldPopup, setShowEmptyFieldPopup] = useState(false);
const [showNegativeAgePopup, setShowNegativeAgePopup] = useState(false);

const userHandler = (e) =>{
    setUser(e.target.value)
}

const ageHandler = (e) =>{
    setAge(e.target.value)
}

const collegeNameHandler = (e) =>{
    setcollegeName(e.target.value)
}

const formHandler =(e) =>{
    e.preventDefault();
    const userData = {
      user: user, 
      age: age,
      collegeName: collegeName,
      id: Math.random()};
    if(user.trim() === "" || age === "" || collegeName === ""){
      setShowEmptyFieldPopup(true)
    }else if( age<0){
      setShowNegativeAgePopup(true)
    }else{
      props.onSubmitUser(userData)
    }
    setUser('');
    setAge('');
    setcollegeName('');
};

const closeEmptyFieldHandler = () =>{
  setShowEmptyFieldPopup(false)
}

const closeNeagtiveValueHandler = () =>{
  setShowNegativeAgePopup(false)
}
  return (
    <>
      <form onSubmit={formHandler}>
        <label
        className="block text-black font-bold"
        >Username</label>
        <input 
        className="border border-black w-full"
        onChange={userHandler}
        value={user}
        type="text" />

        <label
        className="block font-bold"
        >Age(Years)</label>
        <input 
        className="border border-black w-full" 
        onChange={ageHandler}
        value={age}
        type="number" />

        <label
        className="block font-bold"
        >College Name</label>
        <input 
        className="border border-black w-full" 
        onChange={collegeNameHandler}
        value={collegeName}
        type="text" />

        <button 
        className="px-2 py-1 bg-purple-800 rounded mt-2 text-white"
        type="submit"
        >Add User</button>
      </form>

      {showEmptyFieldPopup &&
        <CustomPopup 
        message="User or age field is empty. Please fill out all fields."
        onClose={closeEmptyFieldHandler}
        />
      }

      {showNegativeAgePopup && 
        <CustomPopup 
        message="Please Enter a Valid age (>0)"
        onClose={closeNeagtiveValueHandler}
        />
      }
    </>
  );
}

export default UserDetails;
