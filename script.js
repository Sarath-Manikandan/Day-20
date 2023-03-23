var div = document.createElement("div");
div.style.textAlign = "center";
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "country");

var button = document.createElement("button");
button.setAttribute("type", "button");
button.classList.add("btn", "btn-primary");
button.innerHTML = "Search";
button.style.marginLeft = "5px";
button.addEventListener("click", foo);

let active = document.createElement("div");
active.style.marginBottom = "20px";
active.style.fontWeight="bold";
active.setAttribute("id", "active");

let deaths = document.createElement("div");
deaths.style.marginBottom = "20px";
deaths.style.fontWeight="bold";
active.setAttribute("id", "deaths");

let recovered = document.createElement("div");
recovered.style.marginBottom = "20px";
recovered.style.fontWeight="bold";
active.setAttribute("id", "recovered");

div.append(input, button, active, deaths, recovered);
document.body.append(div);

async function foo() {
    try {
        let res = document.getElementById("country").value;
        let url = `https://api.covid19api.com/total/dayone/country/${res}`;
        let res1 = await fetch(url);
        let res2 = await res1.json();
        let index = res2.length - 1;
        active.innerHTML = `Total active cases:${res2[index].Active}`;
        deaths.innerHTML = `Total active cases:${res2[index].Deaths}`;
        recovered.innerHTML = `Total active cases:${res2[index].Recovered}`;
    } catch (error) {
        console.error(error);
    }
}
