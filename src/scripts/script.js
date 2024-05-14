const resetResults = () => {
  let results = document.getElementById("result");
  results.innerHTML = "";
};

const createTemplate = () => {
  let div = document.createElement("div");
  div.className = "outputField";

  return div;
};

const timeOfDay = () => {
  resetResults();

  const now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const currentTime = `${hour}h${minutes}min${seconds}s`;

  let output = createTemplate();

  let img = document.createElement("img");
  if (hour >= 5 && hour <= 12) {
    img.src = "./src/images/ex01/manha.jpg";
  } else if (hour > 12 && hour <= 17) {
    img.src = "./src/images/ex01/afternoon.jpg";
  } else if (hour == 18) {
    img.src = "./src/images/ex01/sunset.jpg";
  } else {
    img.src = "./src/images/ex01/night.jpg";
  }
  let p = document.createElement("p");
  p.innerHTML = `Agora são ${currentTime}`;

  output.append(p, img);

  let section = document.getElementById("result");
  section.appendChild(output);
};

const ageVerifier = () => {
  resetResults();

  let result = document.getElementById("result");

  let output = createTemplate();

  let form = document.createElement("form");
  form.classList = "ageForm";

  let ageLabel = document.createElement("label");
  ageLabel.innerHTML = "Digite o ano de nascimento:";

  let ageInput = document.createElement("input");
  ageInput.type = "number";

  ageLabel.appendChild(ageInput);

  let genderLabel = document.createElement("label");
  genderLabel.innerHTML = "Selecione o gênero:";

  let selectInput = document.createElement("select");
  selectInput.id = "gender";

  let placeholder = document.createElement("option");
  placeholder.innerHTML = "Selecione...";
  placeholder.value = "";

  let optionMasc = document.createElement("option");
  optionMasc.innerHTML = "Masculino";
  optionMasc.value = "masculino";

  let optionFem = document.createElement("option");
  optionFem.innerHTML = "Feminino";
  optionFem.value = "feminino";

  selectInput.append(placeholder, optionMasc, optionFem);

  genderLabel.append(selectInput);

  let outputMessage = document.createElement("div");
  outputMessage.style.textAlign = "center";

  const currentYear = new Date().getFullYear();

  let btn = document.createElement("button");
  btn.classList.add("formBtn");
  btn.innerText = "Verificar";
  btn.addEventListener("click", (e) => {
    outputMessage.innerHTML = "";
    e.preventDefault();

    const age = currentYear - ageInput.value;
    if (ageInput.value == "" || selectInput.value == "" || age < 0) {
      alert("Valor inválido detectado");
    } else {
      let p = document.createElement("p");
      p.innerHTML = `Detectamos uma pessoa de ${age} anos do gênero ${selectInput.value}`;

      let img = document.createElement("img");
      if (selectInput.value == "masculino") {
        if (age >= 0 && age < 10) {
          img.src = "./src/images/ex02/masculino_10anos.jpeg";
        } else if (age < 21) {
          img.src = "./src/images/ex02/masculino_21anos.jpg";
        } else if (age < 55) {
          img.src = "./src/images/ex02/masculino_55anos.jpg";
        }
      } else if ((selectInput.value = "feminino")) {
        if (age >= 0 && age < 10) {
          img.src = "./src/images/ex02/feminino_10anos.jpg";
        } else if (age < 21) {
          img.src = "./src/images/ex02/feminino_21anos.jpg";
        } else if (age < 55) {
          img.src = "./src/images/ex02/feminino_55anos.jpeg";
        }
      }

      outputMessage.append(p, img);
    }
  });

  form.append(ageLabel, genderLabel, btn, outputMessage);
  output.append(form);
  result.append(output);
};

const counter = () => {
  resetResults();
  const display = document.getElementById("result");

  const template = createTemplate();

  const result = document.createElement("div");
  result.classList = "outputResult";

  const form = document.createElement("form");
  form.classList = "outputForm";

  const beginingLabel = document.createElement("label");
  beginingLabel.innerHTML = "Início";

  const beginingInput = document.createElement("input");
  beginingInput.type = "number";
  beginingInput.placeholder = "Digite o primeiro número";
  beginingInput.required = true;

  beginingLabel.append(beginingInput);

  const endLabel = document.createElement("label");
  endLabel.innerHTML = "Fim";

  const endInput = document.createElement("input");
  endInput.type = "number";
  endInput.placeholder = "Digite o número final";
  endInput.required = true;
  endLabel.append(endInput);

  const stepsLabel = document.createElement("label");
  stepsLabel.innerHTML = "Passos";

  const stepsInput = document.createElement("input");
  stepsInput.type = "number";
  stepsInput.placeholder = "Digite o intervalo";
  stepsInput.required = true;
  stepsLabel.append(stepsInput);

  const btn = document.createElement("button");
  btn.classList = "formBtn";
  btn.innerHTML = "Contar";

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    result.innerHTML = "";

    if (
      beginingInput.value == "" ||
      endInput.value == "" ||
      stepsInput.value == ""
    ) {
      window.alert("Valor inválido detectado");
    } else {
      result.innerHTML = "Conntando:";
      const start = Number(beginingInput.value);
      const end = Number(endInput.value);
      const steps = Number(stepsInput.value);
      console.log(start, end, steps);
      if (start < end) {
        for (let i = start; i <= end; i += steps) {
          console.log(i);
          result.innerHTML += `${i} \u{1F449}`;
        }
      } else {
        for (let i = start; i >= end; i -= steps) {
          console.log(i);
          result.innerHTML += `${i} \u{1F449}`;
        }
      }
      result.innerHTML += "\u{1F3C1}";
    }
  });

  form.append(beginingLabel, endLabel, stepsLabel, btn);

  template.append(form, result);

  display.append(template);
};

const multiplicationTable = () => {
    resetResults()
    let display = document.getElementById("result")

    let template = createTemplate()

    let result = document.createElement("div")
    result.classList = "outptutResult"

    let form = document.createElement("form")

    let numberLabel = document.createElement("label")
    numberLabel.innerHTML = "Número:"

    let numberInput = document.createElement("input")
    numberInput.type = "number"

    numberLabel.append(numberInput)

    let btn = document.createElement("button")
    btn.classList = "formBtn"
    btn.innerHTML = "Ver tabuada"

    btn.addEventListener("click", (e) => {
        e.preventDefault()
        result.innerHTML = ""
        const number = Number(numberInput.value)
        if (number == 0) {
            alert("Valor inválido detectado")
        }else{
            let list = document.createElement("ul")
    
            for (let i = 0; i <= 10; i++) {
                list.innerHTML += `<li>${number} x ${i} = ${number * i}</li>` 
            }
            result.append(list)
        }
    })

    form.append(numberLabel, btn)

    template.append(form, result)

    display.append(template)
}


const numberAnalizer = () => {

    console.log("numberAnalizer rodou")
    resetResults()

    const display = document.getElementById("result")
    const template = createTemplate()

    
    const result = document.createElement("div")
    result.classList = "outputResult"
    
    const userFeedback = document.createElement("div")
    userFeedback.classList = "userFeedback"

    const form = document.createElement("form")
    
    const numberLabel = document.createElement("label")
    numberLabel.innerHTML = "Insira um número"

    const numberInput = document.createElement("input")
    numberInput.type = "number"
    numberInput.step = "any"

    numberLabel.append(numberInput)

    const btn = document.createElement("button")
    btn.classList = "formBtn"
    btn.innerHTML = "Adicionar"

    const array = []

    btn.addEventListener("click", (e) => {
        e.preventDefault()
        let numberValue = Number(numberInput.value)
        if(numberValue > 0 && numberValue <= 100 && array.includes(numberValue) == false){
            array.push(numberValue)
            userFeedback.innerHTML += `<li>Valor ${numberValue} inserido</li>`
        }else{
            alert("Valor inválido ou já adicionado")
        }
        
      })
      let analizerBtn = document.createElement("button")
      analizerBtn.classList = "formBtn"
      analizerBtn.innerHTML = "Verificar"
      analizerBtn.addEventListener("click", () => {
        console.log("clicked")
        let greatestNumber = array[0]
        let smallestNumber = array[0]
        let sum = array.reduce((a, c) => a+c, 0)
        for(let i = 0 ; i <= array.length ; i++){
          if(array[i] > greatestNumber){
            greatestNumber = array[i]
          }
          if(array[i] < smallestNumber){
            smallestNumber = array[i]
          }
        }
        console.log(greatestNumber, smallestNumber, sum)
        result.innerHTML = `
          <p>O menor número da lista é ${smallestNumber}</p>
          <p>O maior número da lista é ${greatestNumber}</p>
          <p>A soma dos valores é ${sum}</p>
          <p>Foram inseridos ${array.length} números na lista</p>
        `
      })

    form.append(numberLabel, btn)


    template.append(form, userFeedback, analizerBtn, result)
    display.append(template)

}


const eventListeners = () => {
  let btn1 = document.getElementById("1");
  btn1.addEventListener("click", () => {
    timeOfDay();
  });

  let btn2 = document.getElementById("2");
  btn2.addEventListener("click", () => {
    ageVerifier();
  });

  let btn3 = document.getElementById("3");
  btn3.addEventListener("click", () => {
    counter();
  });

  let btn4 = document.getElementById("4")
  btn4.addEventListener("click", () => {
    multiplicationTable()
  })

  let btn5 = document.getElementById("5")
  btn5.addEventListener("click", () => {
    numberAnalizer()
  })
};

eventListeners();