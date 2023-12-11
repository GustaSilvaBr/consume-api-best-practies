import {useFetch} from './hooks/useFetch';


type Repository = {
  full_name: string,
  description: string,
}

function App() {
  const {data: repositories, isFetching, error} = useFetch<Repository[]>('users/GustaSilvaBr/repos');

  if(error){
    alert('error');
    console.log(error);
  }

  return (
    <div>
      <h1>Hello</h1>
      <ul>
        {isFetching && <p>Carregando...</p>}
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
