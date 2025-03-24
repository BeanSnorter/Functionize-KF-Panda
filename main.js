// Kung Fu Panda Character Look Up

// Event Listener
document.getElementById("search").addEventListener("click", searchClicked);

// Event Function
function searchClicked() {
  // Get Input Value (what character to look for?)
  let name = document.getElementById("input-name").value;
  name = name.toLowerCase();

  function nameInput(name1, name2) {
    name === name1 || name === name2;
  }

  function updatePage(char, imageLink, quote) {
    document.getElementById("character-name").innerHTML = char;
    document.getElementById("main-img").src = imageLink;
    document.getElementById("quote").innerHTML = quote;
  }

  // Test Input Variable and update the page
  if (name === "po" || name === "dragon warrior") {
    // Update page to Po
    updatePage("Po", "img/po.png", "Buddy, I am the Dragon Warrior");
  } else if (name === "tigress" || name === "master tigress") {
    // Update page to Tigress
    updatePage("Master Tigress", "img/tigress.png", "That was pretty hardcore");
  } else if (name === "mantis" || name === "master mantis") {
    // Update page to Mantis
    updatePage("Master Mantis", "img/mantis.png", "Fear the bug!");
  } else if (name === "monkey" || name === "master monkey") {
    // Update page to Monkey
    updatePage("Master Monkey", "img/monkey.png", "We should hang out.");
  } else if (name === "crane" || name === "master crane") {
    // Update page to Crane
    updatePage(
      "Master Crane",
      "img/crane.png",
      "You can chain my body, but you will never chain my warrior spirit!"
    );
  } else if (name === "viper" || name === "master viper") {
    // Update page to Viper
    updatePage(
      "Master Viper",
      "img/viper.png",
      "I don't need to bite to fight!"
    );
  } else if (name === "shifu" || name === "master shifu") {
    // Update page to Master Shifu
    updatePage("Master Shifu", "img/shifu.png", "There is now a Level Zero.");
  } else if (name === "ping" || name === "mr. ping") {
    // Update page to Mr. Ping
    updatePage(
      "Mr. Ping",
      "img/mr-ping.png",
      "We are noodle folk, broth runs through our veins!"
    );
  } else {
    // Update page to Question Mark
    updatePage("?????", "img/question-mark.png", "Character Not Found");
  }
}
