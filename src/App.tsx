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
  Routes,
  useParams,
} from "react-router-dom";
import Home from './Home';
import Board from './Board';

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
    <WalletManagerProvider walletInfoList={walletInfoList}>
      <div className="App">
          <header className="App-header">
            <Banner />
            <Nav />
            <hr/>
          </header>
        <Router>
          <Routes>
            <Route path="/" element={<HomeRoute />} />
            <Route path="/about" element={<AboutRoute />} />
            <Route path="/boards" element={<AllBoards />}/>
            <Route path="/boards/:name" element={<BoardRoute />} />
          </Routes>
        </Router>
      </div>
    </WalletManagerProvider>
  )
}

function HomeRoute() {
  return (
    <main>
      <Home />
    </main>
  )
}

function BoardRoute() {
  const { name } = useParams()

  /* What are you trying to do? */
  if ( name === undefined) return <AllBoards />

  return (
    <main>
      <Board
        name = {name}
      />
    </main>
  )
}

function AllBoards() {
  return (
    <p>Hmm, nothing is here yet...</p>
  )
}

function AboutRoute() {
  return (
    <main>
      <About />
    </main>
  )
}

export default App;
