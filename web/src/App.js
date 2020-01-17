import React, { useEffect, useState } from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    )
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();
    

  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input
              name="github_username"
              id="github_username"
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
              required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              value={techs}
              onChange={e => setTechs(e.target.value)}
              required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
                required />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
                required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img alt="perfil_img" src="https://avatars1.githubusercontent.com/u/5282443?s=460&v=4" />
              <div className="user-info">
                <strong>Eduardo Amaral</strong>
                <span>Java, React</span>
              </div>
            </header>
            <p>Bacharel em Engenharia de Software.</p>
            <a href="https://github.com/Eduardoamaral66">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img alt="perfil_img" src="https://avatars1.githubusercontent.com/u/5282443?s=460&v=4" />
              <div className="user-info">
                <strong>Eduardo Amaral</strong>
                <span>Java, React</span>
              </div>
            </header>
            <p>Bacharel em Engenharia de Software.</p>
            <a href="https://github.com/Eduardoamaral66">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img alt="perfil_img" src="https://avatars1.githubusercontent.com/u/5282443?s=460&v=4" />
              <div className="user-info">
                <strong>Eduardo Amaral</strong>
                <span>Java, React</span>
              </div>
            </header>
            <p>Bacharel em Engenharia de Software.</p>
            <a href="https://github.com/Eduardoamaral66">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img alt="perfil_img" src="https://avatars1.githubusercontent.com/u/5282443?s=460&v=4" />
              <div className="user-info">
                <strong>Eduardo Amaral</strong>
                <span>Java, React</span>
              </div>
            </header>
            <p>Bacharel em Engenharia de Software.</p>
            <a href="https://github.com/Eduardoamaral66">Acessar perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;