function performGetRequest1() {
  var resultElement = document.getElementById('getResult1');

  resultElement.innerHTML = '';
  
  fetch(`https://countriesnode.herokuapp.com/v1/countries/`)
  .then(resp => resp.json()) 
  .then(resp => 
    resp.map(({name,continent,native,languages})=>({name,continent,native,languages}))) 
    

  .then((resp) => {
    for(var i = 0;i <resp.length;i++){
      resultElement.innerHTML += '<tr><td>' + 

      (resp[i].name + '\t') + '</td>' +

      '<td>' + (resp[i].continent + '\t') + '</td>' +

      '<td>' + (resp[i].native + '\t') + '</td>' +
      
      '<td>' + (resp[i].languages + '\t') + '</td>';
}
  }
  
)

.catch((error) => {
  resultElement.innerHTML = generateErrorHTMLOutput(error);
});

 
}



function generateErrorHTMLOutput(error) {
  return  '<h5>Something is wrong , please try again</h5>' 
}


function generateSuccessHTMLOutpuT(response) {
    return  '<h5>Currency:</h5>' + 
    '<pre>' + JSON.stringify(response.data.currency,         null, '\t') + '</pre>' + 
            '<h5>Area Code:</h5>' + 
            '<pre>' + JSON.stringify(response.data.phone, null, '\t') + '</pre>'; 
  }
 



  function performGetRequest2() {
    var resultElement = document.getElementById('getResult2');
    var codeID = document.getElementById('code').value;
    resultElement.innerHTML = '';
    
    const codeId = codeID;
    axios.get(`https://countriesnode.herokuapp.com/v1/countries/${codeId}`)
    
    .then(function(response) {
    resultElement.innerHTML = generateSuccessHTMLOutpuT(response);
})

  .catch(function (error) {
        resultElement.innerHTML = generateErrorHTMLOutpuT(error);
    });
  }


  function generateErrorHTMLOutpuT(error) {
    return  '<h5>Something is wrong , please try again</h5>' 
  }


  function clearOutpuT(){
    document.getElementById('getResult2').innerHTML='';
  }


  function clearOutput(){
    document.getElementById('getResult1').innerHTML='';
  } 