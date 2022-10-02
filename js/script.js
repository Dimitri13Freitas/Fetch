if (document.documentElement.classList.contains('joke')){
  const btn = document.querySelector('button');
  const resultado = document.querySelector('.resultado');

  btn.addEventListener('click', joke);

  function joke() {
    const url = 'https://api.chucknorris.io/jokes/random';

    resultado.innerHTML = '<b>Carregando...</b>'

    fetch(url)
    .then(response => {
      response.json()
      .then(obj => {
        resultado.innerHTML = obj.value;
      })
    })

  }
joke();
}

if(document.documentElement.classList.contains('cripto')) {
  const span = document.querySelector('.content span')

  setInterval(btc(), 20000);
  
  function btc() {
    fetch("https://blockchain.info/ticker")
    .then(response => {
    response.json()
    .then(obj => {
      console.log(obj);
      span.innerText = obj.BRL.buy + ',00 R$'
      })
    })
  
  }
}


