const bntadd = document.getElementById('add');
const txtnome = document.getElementById('nome');
const txtpeso = document.getElementById('peso');
const txtaltura = document.getElementById('altura');
const txtgordura = document.getElementById('gordura');
const tabela = document.getElementById('elementos');
const cliente = document.getElementById('cliente');


bntadd.addEventListener('click', addItem);

cliente.addEventListener('keyup', pesquisaPaciente);


function addItem() {

  const nome = document.getElementById('nome').value;
  const peso = document.getElementById('peso').value;
  const altura = document.getElementById('altura').value;
  const gordura = document.getElementById('gordura').value;

  
  var imc = parseFloat(peso) / (parseFloat(altura)*parseFloat(altura));
  

  var tr = document.createElement('tr');
  var iten1 = document.createElement('td');
  var iten2 = document.createElement('td');
  var iten3 = document.createElement('td');
  var iten4 = document.createElement('td');
  var iten5 = document.createElement('td');

  iten1.textContent = nome;
  iten2.textContent = peso;
  iten3.textContent = altura;
  iten4.textContent = gordura;
  iten5.textContent = imc.toFixed(2);

 
  if(nome == ""){
    alert("Preencha o campo!!");
  }
  else if(peso == ""){
    alert("Preencha o campo!!");
  }
  else if(altura == ""){
    alert("Preencha o campo!!");
  }
  else if(gordura == ""){
    alert("Preencha o campo!!");
  }

  if(nome && peso && altura && gordura != ""){
    
        tabela.appendChild(tr);
        tr.appendChild(iten1);
        tr.appendChild(iten2);
        tr.appendChild(iten3);
        tr.appendChild(iten4);
        tr.appendChild(iten5);

       }

      }
          
    function pesquisaPaciente() {
      var nomeFiltro = cliente.value;
      for (var i = 1; i < tabela.rows.length; i++) {
          var conteudoCelula = tabela.rows[i].cells[0].innerText;
          var corresponde = conteudoCelula.toLowerCase().indexOf(nomeFiltro) >= 0;
          tabela.rows[i].style.display = corresponde ? '' : 'none';
      }
  }











