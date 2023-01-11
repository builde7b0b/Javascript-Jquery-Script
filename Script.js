<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script>
$(document).ready(function(){
$("form").submit(function(){
var names= document.getElementById("fname").value;
alert("Hello " + names + "How are you?");
});
});
</script>
</head>
<body>
<form action="">
What is your name <input type="text" id="fname" name="FirstName" value=""><br>
 <input type="submit" value="Submit">
</form>
</body>
</html>
