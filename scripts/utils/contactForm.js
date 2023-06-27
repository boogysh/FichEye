//open contact Form
function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
  modal.focus();
  document.getElementById("contact_modal").focus();
}
//close contact Form
function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}
// close contact Form pressing escape key
window.addEventListener("keyup", (e) => {
  e.key === "Escape" && closeModal();
});
/////////////

//errorMessages
const emptyErrorMsg = "";
const FN_ErrorMsg =
  "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
const FN_advice_ErrorMsg = "Veuillez entrer que des majuscules et minuscules";
const LN_ErrorMsg =
  "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
const LN_advice_ErrorMsg = "Veuillez entrer que des majuscules et minuscules";
const emailErrorMsg =
  "Le format de l'email est incorrect. Ex: exemple@domaine.com";
const MsgErrorMsg =
  "Veuillez entrer 2 caractères ou plus pour le champ message.";
const Msg_advice_ErrorMsg = "Vous avez introduit des caractères non reconnus";
//add error
const addError = (errorId, errorMsg, inputId) => {
  inputId && inputId.classList.add("border-error");
  return (errorId.textContent = errorMsg);
};
//del error
const delError = (errorId, errorMsg, inputId) => {
  inputId && inputId.classList.remove("border-error");
  return (errorId.textContent = errorMsg);
};
// Match first name
const matchFirstName = () => {
  const FN = document.querySelector("#first");
  const errorFN = document.querySelector("#errorFirst");
  const matched = FN.value.match(/^[a-z A-Z]{2,}$/);
  if (matched) {
    delError(errorFN, emptyErrorMsg, FN);
    localStorage.setItem("firstName", FN.value);
  } else if (FN.value.length < 2) {
    addError(errorFN, FN_ErrorMsg, FN);
    localStorage.removeItem("fistName");
  } else if (FN.value.length >= 2 && !matched) {
    addError(errorFN, FN_advice_ErrorMsg, FN);
    localStorage.removeItem("fistName");
  }
};

// Match last name
const matchLastName = () => {
  const LN = document.querySelector("#last");
  const errorLN = document.querySelector("#errorLast");
  const matched = LN.value.match(/^[a-z A-Z]{2,}$/);
  if (matched) {
    delError(errorLN, emptyErrorMsg, LN);
    localStorage.setItem("lastName", LN.value);
  } else if (LN.value.length < 2) {
    addError(errorLN, LN_ErrorMsg, LN);
    localStorage.removeItem("lastName");
  } else if (LN.value.length >= 2 && !matched) {
    addError(errorLN, LN_advice_ErrorMsg, LN);
    localStorage.removeItem("lastName");
  }
};

// Match email
const matchEmail = () => {
  const EMAIL = document.querySelector("#email");
  const errorEMAIL = document.querySelector("#errorEmail");
  const matched = EMAIL.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  if (matched) {
    delError(errorEMAIL, emptyErrorMsg, EMAIL);
    localStorage.setItem("email", EMAIL.value);
  } else {
    addError(errorEMAIL, emailErrorMsg, EMAIL);
    localStorage.removeItem("email");
  }
};

// Match email
const matchMessage = () => {
  const MSG = document.querySelector("#msg");
  const errorMSG = document.querySelector("#errorMsg");
  const matched = MSG.value.match(
    /^[a-zA-Z0-9~!@#$%^&*()`{};':,./<>?|"+£¤áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._\s-]{2,}$/
  );
  if (matched) {
    delError(errorMSG, emptyErrorMsg, MSG);
    localStorage.setItem("message", MSG.value);
  } else if (MSG.value.length < 2) {
    addError(errorMSG, MsgErrorMsg, MSG);
    localStorage.removeItem("message");
  } else if (MSG.value.length >= 2 && !matched) {
    addError(errorLN, Msg_advice_ErrorMsg, LN);
    localStorage.removeItem("message");
  }
};

//////////

// request post
const registerMessage = async () => {
  // const urlServer = "http://localhost:4444";
  const urlServer = "https://fich-eye-server.vercel.app";
  const data = JSON.parse(localStorage.getItem("data"));
  try {
    const response = await fetch(`${urlServer}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const registeredMessage = await response.json();
    console.log("registeredMessage", registeredMessage);
  } catch (err) {
    console.log(err);
  }
};

//reset inputs after form submission
function resetAllInputs() {
  document.querySelectorAll("input").forEach((el) => {
    el.value = null;
  });
  document.querySelector("textarea").value = null;
}

//events
submitBtn.addEventListener("click", (e) => sendForm(e));

async function sendForm(e) {
  e.preventDefault();
  const data = {
    firstName: localStorage.getItem("firstName"),
    lastName: localStorage.getItem("lastName"),
    email: localStorage.getItem("email"),
    message: localStorage.getItem("message"),
  };
  // save data to local storage
  localStorage.setItem("data", JSON.stringify(data));
  if (data.firstName && data.lastName && data.email && data.message) {
    await registerMessage();
    localStorage.clear();
    resetAllInputs();
    closeModal();
  } else {
    !data.firstName && matchFirstName();
    !data.lastName && matchLastName();
    !data.email && matchEmail();
    !data.message && matchMessage();
  }
}
