import React, { useEffect, useState } from "react";

const DataList = ({ query }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/Api.json");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const filteredUsers = users.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <ul>
      {filteredUsers.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}

      {filteredUsers.length === 0 && <li>No results found</li>}
    </ul>
  );
};

export default DataList;