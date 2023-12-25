const getUsers = async () => {
  try {
    const users = await fetch(`../additional.js`).then((_) => _.json());
    users.forEach((user) => {
      console.log(user.id);
    });
  } catch (error) {
    console.log(error);
  }
};

getUsers();

// fetch(`../additional.js`)
//   .then((Response) => Response.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
