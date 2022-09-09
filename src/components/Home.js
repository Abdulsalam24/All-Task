import axios from "axios";
import { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { byAmount, decrement, increment } from '../redux/Counter'
import { getUsers } from "../redux/Users";

function Home() {
    const dispatch = useDispatch()
    const { users, error, isLoading } = useSelector((state) => state.usersData)

    console.log(users, error, 'usersssssssssss')

    const URL = 'https://jsonplaceholder.typicode.com/users'

    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(URL)
            dispatch(getUsers(response.data))
        }
        fetchUser()
    }, [])

    return (
        <div>
            <form className="form-control">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Enter Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" id="name" placeholder="ennter name" className="input input-bordered" />
                        <span>name</span>
                    </label>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Enter Email</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="username" id="username" placeholder="ennter username" className="input input-bordered" />
                        <span>email</span>
                    </label>
                </div>
            </form>

            <div className="border w-80 mt-7">
                {
                    users?.map((user) => {
                        <p className="text-black-100" key={user.id}>{user.name}</p>
                    })
                }
            </div>

        </div>
    )
}

export default Home