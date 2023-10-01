const path = "projetos/one-piece";
const urlGetDados = "https://pingobras-sg.glitch.me/" + path;

function getData() {
    const options = {
        method: "GET",
        mode: "cors",
        headers: {
            "content-type": "application/json;charset=utf-8",
            "Authorization": "snve072509ç$",
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

function loader(database){

}