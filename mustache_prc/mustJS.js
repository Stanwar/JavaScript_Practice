var data = {
	students : [
		{
			firstName : "Sharad",
			lastName : "Tanwar",
			school : "UIC",
			fullTime : true
		},
		{
			firstName : "Addy",
			lastName : "Paddy",
			school : "UTD",
			fullTime : false
		},
		{
			firstName : "PK",
			lastName : "Garg",
			school : "UIC",
			fullTime : true
		},
		{
			firstName : "SH",
			lastName : "Khan",
			school : "UIC",
			fullTime : false
		}
	]
};
var tpl = "Students : <ul>{{#students}} <li>{{firstName}} {{lastName}}" + 
			"{{#fullTime}} school {{/fullTime}}</li>{{/students}}</ul>";
var html = Mustache.to_html(tpl,data);
$('#studentsInfo').html(html);