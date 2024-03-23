import { useState } from "react";
import CustomPopup from "./CustomPopup";


function UserDetails(props) {
const [user, setUser] = useState('');
const [age, setAge] = useState('');
const [showEmptyFieldPopup, setShowEmptyFieldPopup] = useState(false);
const [showNegativeAgePopup, setShowNegativeAgePopup] = useState(false);

const userHandler = (e) =>{
    e.preventDefault();
    setUser(e.target.value)
}

const ageHandler = (e) =>{
    e.preventDefault();
    setAge(e.target.value)
}

const formHandler =(e) =>{
    e.preventDefault();
    const userData = {
      user: user, 
      age: age, 
      id: Math.random()};
    if(user.trim() === "" || age === ""){
      setShowEmptyFieldPopup(true)
    }else if( age<0){
      setShowNegativeAgePopup(true)
    }else{
      props.onSubmitUser(userData)
    }
    setUser('');
    setAge('');
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

        <button 
        className="px-2 py-1 bg-blue-800 rounded mt-2 text-white"
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
