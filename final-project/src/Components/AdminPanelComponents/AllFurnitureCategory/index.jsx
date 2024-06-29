import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Context/UserContext";
import { Link } from "react-router-dom";
import "./style.scss";
const AllFurnitureCategory = () => {
  const [users, setUsers] = useState(null);
  const { token } = useContext(UserContext);
  const FurnitureDelete = async (id) => {
    await fetch(`http://localhost:3000/furniturecategories/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
  };
  async function getApi() {
    await fetch("http://localhost:3000/furniturecategories", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }
  useEffect(() => {
    getApi();
  }, []);

  async function handleDelete(id) {
    await FurnitureDelete(id);
    await getApi();
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Date</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((x) => {
              return (
                <tr key={x._id}>
                  <td>{x.category}</td>
                  <td>{x.date.slice(0, 10)}</td>
                  <td>
                    <button className="btn" onClick={() => handleDelete(x._id)}>
                      Delete
                    </button>
                  </td>
                  <td>
                    <Link to={`/AdminPanel/FurnitureCategories/Update/${x._id}`}>
                      <button className="btn">Update</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Link to={"/AdminPanel/FurnitureCategories/CreateCategory"}>
        {" "}
        <button className="btn">Create Category</button>
      </Link>
    </>
  );
};

export default AllFurnitureCategory;
