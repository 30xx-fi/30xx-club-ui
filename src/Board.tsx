function Board({ name }:{ name: string }) {
  const properName = properBoardName(name)

  return (
    <div>
    <section>
    <h2>「{properName}」</h2>
    <BoardDescription
      name={name} />
    </section>
    </div>
  )
}

function properBoardName(name: string): string {
  return name.split(' ')
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
    .join(' ')
}

function BoardDescription({ name }: { name: string }): JSX.Element | null {
  /* Eventually these can be stored on-chain as simple strings */
  switch(name) {
  case "crypto":
    return (
      <header className="board-description">
        <em>Crypto[currency, ography]</em>
      </header>
    )
  case "wired":
    return (
      <header className="board-description">
        <em>Meaning, life in the post-Y2K age — we are all connected</em>
      </header>
    )
  case "random":
    return (
      <header className="board-description">
        <em>The stories and information posted here are artistic works of
        fiction and falsehood. Only a fool would take anything posted here as
        fact</em>
      </header>
    )
  default:
    return null
  }
}

export default Board
