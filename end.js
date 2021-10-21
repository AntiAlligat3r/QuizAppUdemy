const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");

const mostRecentScore = localStorage.getItem("mostRecentScore");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);

const MAX_HIGH = 5;

finalScore.innerText = mostRecentScore;
flag = false;

username.addEventListener("keyup",() =>{
    if(flag == false)
        saveScoreBtn.disabled = !username.value;
});

saveHighScore = e =>{
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };



    highScores.push(score);
    highScores.sort((a,b) => b.score -a.score);
    highScores.splice(5);

    localStorage.setItem("highScores",JSON.stringify(highScores));
    flag = true;
    saveScoreBtn.disabled = true;
    username.disabled = true;
   // window.location.assign("/");
};