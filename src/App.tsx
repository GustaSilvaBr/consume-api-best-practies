import {useFetch} from './hooks/useFetch';


type Repository = {
  full_name: string,
  description: string,
}

function App() {
  const {data: repositories} = useFetch<Repository[]>('https://api.github.com/users/GustaSilvaBr/repos');
  
  return (
    <div>
      <h1>Hello</h1>
      <ul>
        {
          repositories?.map((repo)=>{
            return (
              <li key={repo.full_name}>
                <strong>{repo.full_name}</strong>
                <p>{repo.description}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App
