let data;


let fichier = document.getElementById("fichierPlan");
let jsonString;

function handle_fr(e) {
    var files = e.target.files, f = files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      var data = new Uint8Array(e.target.result);
      var wb = XLSX.read(data, {type: 'array'});
      process_wb(wb);
    };
    reader.readAsArrayBuffer(f);
    
  }
  fichier.addEventListener('change', handle_fr, false);

  function process_wb(wb){
    console.log(wb);
    let salle = wb.Sheets[wb.SheetNames[0]];
    let temp=XLSX.utils.sheet_to_json(salle);
    let i;
    data=[];
    for(i=0;i<temp.length;i++){
        let ligne = [temp[i].__EMPTY.substring(0,8), temp[i].__EMPTY.substring(8,100), temp[i].__EMPTY_1];

        if(temp[i].__EMPTY.substring(0,2)=="11"){
        data.push(ligne);
        }

      
    }
    jsonString = JSON.stringify(Object.assign({}, data));
    console.log(jsonString);


  }