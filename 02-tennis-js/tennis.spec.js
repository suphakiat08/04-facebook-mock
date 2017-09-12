
const TennisGame = require('./tennis.js');

describe('echo()', function() {
  let app
  beforeEach(() => {
    //Arrange
    app = new TennisGame()
    //Act
    app.reset()
  })

  it('should return "Love - Love" when game start.', () => {
        //Act
        let result = app.echo()
        //Assert
        expect(result).toBe('Love - Love')
      })

  it('should return "Fifteen - Love" when playerA get first point.', () => {
        //Act
        app.playerGetScore('A')
        let result = app.echo()
        //Assert
        expect(result).toBe('Fifteen - Love')
      })

  it('should return "Love - Fifteen" when playerB get first point.', () => {
        //Act
        app.playerGetScore('B')
        let result = app.echo()
        //Assert
        expect(result).toBe('Love - Fifteen')
      })

  it('should return "Thirty - Fifteen" when score is 30 - 15.', () => {
        //Act
        app.playerGetScore('A')
        app.playerGetScore('A')
        app.playerGetScore('B')
        let result = app.echo()
        //Assert
        expect(result).toBe('Thirty - Fifteen')
  })

  it('should return "Thirty - Thirty" when score is 30 - 30.', () => {
        //Act
        for(i = 0; i < 2; i++){
          app.playerGetScore('A')
          app.playerGetScore('B')
        }
        let result = app.echo()
        //Assert
        expect(result).toBe('Thirty - Thirty')
      })

  it('should return "Deuce" when score is 40 - 40.', () => {
        //Act
        for(i = 0; i < 3; i++){
          app.playerGetScore('A')
          app.playerGetScore('B')
        }
        let result = app.echo()
        //Assert
        expect(result).toBe('Deuce')
      })

  it('should return "PlayerB win" when PlayerB get point after score is 0 - 40.', () => {
        //Act
        for(i = 0; i < 4; i++)
        app.playerGetScore('B')
        let result = app.echo()
        //Assert
        expect(result).toBe('PlayerB win')
      })

  it('should return "PlayerA advantage" when PlayerA get point after Deuce.', () => {
        //Act
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

  it('should return "PlayerA win" when PlayerA get point after PlayerA advantage.', () => {
        //Act
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
