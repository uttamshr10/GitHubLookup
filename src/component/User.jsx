import {Link} from 'react-router-dom'

function User({user}) {
  return (
    <div className="card shadow-md compact side bg-base-100">
        <div className="flex-row items-center space-x-4 card-body">
            <div>
                <div className="avatar">
                    <div className="rounded-full shadow w-14 h-14">
                        <img src={user.avatar_url} alt="User Profile" />
                    </div>
                </div>
            </div>
        </div>
        <h2 className="card-title">{user.login}</h2>
        <Link className='text-base-content text-opacity-40' to = {`/users/${user.login}`}>
        Go to Profile
        </Link>
    </div>
  )
}

export default User