function insert(num){
	document.form.textarea.value = document.form.textarea.value + num;
}

// Sum Function
function equal(){
	const result = document.form.textarea.value;
	document.form.textarea.value = eval(result);
}

// Clean number
function clean(){
	document.form.textarea.value = "";
}

// Delete textarea
function back(){
	const result = document.form.textarea.value;
	document.form.textarea.value = result.substring(0,result.length-1);
}