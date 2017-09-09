function TennisGame(){
  const scoreString = ['Love', 'Fifteen', 'Thirty', 'Forthy']

  this.reset = () => {
    playerA = 0, playerB = 0;
  }

  this.playerGetScore = (player) => {
    if(player == "A"){
      if(playerB == 4) playerA--
      else playerA++
    }else if (player == "B"){
      if(playerA == 4) playerA--
      else playerB++
    }
  }

  this.echo = () => {
    let str = ""
    if(playerA == 3 && playerB == 3) str = "Deuce"
    else if (playerA == 4 && playerB == 3 || playerA == 3 && playerB == 4){
      if(playerA == 4) str = "PlayerA advantage"
      else str = "PlayerB advantage"
    }
    else if (playerA == 4 || playerA == 5) str = "PlayerA win"
    else if (playerB == 4 || playerB == 5)  str = "PlayerB win"
    else str = scoreString[playerA] + " - " + scoreString[playerB]

    return str
  }
}

module.exports = TennisGame
