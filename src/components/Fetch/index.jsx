import React, { useState } from "react";

export const Fetch = () => {
  const [students, setStudents] = useState([]);

  const getUsers = (id) => {
    return fetch(`http://158.51.99.245:8081/api/v1/houses/list?page=0`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => res.json());
  };

  const getData = () => {
    getUsers().then((res) => {
      setStudents(res?.data);
    });
  };

  const getInfo = (id) => {
    return fetch(`http://158.51.99.245:8081/api/v1/houses/${id}`, {
      method: "Delete",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res?.success) {
          getUsers();
        }
      });
  };
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <button onClick={getData}>get data</button>
      <div style={{ flex: 1 }}>
        {students.map((value) => (
          <h1 key={value.id}>
            {value.id}
            {value.address}{" "}
            <button onClick={() => getInfo(value.id)}>delete</button>
            <button onClick={() => localStorage.setItem("id", value.id)}>
              select
            </button>
            <hr />
          </h1>
        ))}
      </div>
      <div style={{ flex: 1 }}>
        {/* <div key={selected?.id}>
          <h1>Name: {selected?.name} </h1>
          <h2>Username: {selected?.username} </h2>
          <h3>Email: {selected?.email} </h3>
        </div> */}
      </div>
    </div>
  );
};

export default Fetch;
