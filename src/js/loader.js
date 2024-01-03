const urlGetDados = "https://pingobras-sg.glitch.me/api/one-piece";
const mainElements = document.querySelector(".personagens")
const mainBtnsElements = document.querySelector(".btns")

function getData() {
    const options = {
        method: "GET",
        mode: "cors",
        headers: {
            "content-type": "application/json;charset=utf-8",
            "Authorization": "APIKey20240102",
        }
    };


    fetch(urlGetDados, options)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                return response.text()
            }
        })
        .then((data) => {
            console.log("DATA RESPONSE: ");
            console.log(data);
            loader(data);
        })
        .catch((error) => erro(error));
}
getData()


function erro(error) {
    console.debug(error);
    alert(error)
}

function loader(database) {
    for (let i = 0; i < database.length; i++) {
        const dataPersonagem = database[i];
        const nomePersonagem = dataPersonagem.personagem
        const nomeTripulacao = dataPersonagem.tripulacao
        const imgPersonagem = dataPersonagem.imagem
        const imgTripulacao = dataPersonagem.tripulacaoImg
        const infoPersonagem = dataPersonagem.descricao


        const personagemElement = document.createElement("div");
        const liBtnElement = document.createElement("li");
        const imgElement = document.createElement("img");
        const imgElementBtn = document.createElement("img");
        const painelInfoElement = document.createElement("div");
        const logoElement = document.createElement("i");
        const h2Element = document.createElement("h2");
        const pElement = document.createElement("p");
        const btnElement = document.createElement("button");

        // configurações da imagem
        imgElement.classList.add("img");
        imgElement.src = "./src/img/" + imgPersonagem
        imgElement.alt = "Personagem " + nomePersonagem

        // configurações da logo, nome do personagem e descrição
        logoElement.classList.add("logo")
        h2Element.classList.add("nome-person")
        pElement.classList.add("info")
        h2Element.innerText = nomePersonagem
        pElement.innerText = infoPersonagem

        // configurações do painel info
        painelInfoElement.classList.add("painel-info")
        painelInfoElement.appendChild(logoElement)
        painelInfoElement.appendChild(h2Element)
        painelInfoElement.appendChild(pElement)

        if(nomePersonagem == "Monkey D Luffy"){
            personagemElement.classList.add("select")
        }
        personagemElement.classList.add("person")
        personagemElement.appendChild(imgElement)
        personagemElement.appendChild(painelInfoElement)

        mainElements.appendChild(personagemElement);

        // configurações da imagem do botão
        imgElementBtn.src = "./src/img/" + imgTripulacao
        imgElementBtn.alt = nomeTripulacao

        // configurações do botão
        if(nomeTripulacao == "Tripulação Luffy"){
            btnElement.classList.add("select")
        }
        btnElement.classList.add("btn")
        btnElement.appendChild(imgElementBtn)

        // configurações do agrupador de botões
        liBtnElement.appendChild(btnElement)
        mainBtnsElements.appendChild(liBtnElement)
    }
}
