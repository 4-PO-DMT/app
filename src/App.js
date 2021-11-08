import './App.css';
import Routes from './Routes/Routes';
import { Auth0Provider } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Auth0Provider
    domain="appmintic.us.auth0.com"
    clientId="s1Lz2tS07qLNhM3wJRtoj6yrrfVMwy71"
    redirectUri={window.location.origin}
  >
    <Routes/>
  </Auth0Provider>
  );
}

export default App;
