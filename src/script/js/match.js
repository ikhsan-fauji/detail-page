import match from '../data/match-data.js';

const matchesScript = (onClick) => {
  _matchesPage(onClick)
}

const _matchesPage = (onClick) => {
  const matchesElement = document.querySelector('#matches')
  if (matchesElement) {
    const matches = match.getAll()
    let template = ''
    matches.forEach(match => {
      template += `<tr>
        <td>${match.home}</td>
        <td>Vs</td>
        <td>${match.away}</td>
        <td>
          <button>
            <a href="#match-detail" class="match-detail" data-matchid="${match.id}">Detail</a>
          </button>
        </td>
      </tr>`;
    })
    matchesElement.innerHTML = template

    const detailElements = document.querySelectorAll('.match-detail')
    detailElements.forEach(detail => {
      detail.addEventListener('click', () => {
        onClick('match-detail', detail.dataset.matchid)
      })
    })
  }
}

export default matchesScript;