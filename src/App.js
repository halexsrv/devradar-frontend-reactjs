import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário</label>
            <input name="github_username" id="github_username"></input>
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs"></input>
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude"></input>
            </div>

            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude"></input>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li class="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/28929274?s=200&v=4"
                alt="Rocketseat"
              />
              <div className="user-info">
                <strong>Rocketseat</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Plataforma de educação em tecnologia 🚀</p>
            <a href="https://github.com/Rocketseat">Acessar perfil no Github</a>
          </li>
          <li class="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/28929274?s=200&v=4"
                alt="Rocketseat"
              />
              <div className="user-info">
                <strong>Rocketseat</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Plataforma de educação em tecnologia 🚀</p>
            <a href="https://github.com/Rocketseat">Acessar perfil no Github</a>
          </li>
          <li class="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/28929274?s=200&v=4"
                alt="Rocketseat"
              />
              <div className="user-info">
                <strong>Rocketseat</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Plataforma de educação em tecnologia 🚀</p>
            <a href="https://github.com/Rocketseat">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
