
const TennisGame = require('./tennis.js');

describe('echo()', function() {

  it('should return "Love - Love" when game start', () => {
        //Arrange
        let app = new TennisGame()
        //Act
        app.reset()
        let result = app.echo()
        //Assert
        expect(result).toBe('Love - Love')
      })

  it('should return "Fifteen - Love" when playerA get first point', () => {
        //Arrange
        let app = new TennisGame()
        //Act
        app.playerGetScore('A')
        let result = app.echo()
        //Assert
        expect(result).toBe('Fifteen - Love')
      })

  it('should return "Love - Fifteen" when playerB get first point', () => {
        //Arrange
        let app = new TennisGame()
        //Act
        app.reset()
        app.playerGetScore('B')
        let result = app.echo()
        //Assert
        expect(result).toBe('Love - Fifteen')
      })

  it('should return "Thirty - Thirty" when playerA and playerB got point 30 - 30', () => {
        //Arrange
        let app = new TennisGame()
        //Act
        app.reset()
        for(i = 0; i < 2; i++){
          app.playerGetScore('A')
          app.playerGetScore('B')
        }
        let result = app.echo()
        //Assert
        expect(result).toBe('Thirty - Thirty')
      })

  it('should return "PlayerB win" when PlayerB get point after 0 - 40', () => {
        //Arrange
        let app = new TennisGame()
        //Act
        app.reset()
        for(i = 0; i < 4; i++)
        app.playerGetScore('B')
        let result = app.echo()
        //Assert
        expect(result).toBe('PlayerB win')
      })

  it('should return "Deuce" when PlayerA and PlayerB get point 40 - 40', () => {
        //Arrange
        let app = new TennisGame()
        //Act
        app.reset()
        for(i = 0; i < 3; i++){
          app.playerGetScore('A')
          app.playerGetScore('B')
        }
        let result = app.echo()
        //Assert
        expect(result).toBe('Deuce')
      })

  it('should return "PlayerA advantage" when PlayerA get point after Deuce', () => {
        //Arrange
        let app = new TennisGame()
        app.reset()
        for(i = 0; i < 3; i++){
          app.playerGetScore('A')
          app.playerGetScore('B')
        }
        app.playerGetScore('A')
        app.playerGetScore('B')
        app.playerGetScore('A')

        let result = app.echo()
        //Assert
        expect(result).toBe('PlayerA advantage')
      })

  it('should return "PlayerA win" when PlayerA get point after PlayerA advantage', () => {
        //Arrange
        let app = new TennisGame()
        app.reset()
        for(i = 0; i < 3; i++){
          app.playerGetScore('A')
          app.playerGetScore('B')
        }
        app.playerGetScore('A')
        app.playerGetScore('A')
        let result = app.echo()
        //Assert
        expect(result).toBe('PlayerA win')
      })
})
