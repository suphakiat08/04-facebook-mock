function TennisGame(){
  let playerA,playerB;
  this.reset = () => { playerA = 0, playerB = 0; }
  this.playerAGetScore = () => { playerA++ }
  this.playerBGetScore = () => { playerB++ }
  this.echo = () => {
    let str = ''
    if(playerA == 0 && playerB == 0){
      str = 'Love - Love'
    }else {
      str = 'Fifteen - Love'
    }
    return str
  }
}

test('Echo "Love - Love" when game start', () => {
      //Arrange
      let app = new TennisGame()
      //Act
      app.reset()
      let result = app.echo()
      //Assert
      expect(result).toBe('Love - Love')
    })

test('Echo "Fifteen - Love" when playerA got point', () => {
      //Arrange
      let app = new TennisGame()
      //Act
      app.playerAGetScore()
      let result = app.echo()
      //Assert
      expect(result).toBe('Fifteen - Love')
    })
