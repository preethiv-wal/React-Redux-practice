import { useEffect } from "react";
import { fetchUsers } from "../redux";
import { useSelector, useDispatch } from "react-redux";


const CustomerContainer = () => {
    const userData = useSelector((state) => state.user);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return userData.loading ? (
        <h2>Loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
            <h2>Users List</h2>
            <div>
                { userData && userData.users && userData.users.map(user => <p>{user.name}</p>)}
            </div>
        </div>
    )

}
export default CustomerContainer;
