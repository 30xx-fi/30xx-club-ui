function Home() {
  return (
  <div>
  <section>
  <h2>「Home」</h2>
  <p>Welcome to 30xx.club, an experimental textboard / forum / community
  hosted on the Juno blockchain and provided by IPFS + Jackal.</p>
  <ol><li>Posting is permissionless</li>
  <li>Governance is moderation</li>
  <li>Everything is decentralized and forever</li>
  </ol>
  <p>The site is grouped into boards which themselves contain threads. Threads
  themselves contain posts. 30xx.club is similar in this respect to many popular
  forums.</p>
  <p>Unlike some other sites anyone may make a board, though creating a board
  does not give the user a special privilige, it only makes the board available
  for others to post on too. The below three boards are <em>pinned</em> to the site and
  are where most discussion happens; pinned boards are added through protocol
  governance.</p>
  <ul className="boardList">
  <li><figure className="board">
  <a href="/boards/crypto" className="hoverAnimBox">
    <img height="200" src="/crypto-icon-static.gif" />
    <img height="200" src="/crypto-icon.gif" />
    <img height="200" src="/crypto-icon-static.gif" />
  </a>
  <figcaption><h3>「Crypto」</h3></figcaption>
  </figure></li>
  <li><figure className="board">
  <a href="/boards/random" className="hoverAnimBox">
    <img height="200" src="/random-icon-static.gif" />
    <img height="200" src="/random-icon.gif" />
    <img height="200" src="/random-icon-static.gif" />
  </a>
  <figcaption><h3>「Random」</h3></figcaption>
  </figure></li>
  <li><figure className="board">
  <a href="/boards/wired" className="hoverAnimBox">
    <img height="200" src="/wired-icon-static.gif" />
    <img height="200" src="/wired-icon.gif" />
    <img height="200" src="/wired-icon-static.gif" />
  </a>
  <figcaption><h3>「Wired」</h3></figcaption>
  </figure></li>
  </ul>
  </section>
  </div>
  )
}

export default Home
