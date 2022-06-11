let button = document.getElementById("btn");
button.addEventListener("click", prenotazione);
// td.addEventListener("click", rimuovi);

function prenotazione() {
    debugger
    let camera = document.getElementById("selcamera").value;
    let notte = document.getElementById("selnotte").value;
    let ospite = document.getElementById("nomeOspite").value;
    let td = document.getElementsByTagName("td");


    switch (camera) {
        case "classic":
            switch (notte) {
                case "28/01":
                    if ((td[0].innerText == "") && (ospite != "")) {
                        td[0].innerText = ospite;
                        td[0].style.backgroundColor = "red";
                    } else if (ospite == "") {
                        alert("Inserici Nome Ospite")
                    } else {
                        alert("La camera selezionata non è disponibile!")
                    }
                    break;

                case "29/01":
                    if ((td[1].innerText == "") && (ospite != "")) {
                        td[1].innerText = ospite;
                        td[1].style.backgroundColor = "red";
                    } else if (ospite == "") {
                        alert("Inserici Nome Ospite")
                    } else {
                        alert("La camera selezionata non è disponibile!")
                    }
                    break;

                case "30/01":
                    if ((td[2].innerText == "") && (ospite != "")) {
                        td[2].innerText = ospite;
                        td[2].style.backgroundColor = "red";
                    } else if (ospite == "") {
                        alert("Inserici Nome Ospite")
                    } else {
                        alert("La camera selezionata non è disponibile!")
                    }
                    break;
            }
            break;

        case "superior":
            switch (notte) {
                case "28/01":
                    if ((td[3].innerText == "") && (ospite != "")) {
                        td[3].innerText = ospite;
                        td[3].style.backgroundColor = "red";
                    } else if (ospite == "") {
                        alert("Inserici Nome Ospite")
                    } else {
                        alert("La camera selezionata non è disponibile!")
                    }
                    break;

                case "29/01":
                    if ((td[4].innerText == "") && (ospite != "")) {
                        td[4].innerText = ospite;
                        td[4].style.backgroundColor = "red";
                    } else if (ospite == "") {
                        alert("Inserici Nome Ospite")
                    } else {
                        alert("La camera selezionata non è disponibile!")
                    }
                    break;

                case "30/01":
                    if ((td[5].innerText == "") && (ospite != "")) {
                        td[5].innerText = ospite;
                        td[5].style.backgroundColor = "red";
                    } else if (ospite == "") {
                        alert("Inserici Nome Ospite")
                    } else {
                        alert("La camera selezionata non è disponibile!")
                    }
                    break;
            }
            break;

        case "suite":
            switch (notte) {
                case "28/01":
                    if ((td[6].innerText == "") && (ospite != "")) {
                        td[6].innerText = ospite;
                        td[6].style.backgroundColor = "red";
                    } else if (ospite == "") {
                        alert("Inserici Nome Ospite")
                    } else {
                        alert("La camera selezionata non è disponibile!")
                    }
                    break;

                case "29/01":
                    if ((td[7].innerText == "") && (ospite != "")) {
                        td[7].innerText = ospite;
                        td[7].style.backgroundColor = "red";
                    } else if (ospite == "") {
                        alert("Inserici Nome Ospite")
                    } else {
                        alert("La camera selezionata non è disponibile!")
                    }
                    break;

                case "30/01":
                    if ((td[8].innerText == "") && (ospite != "")) {
                        td[8].innerText = ospite;
                        td[8].style.backgroundColor = "red";
                    } else if (ospite == "") {
                        alert("Inserici Nome Ospite")
                    } else {
                        alert("La camera selezionata non è disponibile!")
                    }
                    break;
            }
            break;
    }
    let cellePiene = 0;
    for (let i = 0; i <= td.length; i++) {
        td[i].addEventListener("click", rimuovi);
        function rimuovi() {
            if (td[i].innerText != "") {
                td[i].innerText = "";
                td[i].style.backgroundColor = "green";
            }
        }
        if (td[i].innerText != "") {
            cellePiene += 1;
        }
        if (cellePiene === 9) {
           document.getElementById("soldOut").innerText = "L'hotel SoldOut" ;
             alert("L'hotel SoldOut");
        }
    }

}

