const TennisApp = require('./tennis.js')

describe('Tenis App', () => {
  let app
  beforeEach(() => {
    app = new TennisApp()
    app.reset()
  })

  function repeatPlayerGetScore(player, number){
    for(i = 0; i < number; i++){
      if(player == 'A') app.playerGetScore('A')
      else app.playerGetScore('B')
    }
  }

  describe('Player A gets score', () => {

    it('should echo "Love - Love" when game starts', () => {
      let result = app.echo()

      expect(result).toBe('Love - Love')
    })

    it('should echo "Fifteen - Love" when score is 15 - 0', () => {
      repeatPlayerGetScore('A', 1)
      let result = app.echo()

      expect(result).toBe('Fifteen - Love')
    })

    it('should echo "Thirthy - Love" when score is 30-0', () => {
      repeatPlayerGetScore('A', 2)
      let result = app.echo()

      expect(result).toBe('Thirthy - Love')
    })

    it('should echo "Forthy - Love" when score is 40-0', () => {
      repeatPlayerGetScore('A', 3)
      let result = app.echo()

      expect(result).toBe('Forthy - Love')
    })

    it('should echo "Player A wins game" when player A gets next score at 40-0', () => {
      repeatPlayerGetScore('A', 4)
      let result = app.echo()

      expect(result).toBe('Player A wins game')
    })
  })

  describe('Player B gets score', () => {

    it('should echo "Love - Love" when game starts', () => {
      let result = app.echo()

      expect(result).toBe('Love - Love')
    })

    it('should echo "Love - Fifteen" when score is 0 - 15', () => {
      repeatPlayerGetScore('B', 1)
      let result = app.echo()

      expect(result).toBe('Love - Fifteen')
    })

    it('should echo "Love - Thirthy" when score is 0 - 30', () => {
      repeatPlayerGetScore('B', 2)
      let result = app.echo()

      expect(result).toBe('Love - Thirthy')
    })

    it('should echo "Love - Forthy" when score is 0 - 40', () => {
      repeatPlayerGetScore('B', 3)
      let result = app.echo()

      expect(result).toBe('Love - Forthy')
    })

    it('should echo "Player B wins game" when player B gets next score at 40-0', () => {
      repeatPlayerGetScore('B', 4)
      let result = app.echo()

      expect(result).toBe('Player B wins game')
    })
  })
})
