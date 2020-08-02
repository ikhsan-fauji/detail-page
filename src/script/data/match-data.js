const matches = [
  {
    id: 1,
    home: 'Team A',
    away: 'Team B',
    matchDate: '2020-08-02'
  },
  {
    id: 2,
    home: 'Team C',
    away: 'Team D',
    matchDate: '2020-08-02'
  },
  {
    id: 3,
    home: 'Team E',
    away: 'Team F',
    matchDate: '2020-08-02'
  }
]

const match = {
  getMatchById (id) {
    if (id) {
      const match = matches.filter(match => match.id === id)
      if (match.length > 0) {
        return match[0]
      } else {
        return null
      }
    }
  },

  getAll () {
    return matches
  }
}

export default match;