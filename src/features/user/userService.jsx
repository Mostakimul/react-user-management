const fetchUsers = async () => {
  const response = await fetch(
    `https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data`,
  );
  const data = await response.json();
  console.log('Fetching...');
  if (data) {
    localStorage.setItem('users', JSON.stringify(data));
  }

  return data;
};

const userService = {
  fetchUsers,
};

export default userService;
