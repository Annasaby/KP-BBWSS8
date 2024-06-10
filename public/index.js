const a1 = document.querySelector("#a1");
const i1 = document.querySelector("#i1");

function tampilJawaban(e){
    const currentStatus = e.getAttribute("data-status");

    if(currentStatus === "hilang"){
        e.setAttribute("data-status", "muncul");
        i1.setAttribute("data-feather", "chevron-up");
        a1.classList.remove("hidden");
    }else if(currentStatus === "muncul"){
        e.setAttribute("data-status", "hilang");
        i1.setAttribute("data-feather", "chevron-down");
        a1.classList.add("hidden");
    }

    console.log("New Status:", e.getAttribute("data-status"));
    console.log("Icon:", i1.getAttribute("data-feather"));
    
    feather.replace();
};
