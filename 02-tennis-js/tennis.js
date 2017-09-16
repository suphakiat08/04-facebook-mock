function TennisGame(){
  const scoreString = ['Love', 'Fifteen', 'Thirthy', 'Forthy']

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
      if(playerA == 4) str = "Player A advantage"
      else str = "Player B advantage"
    }
    else if (playerA == 4 || playerA == 5) str = "Player A wins game"
    else if (playerB == 4 || playerB == 5)  str = "Player B wins game"
    else str = scoreString[playerA] + " - " + scoreString[playerB]

    return str
  }
}

module.exports = TennisGame
