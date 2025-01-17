import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Home() {

    const [users,setUsers]=useState([])

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result= await axios.get("http://localhost:8080/user")
        setUsers.log(result.data);
    };

    return(
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index)=>(
                        <tr>
                            <th scope="row" key={index}>
                                {index + 1}
                            </th>
                            <td>{user.userId}222</td>
                            <td>{user.userName}Jack Alonso</td>
                            <td>{user.userAddress}6 Sydney Street</td>
                            <td>{user.userEmail}jack.alonso@example.com</td>
                            <td>{user.userPhone}0623108129</td>
                            <td>
                                <button className="btn btn-primary mx-2">View</button>
                                <button className="btn btn-outline-primary mx-2">Edit</button>
                                <button className="btn btn-danger mx-2">Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )

}