export default function shuffleAssets(assets: any[]) {
  let currentPosition = assets.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentPosition != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentPosition);
    currentPosition--;

    // And swap it with the current element.
    [assets[currentPosition], assets[randomIndex]] = [
      assets[randomIndex],
      assets[currentPosition],
    ];
  }

  return assets;
}