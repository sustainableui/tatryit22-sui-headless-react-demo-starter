import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch,
  useParams,
  useRouteMatch
} from "react-router-dom";

import React from "react";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Domov</Link>
          </li>
          <li>
            <Link to="/mesta">Mesta</Link>
          </li>
          <li>
            <Link to="/nove-mesto">Zapojte aj svoje mesto</Link>
          </li>
          <li>
            <Link to="/o-nas">O nás</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/o-nas">
            <Informacie />
          </Route>
          <Route path="/nove-mesto">
            <NoveMesto />
          </Route>
          <Route path="/mesta">
            <Mesta />
          </Route>
          <Route path="/">
            <Domov />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Domov() {
  return <h2>Domovská stránka</h2>;
}

function Informacie() {
  return <h2>O nás</h2>;
}

function NoveMesto() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Nové mesto</h2>

      <ul>
        <li>
          <Link to={`${match.url}/pridat`}>Pridaj</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/pridat`}>
          <PridanieMesta />
        </Route>
        <Route path={match.path}>
          <h3>Pridajte sa.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function PridanieMesta() {
  return <h3>Presmerovanie na formulár pre pridanie nového mesta</h3>;
}

function Mesta() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Mestá</h2>

      <ul>
        <li>
          <Link to={`${match.url}/poprad`}>Poprad</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:mestoId`}>
          <Akcie />
        </Route>
        <Route path={match.path}>
          <h3>Vyberte si mesto.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Akcie() {
  let { mestoId } = useParams();
  let match = useRouteMatch();

  return (
    <div>
      <h2>Akcie</h2>

      <ul>
        <li>
          <Link to={`${match.url}/novy-dobrovolnik`}>Nový dobrovolník</Link>
        </li>
        <li>
          <Link to={`${match.url}/nova-objednavka`}>Nová objednávka</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:akciaId`}>
          <Akcia />
        </Route>
        <Route path={match.path}>
          <h3>Vyberte si akciu.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Akcia() {
  let { akciaId, mestoId } = useParams();
  return <h3>Presmerovanie na formular pre akciu '{akciaId}' v meste '{mestoId}'</h3>;
}
