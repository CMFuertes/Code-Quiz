var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var backPage = document.querySelector("#backPage");

clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
var totalScores = localStorage.getItem("totalScores");
totalScores = JSON.parse(totalScores);

if (totalScores !== null) {

    for (var i = 0; i < totalScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = totalScores[i].name + " " + totalScores[i].score;
        highScore.appendChild(createLi);

    }
}
backPage.addEventListener("click", function () {
    window.location.replace("index.html");
});