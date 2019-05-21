let rootDiv = document.getElementById("root");
let container = document.createElement("div");

let theLogo = document.createElement("img");
theLogo.src = "escudochile.jpg";
theLogo.style.display = "block";
theLogo.style.marginLeft = "auto";
theLogo.style.marginRight = "auto";

rootDiv.appendChild(theLogo);
rootDiv.appendChild(container);

let request = new XMLHttpRequest()


request.open("GET","https://jsonplaceholder.typicode.com/users", true);


request.onload = function() {
    let data = JSON.parse(this.response);
    if(request.status >= 200 && request.status < 400){
        data.forEach(user => {
        let card = document.createElement("div");
        let header1 = document.createElement("h1");
        header1.textContent = user.name;
        header1.style.textAlign = "center";
        header1.style.color = "blue";

        let header2 = document.createElement("h2");
        header2.textContent = "User ID: "+ user.id;
        header2.style.textAlign = "center";
        header2.style.color ="red"; 

        let userName = document.createElement("h4");
        userName.textContent = "Username: " + user.username;
        userName.style.textAlign = "center";

        let userCity = document.createElement("h4");
        userCity.textContent = "City: " + user.address.city;
        userCity.style.textAlign = "center";

        let eMail = document.createElement ("h4");
        eMail.textContent = 'E-mail: ' + user.email;
        eMail.style.textAlign = "center";

        let telefono = document.createElement("h4");
        telefono.textContent = "Phone: " + user.phone;
        telefono.style.textAlign = "center";

        let sitioWeb = document.createElement("h4");
        sitioWeb.textContent = "Website: " + user.website;
        sitioWeb.style.textAlign = "center";
        
        container.appendChild(card);
        card.appendChild(header1);
        card.appendChild(header2)
        card.appendChild(userName);
        card.appendChild(userCity);
        card.appendChild(eMail);
        card.appendChild(telefono);
        card.appendChild(sitioWeb);
        


    });
    } else {
        console.log("error")
        let errorMessage = document.createElement("marquee");
        errorMessage.textContent = "Oh no, it is not working!";
        rootDiv.appendChild(errorMessage);
    }
}

    request.send();