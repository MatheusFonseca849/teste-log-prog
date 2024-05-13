const timeOfDay = () => {
    const now = new Date()
    const hour = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    const currentTime = `${hour}:${minutes}:${seconds}`

    let output = document.createElement("div")
    output.classList = "outputField"

    let img = document.createElement("img")
    if(hour >= 5 && hour <= 12){
        img.src = "./src/images/manha.jpg"
    }else if(hour > 12 && hour <= 17){
        img.src = "./src/images/afternoon.jpeg"
    }else if(hour == 18){
        img.src = "./src/images/sunset.jpg"
    }else{
        img.src = "./src/images/night.jpg"
    }
    let p = document.createElement("p")
    p.innerHTML = `Agora são ${currentTime}`

    output.append(p, img)

    let section = document.getElementById("result")
    section.appendChild(output)
}

const ageVerifier = () => {

    let result = document.getElementById("result")

    let output = document.createElement("div")
    output.classList = "outputField"

    let form = document.createElement("form")
    form.id = "ageForm"

    let ageLabel = document.createElement("label")
    ageLabel.innerHTML = "Digite a idade:"

    let ageInput = document.createElement("input")
    ageInput.type = "number"

    ageLabel.appendChild(ageInput)

    let genderLabel = document.createElement("label")
    genderLabel.innerHTML = "Selecione o gênero:"

    let selectInput = document.createElement("select")
    selectInput.id = "gender"
    let placeholder = document.createElement("option")
    placeholder.innerHTML = "Selecione..."
    placeholder.value = ""
    let optionMasc = document.createElement("option")
    optionMasc.innerHTML = "Masculino"
    optionMasc.value = "masculino"
    let optionFem = document.createElement("option")
    optionFem.innerHTML = "Feminino"
    optionFem.value = "feminino"

    selectInput.append(placeholder, optionMasc, optionFem)

    genderLabel.append(selectInput)

    let btn = document.createElement("button")
    btn.id = "ageVerifierBtn"
    btn.innerText = "Verificar"
    btn.addEventListener("click", (e) => {
        e.preventDefault()
        if(ageInput.value == "" && selectInput.value == ""){
            alert("Valor inválido")
        }else{
            let p = document.createElement("p")
            p.innerHTML = `Detectamos uma pessoa de ${ageInput.value} anos do gênero ${selectInput.value}`
            output.append(p)
        }
    })

    form.append(ageLabel, genderLabel, btn)
    output.append(form)
    result.append(output)

}

const eventListeners = () => {
    let btn1 = document.getElementById("1")
    btn1.addEventListener("click", () => {
        timeOfDay()
    })

    let btn2 = document.getElementById("2")
    btn2.addEventListener("click", () => {
        ageVerifier()
    })
}

eventListeners()