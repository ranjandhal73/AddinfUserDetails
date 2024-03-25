function DisplayUser(props) {
  let userDetails = props.usersDetail;
  return (
    <>
      <div className="w-3/4 flex items-center justify-center flex-col">
        {userDetails.map((items) => {
          return (
            <div key={items.id}
            className="mt-4 bg-white rounded-lg p-2 w-2/4 text-center"
            >
              <div className="border border-gray-500 text-lg">
                {items.user} ({items.age} years old) from {items.collegeName} College.
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DisplayUser;
