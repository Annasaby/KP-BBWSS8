const menu = document.querySelectorAll('[id^="menu"]');
const tujuan = document.querySelector("#tujuan");
const tujuanValue = tujuan.getAttribute("value");
console.log(tujuanValue);


function highlight(e){
  const id = e.getAttribute("id");
  console.log(id);

  menu.forEach(menu => menu.classList.remove("bg-white"));
  document.getElementById(id).classList.add("bg-white");

  if(id === "menu1"){
    tujuan.setAttribute("value", "Aset");
    form.reset();
  }else if(id == "menu2"){
    tujuan.setAttribute("value", "Pengduan BPJ");
    form.reset();
  }else if(id == "menu3"){
    tujuan.setAttribute("value", "Bencana");
    form.reset();
  }else if(id == "menu4"){
    tujuan.setAttribute("value", "Pengaduan LSM");
    form.reset();
  }else if(id == "menu5"){
    tujuan.setAttribute("value", "Pengaduan layanan publik");
    form.reset();
  }
}



const form = document.querySelector("form");

function sendLayanan(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "tabgemblung@gmail.com",
        // Password : "100C7D3FF26FCD6318C9AC9E1197AB697EAA",
        Password : "FFA39B1652DFBBE80520BF14154A57DE7A6C",
        To : 'akifsakti9@gmail.com',
        From : "asada@gmail.com",
        Subject : "Form Layanan Terpadu",
        Body : "halohalo"
        // Body : "Tujuan pelaporan: " + document.getElementById("tujuan").value + "<br> Nama lengkap: " + document.getElementById("nama").value + "<br> Phone: " + document.getElementById("phone").value + "<br> E-Mail: " + document.getElementById("email").value + "<br> Judul laporan: " + document.getElementById("judul").value + "<br> Deskripsi laporan: " + document.getElementById("deskripsi").value + "<br> Tanggal kejadian: " + document.getElementById("tanggal").value + "<br> Lokasi: " + document.getElementById("lokasi").value + "<br> Lampiran: " + document.getElementById("Lampiran").value
    }).then(
      message => alert(message)
    );
}