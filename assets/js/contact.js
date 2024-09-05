const form = document.querySelector(".contact_sec form");

const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `
        Nom : ${name.value} <br>
        Email : ${email.value} <br>
        Message : ${message.value} <br>
    `;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "yassinechmarekh88@gmail.com",
    Password: "05EC02FB29BA45BE780038FCF7D8A7B0E8C9",
    To: "yassinechmarekh88@gmail.com",
    From: "yassinechmarekh88@gmail.com",
    Subject: "Contact form - Yassine CHMAREKH Portfolio",
    Body: bodyMessage,
  }).then((message) => {
    if (message) {
      Swal.fire({
        title: "Message Envoyé !",
        text: "Merci de m'avoir contacté ! Je vous répondrai le plus tôt possible.",
        icon: "success",
        background: "#040404",
        color: "#ffffff",
        confirmButtonColor: "#aadc8c",
        customClass: {
          popup: "custom-alert-success",
        },
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Une erreur s'est produite lors de l'envoi du message !",
        background: "#040404",
        color: "#ffffff",
        confirmButtonColor: "#bb0a21",
        customClass: {
          popup: "custom-alert-danger",
        },
      });
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});
