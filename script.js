let aiOn = false;


// -------------------------
// ASSASSON PRO
// -------------------------

function openAI() {

  aiOn = true;

  const panel = document.getElementById("aiPanel");

  panel.scrollIntoView({
    behavior: "smooth"
  });

  document.getElementById("aiMessage").textContent =
    "Assasson Pro is online. Ask me something!";

  notify("Assasson Pro is ON");

  document.getElementById("question").focus();
}


function askAI() {

  if (!aiOn) {
    openAI();
    return;
  }

  const input =
    document.getElementById("question");

  const message =
    input.value.trim();

  if (!message) {
    notify("Type a question first.");
    return;
  }

  /*
    This is the interface for Assasson Pro.

    Later we can connect this to an actual
    AI service so it can generate real answers.
  */

  document.getElementById("aiMessage").textContent =
    "Assasson Pro received: " + message;

  input.value = "";

  notify("Question sent");
}


// -------------------------
// SHOP
// -------------------------

function openShop() {

  notify("TechPro Shop is coming soon!");

}


// -------------------------
// STOCKS
// -------------------------

function openStocks() {

  notify("Stock Center is coming soon!");

}


// -------------------------
// UPDATES
// -------------------------

function openUpdates() {

  notify("Latest Updates is coming soon!");

}


// -------------------------
// NOTIFICATIONS
// -------------------------

function notify(message) {

  const toast =
    document.getElementById("toast");

  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {

    toast.classList.remove("show");

  }, 2000);
}
