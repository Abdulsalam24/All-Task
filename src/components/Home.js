import axios from "axios";
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from "../redux/Users";

function Home() {
    const [data, setData] = useState()
    const dispatch = useDispatch()
    const {user,error , isLoading} = useSelector((state) => state.usersData)
    // const {name} = users
    const URL = 'https://jsonplaceholder.typicode.com/users'

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(URL)
                setData(response.data)
                dispatch(getUsers(response.data))
            } catch (error) {
                console.log('error')
            }
        }
        fetchUser()
    }, [])


console.log(user)

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
                {/* {
                    users && users.map((user) => 
                        <p className="text-black-100" >{user.name} k kk  k</p>
                    )
                }  */}
            </div>

        </div>
    )
}

export default Home