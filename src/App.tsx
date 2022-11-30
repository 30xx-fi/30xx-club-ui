import './App.css';
import Banner from './Banner';
import Nav from './Nav';
import { getKeplrFromWindow } from "@keplr-wallet/stores";
import WalletConnect from "@walletconnect/client";
import About from "./About"
import {
  KeplrWalletConnectV1,
  WalletInfo,
  WalletManagerProvider,
} from "cosmodal";
import { EmbedChainInfos } from "./config";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './Home';

const walletInfoList: WalletInfo[] = [
  {
    id: "keplr-wallet-extension",
    name: "Keplr Wallet",
    description: "Keplr Browser Extension",
    logoImgUrl: "/keplr-wallet-extension.png",
    getWallet: () => getKeplrFromWindow(),
  },
  {
    id: "walletconnect-keplr",
    name: "WalletConnect",
    description: "Keplr Mobile",
    logoImgUrl: "/walletconnect-keplr.png",
    getWallet: (connector?: WalletConnect) =>
      Promise.resolve(
        connector
          ? new KeplrWalletConnectV1(connector, EmbedChainInfos)
          : undefined
      ),
  },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutRoute />} />
      </Routes>
    </Router>
  )
}

function Main() {
  return (
    <WalletManagerProvider walletInfoList={walletInfoList}>
      <div className="App">
        <header className="App-header">
          <Banner />
          <Nav />
          <hr/>
        </header>
        <main>
          <Home />
        </main>
      </div>
    </WalletManagerProvider>
  )
}

function AboutRoute() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <Nav />
        <hr/>
      </header>
      <main>
        <About />
      </main>
    </div>
  )
}

export default App;
