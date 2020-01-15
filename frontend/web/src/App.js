import React, {useEffect} from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  });

  return (
    
    <div id="app">
  
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input htmlFor="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input htmlFor="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input htmlFor="latitude" id="latitude" required />
              </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input htmlFor="longitude" id="longitude" required />
            </div>         
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/560817?s=460&v=4" alt="QASoftDev" />
              <div className="user-info">
                <strong>Rodrigo Acevedo</strong>
                <span>Java, JS, Node.JS</span>
              </div>
            </header>
            <p>Developer Java , NodeJS, JS and Automation Teste Engineer</p>
            <a href="https://github.com/QASoftDev">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/560817?s=460&v=4" alt="QASoftDev" />
              <div className="user-info">
                <strong>Rodrigo Acevedo</strong>
                <span>Java, JS, Node.JS</span>
              </div>
            </header>
            <p>Developer Java , NodeJS, JS and Automation Teste Engineer</p>
            <a href="https://github.com/QASoftDev">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/560817?s=460&v=4" alt="QASoftDev" />
              <div className="user-info">
                <strong>Rodrigo Acevedo</strong>
                <span>Java, JS, Node.JS</span>
              </div>
            </header>
            <p>Developer Java , NodeJS, JS and Automation Teste Engineer</p>
            <a href="https://github.com/QASoftDev">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/560817?s=460&v=4" alt="QASoftDev" />
              <div className="user-info">
                <strong>Rodrigo Acevedo</strong>
                <span>Java, JS, Node.JS</span>
              </div>
            </header>
            <p>Developer Java , NodeJS, JS and Automation Teste Engineer</p>
            <a href="https://github.com/QASoftDev">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>


  );
}

export default App;
