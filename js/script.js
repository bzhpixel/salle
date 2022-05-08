
let searchBTN = document.getElementById("searchBTN");
searchBTN.addEventListener("input", checkSearchInput);

function checkSearchInput(e){
  let text = e.target.value;
  if(text.length == 4){
    isInArray("1100"+text);
  } else if(text.length == 8){
    isInArray(text);
  }
  
}



function isInArray(txt){
  let i;
  for(i=0;i<Object.keys(salleArome).length;i++){
    let row= salleArome[i][0];
    if(row == txt){
      afficher(i);
    }
  }
}


function afficher(i){
  document.getElementsByClassName('code')[0].innerHTML = salleArome[i][0];
  document.getElementsByClassName('designation')[0].innerHTML = salleArome[i][1];
  document.getElementsByClassName('emplacement')[0].innerHTML = salleArome[i][2];
}