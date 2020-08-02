import match from '../data/match-data.js';

const matchDetailScript = (id) => {
  _macthDetailPage(id)
}

const _macthDetailPage = (id) => {
  if (id) {
    const matchData = match.getMatchById(parseInt(id))
    if (matchData) {
      document.querySelector('#match-detail').innerHTML = `
        <h2>${matchData.home} VS ${matchData.away}</h2>
        <p>${matchData.matchDate}</p>
      `;
    }
  }
}

export default matchDetailScript;