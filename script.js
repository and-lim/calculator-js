function insert(num){
	document.form.textarea.value = document.form.textarea.value + num;
}

// Sum Function
function equal(){
	var hasil = document.form.textarea.value;
	document.form.textarea.value = eval(hasil);
}

// Clean number
function clean(){
	document.form.textarea.value = "";
}

// Delete textarea
function back(){
	var hasil = document.form.textarea.value;
	document.form.textarea.value = hasil.substring(0,hasil.length-1);
}