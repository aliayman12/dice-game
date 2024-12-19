function playGame() {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomDiceImage = `dice${randomNumber1}.png`;
  const randomImageSource = `images/${randomDiceImage}`;
  const image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSource);

  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  const randomImageSource2 = `images/dice${randomNumber2}.png`;
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  const heading = document.querySelector("h1");
  if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "🚩 Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    heading.innerHTML = "Player 2 Wins! 🚩";
  } else {
    heading.innerHTML = "Draw!";
  }
}
