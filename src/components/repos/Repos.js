import React, { useContext } from 'react'
import RepoItem from './RepoItem'
import GithubContext from '../../context/github/githubContext'

// declaring props in functional componenent. 
//const Repos = ({repos}) => {

const Repos = () => {
  
  const githubContext = useContext(GithubContext);
  const { repos } = githubContext;

  return repos.map(repo => <RepoItem repo={repo} key={repo.id}></RepoItem>)
}

// Repos.propTypes = {
//     repos: PropTypes.array.isRequired
// }

export default Repos;