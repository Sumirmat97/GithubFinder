import React, { Fragment, useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import Spinner from '../layouts/Spinner';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = () => {

    const { getUser, user, getRepos, repos, loading } = useContext(GithubContext);
    const { login } = useParams(); 

    useEffect(() => {
        getUser(login);
        getRepos(login);
        // eslint-disable-next-line
    }, []);

    const { name,  avatar_url, html_url, company, followers, following, location, bio, blog, public_repos, public_gists, hireable } = user;
    
    if (loading) 
        return <Spinner />

    return (
        <Fragment>
            <Link to='/' className='btn btn-light'> Back to Search </Link>
            Hireable: {' '}
            { hireable ? (<i className='fas fa-check text-success'></i>) : (<i className='fas fa-times-circle text-danger'></i> )}
            <div className='card grid-2'> 
                <div className='all-center'>
                    <img src={avatar_url} className='round-img' alt="" style={{ width: '150px'}}/>
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>
                <div>
                    {
                        bio && 
                        (<Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </Fragment>)
                    }
                    <a href={html_url} className="btn btn-dark my-1">
                        Visit Github Profile
                    </a>
                    <ul>
                        <li>
                            {login && <Fragment>
                                <strong>Username: </strong> {login}
                                </Fragment>}
                        </li>
                        <li>
                            {login && <Fragment>
                                <strong>Company: </strong> {company}
                                </Fragment>}
                        </li>
                        <li>
                            {login && <Fragment>
                                <strong>Website: </strong> {blog}
                                </Fragment>}
                        </li>
                    </ul>
                </div>
            </div>
            <div className='card text-center'>
                <div className='badge badge-primary'> Followers: {followers}</div>
                <div className='badge badge-success'> Following: {following}</div>
                <div className='badge badge-light'> Public Repos: {public_repos}</div>
                <div className='badge badge-dark'> Public Gists: {public_gists}</div>
            </div>
            <Repos repos={repos}></Repos>
        </Fragment>
    )
}

// validation of prop types
// User.propTypes = {
//     user: PropTypes.object.isRequired,
//     getUser: PropTypes.func.isRequired,
//     repos: PropTypes.array.isRequired,
//     getRepos: PropTypes.func.isRequired,
//     loading: PropTypes.bool.isRequired
// }

export default User;
