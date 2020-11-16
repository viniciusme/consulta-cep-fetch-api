// Selecionamos o CEP, no documento HTML no campo texto no CEP
const cep = document.querySelector("#cep");

// Trata o resultado que veio da promessa
const showData = (result)=>{

    // Para cada um dos campos que veio no objeto, armazenar o nome na variável campo
    for(const campo in result) {

        // Aqui ele verifica os campos que vamos usar, e descarta aqueles não vamos usar
        if(document.querySelector("#"+campo)) {

            document.querySelector("#"+campo).value = result[campo]

        }

    }

}

// Quando tira o foco do campo CEP, ele mostra o que foi digitado e já faz a consulta na API
cep.addEventListener("blur", (e)=> {

    let search = cep.value.replace("-", "")

    const options = {

        method: 'GET',
        mode: 'cors',
        cache: 'default'
        
    }

    fetch(`https://viacep.com.br/ws/${search}/json`, options)

    //Se der certo
    .then(response => { response.json()
        
        .then(data => showData(data))

    })


    // Se der errado
    .catch(e => console.log('Deu Erro: '+e,message))

})