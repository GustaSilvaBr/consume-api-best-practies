import axios from 'axios';
import {useQuery} from 'react-query';

type Repository = {
  full_name: string,
  description: string,
}

function App() {
  const {isFetching, data: repositories} = useQuery<Repository[]>('repos', async ()=>{
    const response = await axios.get('https://api.github.com/users/GustaSilvaBr/repos');

    return response.data;
  });
  
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
