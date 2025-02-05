const tvOptions = document.getElementById("tv-options");
const lightingOptions = document.getElementById("lighting-options");
const internetCommunicationOptions = document.getElementById("internetCommunication-options");
const computersOptions = document.getElementById("computers-options");
const kitchenItemsOptions = document.getElementById("kitchenItems-options");

function showSubcategory() {
  var category = document.getElementById("category").value;
   
  if (category === "television") {

    tvOptions.style.display = "block";
    lightingOptions.style.display = "none"; 
    internetCommunicationOptions.style.display = "none";
    computersOptions.style.display = "none";
    kitchenItemsOptions.style.display = "none";

  } else if (category === "Iluminación") {

    lightingOptions.style.display = "block";
    tvOptions.style.display = "none";
    internetCommunicationOptions.style.display = "none";
    computersOptions.style.display = "none";
    kitchenItemsOptions.style.display = "none";

  }else if(category=== "Internet y Comunicación"){

    internetCommunicationOptions.style.display = "block";
    tvOptions.style.display = "none";
    lightingOptions.style.display = "none";
    computersOptions.style.display = "none";
    kitchenItemsOptions.style.display = "none";
    
  }else if(category === "computadoras"){

    computersOptions.style.display = "block";
    tvOptions.style.display = "none";
    lightingOptions.style.display = "none";
    internetCommunicationOptions.style.display = "none";
    kitchenItemsOptions.style.display = "none";

  }else if(category==="Elementos de cocina"){

    kitchenItemsOptions.style.display = "block";
    computersOptions.style.display = "none";
    tvOptions.style.display = "none";
    lightingOptions.style.display = "none";
    internetCommunicationOptions.style.display = "none";

  } else {

    document.getElementById("details").style.display = "none";  

  }
}
        
    
function showTVDetails() {
 var tvType = document.getElementById("tv-type").value;
 var tvDetails = document.getElementById("details");
    
 if (tvType === "barrigon-14-17") {
 
    document.getElementById("power").value =70;
    document.getElementById("quantity").value = 1;
    document.getElementById("usage").value = 4;
    tvDetails.style.display = "block";  
 } else if (tvType === "barrigon-25-32") {
 
    document.getElementById("power").value = 110;
    document.getElementById("quantity").value = 1;
    document.getElementById("usage").value = 4;
    tvDetails.style.display = "block"; 
 } else if (tvType === "led-less-32") {
    document.getElementById("power").value = 70;
    document.getElementById("quantity").value = 1;
    document.getElementById("usage").value = 4;
    tvDetails.style.display = "block"; 
  } else if (tvType === "led-38-plus") {
    document.getElementById("power").value = 100;
    document.getElementById("quantity").value = 1;
    document.getElementById("usage").value = 4;
    tvDetails.style.display = "block"; 
  
  } else {
    tvDetails.style.display = "none";  
  }
}
   
function showLightingDetails() {
  var lightingType = document.getElementById("lighting-type").value;
  var details = document.getElementById("details");

  if (lightingType === "led-bulb") {
  
    document.getElementById("power").value = 10; 
    document.getElementById("quantity").value = 1;
    document.getElementById("usage").value = 4;
    details.style.display = "block"; 
  } else if (lightingType === "fluorescent-bulb") {
    
    document.getElementById("power").value = 15; 
    document.getElementById("quantity").value = 1;
    document.getElementById("usage").value = 4;
    details.style.display = "block";  
  } else if (lightingType === "incandescent-bulb") {
    
    document.getElementById("power").value = 60; 
    document.getElementById("quantity").value = 1;
    document.getElementById("usage").value = 4;
    details.style.display = "block";  
  } else {
    details.style.display = "none";  
  }
}

function showinternetCommunicationDetails() {

  var internetCommunicationType = document.getElementById("internetCommunication-type").value;
  var details = document.getElementById("details");

  if (internetCommunicationType === "phone"){
    document.getElementById("power").value = 12; 
    document.getElementById("quantity").value = 1;
    document.getElementById("usage").value = 2;
    details.style.display = "block"; 
  } else if (internetCommunicationType === "internet"){
    document.getElementById("power").value = 20; 
    document.getElementById("quantity").value = 1;
    document.getElementById("usage").value = 24;
    details.style.display = "block"; 
  }else{
    details.style.display = "none";
  }
}

function showcomputersDetails(){

  var computersType = document.getElementById("computers-type").value;
  var details = document.getElementById("details");
  
  if (computersType === "laptop") {
    document.getElementById("power").value = 60; 
    document.getElementById("quantity").value = 1;
    document.getElementById("usage").value = 4;
    details.style.display = "block"; 
  } else if (computersType === "desktop-computer"){
    document.getElementById("power").value = 150; 
    document.getElementById("quantity").value = 1;
    document.getElementById("usage").value = 4;
    details.style.display = "block"; 
  } else if (computersType === "sound-equipment"){
    document.getElementById("power").value = 100; 
    document.getElementById("quantity").value = 1;
    document.getElementById("usage").value = 4;
    details.style.display = "block";
  }else{
    details.style.display = "none";
 }
}
function showkitchenItemsDetails(){

  var kitchenItemsType = document.getElementById("kitchenItems-type").value;
  var details = document.getElementById("details");

  if (kitchenItemsType === "riceCooker"){
    document.getElementById("power").value = 400; 
    document.getElementById("quantity").value = 1;
    document.getElementById("usage").value = 1;
    details.style.display = "block";
  }else if(kitchenItemsType=== "blender"){
    document.getElementById("power").value = 2400; 
    document.getElementById("quantity").value = 1;
    document.getElementById("usage").value = 1;
    details.style.display = "block";
  }else if(kitchenItemsType=== "microwave"){
    document.getElementById("power").value = 6000; 
    document.getElementById("quantity").value = 1;
    document.getElementById("usage").value = 1;
    details.style.display = "block";
  }else{
    details.style.display = "none";
  }
}
var selectedItems = [];

var totalPower = 0;

function addToList() {
  var category = document.getElementById("category").value;
  var power = parseInt(document.getElementById("power").value);
  var quantity = parseInt(document.getElementById("quantity").value); 
  var usage = parseInt(document.getElementById("usage").value); 
  var valor = document.getElementById("consumodiario")

  if (category && power && quantity && usage) {
    
    var itemDescription = `${category} - Potencia: ${power}W, Cantidad: ${quantity}, Uso: ${usage} horas`;

    selectedItems.push(itemDescription);

    totalPower += power;  
    valor.value =totalPower;
    
    updateItemList();

    updateTotalPower();
  } else {
    alert('Por favor, completa todos los campos.');
  }
}

function updateItemList() {
  var itemList = document.getElementById("itemList");
  itemList.innerHTML = '';  

  selectedItems.forEach(function(item) {
    var listItem = document.createElement('li');
    listItem.textContent = item;
    itemList.appendChild(listItem);
  });
}

function updateTotalPower() {
  document.getElementById("totalPower").textContent = `Potencia total: ${totalPower}W`;
}

function sumar() {
  var horaspico = parseFloat(document.getElementById("horaspico").value);
  var consumodiario = parseFloat(document.getElementById("consumodiario").value);

  if (isNaN(horaspico) || isNaN(consumodiario)) {
      document.getElementById("resultado").textContent = "Por favor ingrese valores válidos.";
      return;
  }

  if (selectedItems.length === 0) {
      var resultado = (consumodiario * 1.3) / (horaspico * 350);
  } else {
      if (typeof totalPower === 'undefined') {
          document.getElementById("resultado").textContent = "Por favor, asegúrese de que 'totalPower' esté definido.";
          return;
      }
      var resultado = (totalPower * 1.3) / (horaspico * 350);
  }

  var resultadoEntero = Math.round(resultado);

  document.getElementById("resultado").textContent = resultadoEntero;
}






