function genero(){
	var genero;

	genero = document.getElementById("genero").value;

	if(genero == 1){
		document.getElementById("genero") = "selecionou a op�ao: Masculino";
	}
	else{
		document.getElementById("genero") = "selecionou a op�ao: Femenino";

	}
}

function idade(){
	var idade;

	idade=document.getElementById("idade").value;

	switch(idade){

	case "1":
		document.getElementById("idade") = "selecionou a op�ao: Menor de idade";
	break;

	case "2":
		document.getElementById("idade") = "selecionou a op�ao: Maior de idade";
	break;
	default:
		case "1";
		document.getElementById("idade") = "selecionou a op�ao: Maior de idade";
	}

}

function for(){

    var Repetir = document.getElementById("Repetir"),value;

	for(i=0; i<Repetir; i++){
		document.getElementById("Repetir"),value;
	}

}