setTimeout(sys, 5000)

function sys() {
    const btns = document.querySelectorAll(".btn");
    const personagens = document.querySelectorAll(".person")

    personagens.forEach(personagem => {

    });
    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            const personagem = personagens[i];
            desselecionar()
            btn.classList.add("select")
            personagem.classList.add("select")
        })
    })

    function desselecionar() {
        const btnSelect = document.querySelector(".btn.select");
        const personagemSelect = document.querySelector(".person.select");

        personagemSelect.classList.remove("select");
        btnSelect.classList.remove("select");
        console.log("Desselecionando elementos!")
    }
}
