
const answers = document.querySelectorAll('[id^="a"]');
console.log("answers ",answers);

function tampilJawaban(e) {
  const currentStatus = e.getAttribute("status");
  const questionId = e.getAttribute("id");
  const answerId = `a${questionId.charAt(1)}`;

  if (currentStatus === "hilang") {
    e.setAttribute("status", "muncul");
    answers.forEach(answer => answer.classList.add("hidden"));
    document.getElementById(answerId).classList.remove("hidden");
  } else {
    e.setAttribute("status", "hilang");
    answers.forEach(answer => answer.classList.add("hidden"));
  }
}

const form = document.querySelector("form");

function sendFAQ(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "akifsakti9@gmail.com",
        Password : "100C7D3FF26FCD6318C9AC9E1197AB697EAA",
        To : 'akifsakti9@gmail.com',
        From : "akifsakti9@gmail.com",
        Subject : "Frequently Asked Questions",
        Body : "Nama pengirim: " + document.getElementById("nama").value + "<br> E-Mail: " + document.getElementById("email").value + "<br> Pesan: " + document.getElementById("pesan").value
    }).then(
      message => alert(message)
    );
}
