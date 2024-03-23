

function CustomPopup(props){
    return (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
          <div className="bg-white p-2 rounded-lg shadow-lg text-center">
            <p className="text-lg">{props.message}</p>
            <button
              onClick={props.onClose}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      );
}
export default CustomPopup;