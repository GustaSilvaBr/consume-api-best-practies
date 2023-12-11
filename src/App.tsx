import { useEffect, useState } from 'react';
import axios from 'axios';

type Repository = {
  full_name: string,
  description: string,
}

function App() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  //GustaSilvaBr
  useEffect(() => {
    axios.get('https://api.github.com/users/GustaSilvaBr/repos')
      .then(response=>{
        setRepositories(response.data)
      })
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      <ul>
        {
          repositories.map((repo)=>{
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
