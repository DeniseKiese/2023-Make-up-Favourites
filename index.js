function AddEmail() {
    let email = prompt(
      "Save this article by adding your email, It’s completely free!"
    );
    let name = prompt("What is your name?");
    let heading = document.querySelector("h1");
    if (name.length) {
      alert(" Thank you " + name + " enjoy your article!");
    } else {
      alert("No name, no article for you girl!");
    }
  }
  let changeButton = document.querySelector("button");
  changeButton.addEventListener("click", AddEmail);