var jsjp = new Object;
jsjp.getCode = function(){
	var code = document.getElementById("code").value;
	return code;
}
jsjp.run = function(){
		var jscode = jsjp.getjsCode();
		//Run
		document.getElementById("jscode").value = jscode;
		eval(jscode);
}
jsjp.getjsCode = function(){
	var code = jsjp.getCode();
	//関数系,特殊文字列
	code = code.split("#言う(").join("alert(");
	code = code.split("#アラート(").join("alert(");
	code = code.split("#2択(").join("confirm(");
	code = code.split("#質問(").join("prompt(");
	code = code.split("#変数").join("var");
	code = code.split(")。").join(");");
	code = code.split("#またもし(").join("else if(");
	code = code.split("#もし(").join("if(");
	code = code.split("#違う").join("else");
	code = code.split("#はい").join("true");
	code = code.split("#いいえ").join("false");
	code = code.split("#は").join("=");
	code = code.split("#時間(").join("new Date(");
	code = code.split("#時()").join("getHours()");
	code = code.split("#分()").join("getMinutes()");
	code = code.split("#秒()").join("getSeconds()");
	code = code.split("#年()").join("getFullYear()");
	code = code.split("#月()").join("getMonth");
	code = code.split("#日()").join("getDate()");
	//変数系
	code = code.split("#URL=").join("location.href=");
	return code;
}