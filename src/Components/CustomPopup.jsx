

function CustomPopup(props){
    return (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50" onClick={props.onClose}>
          <div className="bg-white shadow-lg text-center rounded-xl">
            <h1 className=" bg-red-700 p-2 text-2xl text-white rounded-t-xl">Invalid Input!</h1>
            <p className="text-lg p-2">{props.message}</p>
            <button
              onClick={props.onClose}
              className="mt-4 px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-blue-600 mb-2"
            >
              Close
            </button>
          </div>
        </div>
      );
}
export default CustomPopup;