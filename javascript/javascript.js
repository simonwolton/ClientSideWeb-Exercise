var defaultColours = new Array();
function grade()
{
	if ( (isChecked("question1") == 4) || (isChecked("question2") == 4) || (isChecked("question3") == 4) )
	{
		document.getElementById("score").innerHTML = "Please choose an answer for every question";
		document.getElementById("score").style.color = "red";
	}
	else
	{
		document.getElementById("score").innerHTML = isCorrect("question1", isChecked("question1"), "a") + isCorrect("question2", isChecked("question2"), "c") + isCorrect("question3", isChecked("question3"), "b") + "/3 answers correct.";
		document.getElementById("score").style.color = "green";
	}
		
}
function isCorrect(questionNumber, chosenRadio, correctAnswer)
{
	
	if (chosenRadio == correctAnswer)
	{
		document.getElementById(questionNumber).innerHTML = "Correct!";
		document.getElementById(questionNumber).style.color = "green";
		return 1;
	}
	else
	{
		document.getElementById(questionNumber).innerHTML = "Incorrect!";
		document.getElementById(questionNumber).style.color = "red";
		return 0;
	}
	
}
function isChecked(questionNumber)
{
	var uncheckedRadio = 0;
	for (i = 0; i <= 3; i++)
	{
		if(document.getElementsByName(questionNumber)[i].checked == true)
		{
			return document.getElementsByName(questionNumber)[i].value;
		}
		else
			uncheckedRadio++;
	}
	return uncheckedRadio;
}

function validate()
{
	var valid = true;
	var Name = document.forms["contactForm"]["name"].value;
	var mail = document.forms["contactForm"]["mail"].value;
	var message = document.getElementById("msg").value;
	if(Name == null || Name == "" || Name == " ")
	{
		  alert("Please enter your name");
		  return false;

	}
	if(/^[a-zA-Z ]+$/.test(Name) == false)
	{
		alert("Please enter your name correctly!");
		return false;
	}
	if(/.+\@.+\..+/.test(mail) == false)
	{
		alert("Please enter a valid email address");
		return false;
	}
	if(message == null || message == "" || message == " ")
	{
		alert("Please state your enquiry");
		return false;
	}
	return valid;
}
function send()
{
	if (validate())
		{
			var Name = document.forms["contactForm"]["name"].value;
			var mail = document.forms["contactForm"]["mail"].value;
			var message = document.getElementById("msg").value;
			message = message.split("\n").join("%0D%0A");
			var send = "mailto:info@solentsupplies.co.uk?Subject=General%20Enquiry&Body=" + message + "%0D%0A%0D%0ABest%20Regards,%0D%0A%0D%0A" + Name + "%0D%0A" + mail;
			window.open(send);
		}
	
}
window.onload = function setDefaultColour()
{

	defaultColours[0] = document.body.style.background;
	if (document.getElementById("content"))
		defaultColours[1] = document.getElementById("content").style.backgroundColor;
	defaultColours[2] = document.getElementById("search").style.backgroundColor;
	defaultColours[3] = document.getElementById("footerleft").style.backgroundColor;
	defaultColours[4] = document.getElementById("footermiddle").style.backgroundColor;
	defaultColours[5] = document.getElementById("footerright").style.backgroundColor;	
	if (document.getElementById("products"))
		defaultColours[6] = document.getElementById("products").style.backgroundColor;
	document.getElementById("default").style.borderColor = "white";
}
function getDefaultColour()
{
	document.body.style.background = defaultColours[0];
	if (document.getElementById("content"))
		document.getElementById("content").style.backgroundColor = defaultColours[1];
	document.getElementById("search").style.backgroundColor = defaultColours[3];
	
	document.getElementById("footerleft").style.backgroundColor = defaultColours[4];
	document.getElementById("footermiddle").style.backgroundColor = defaultColours[4];
	document.getElementById("footerright").style.backgroundColor = defaultColours[5];	
	if (document.getElementById("products"))
		document.getElementById("products").style.backgroundColor = defaultColours[6];
	var elems = document.getElementsByClassName("colorChangeButtons");
	for (var i = 0; i < elems.length; i++) 
	{
		elems[i].style.borderColor = "black";
	}
	document.getElementById("default").style.borderColor = "white";

}
function colourChange(colour,id)
{	
	result = colour.match(/.{1,2}/g);
	/*redValue = result[0].toString(16); /*converts to hex */
	var rgbArray = {R: parseInt(result[0], 16), G:parseInt(result[1], 16), B:parseInt(result[2], 16)}; /*hex to dec*/
	var div1 = {R: parseInt(result[0], 16), G:parseInt(result[1], 16), B:parseInt(result[2], 16)};;
	var div2 = {R: parseInt(result[0], 16), G:parseInt(result[1], 16), B:parseInt(result[2], 16)};;
	var div3 = {R: parseInt(result[0], 16), G:parseInt(result[1], 16), B:parseInt(result[2], 16)};;
	var div4 = {R: parseInt(result[0], 16), G:parseInt(result[1], 16), B:parseInt(result[2], 16)};;
	
	if (rgbArray.R == 0)
	{
		div1.R = rgbArray.R + 10;
		div2.R = rgbArray.R + 15;
		div3.R = rgbArray.R + 20;
		div4.R = rgbArray.R + 25;
		
	}
	else if (rgbArray.R > 1)
	{
		div1.R = Math.ceil(rgbArray.R - (rgbArray.R * 0.2));
		div2.R = Math.ceil(rgbArray.R - (rgbArray.R * 0.3));
		div3.R = Math.ceil(rgbArray.R + (rgbArray.R * 0.1));
		div4.R = Math.ceil(rgbArray.R - (rgbArray.R * 0.4));
		
	}
	else if (rgbArray.R <= 255)
	{
		div1.R = Math.floor(rgbArray.R + (rgbArray.R * 0.2));
		div2.R = Math.floor(rgbArray.R + (rgbArray.R * 0.3));
		div3.R = Math.floor(rgbArray.R - (rgbArray.R * 0.1));
		div4.R = Math.floor(rgbArray.R + (rgbArray.R * 0.4));
		
	}

	if (rgbArray.G == 0)
	{
		div1.G = rgbArray.G + 10;
		div2.G = rgbArray.G + 15;
		div3.G = rgbArray.G + 20;
		div4.G = rgbArray.G + 25;
		
	}
	else if (rgbArray.G > 1)
	{
		div1.G = Math.ceil(rgbArray.G - (rgbArray.G * 0.2));
		div2.G = Math.ceil(rgbArray.G - (rgbArray.G * 0.3));
		div3.G = Math.ceil(rgbArray.G + (rgbArray.G * 0.1));
		div4.G = Math.ceil(rgbArray.G - (rgbArray.G * 0.4));
		
	}
	else if (rgbArray.G <= 255)
	{
		div1.G = Math.floor(rgbArray.G + (rgbArray.G * 0.2));
		div2.G = Math.floor(rgbArray.G + (rgbArray.G * 0.3));
		div3.G = Math.floor(rgbArray.G - (rgbArray.G * 0.1));
		div4.G = Math.floor(rgbArray.G + (rgbArray.G * 0.4));
		
	}

	if (rgbArray.B == 0)
	{
		div1.B = rgbArray.B + 10;
		div2.B = rgbArray.B + 15;
		div3.B = rgbArray.B + 20;
		div4.B = rgbArray.B + 25;
		
	}
	else if (rgbArray.B > 1)
	{
		div1.B = Math.ceil(rgbArray.B - (rgbArray.B * 0.2));
		div2.B = Math.ceil(rgbArray.B - (rgbArray.B * 0.3));
		div3.B = Math.ceil(rgbArray.B + (rgbArray.B * 0.1));
		div4.B = Math.ceil(rgbArray.B - (rgbArray.B * 0.4));
		
	}
	else if (rgbArray.B <= 255)
	{
		div1.B = Math.floor(rgbArray.B + (rgbArray.B * 0.2));
		div2.B = Math.floor(rgbArray.B + (rgbArray.B * 0.3));
		div3.B = Math.floor(rgbArray.B - (rgbArray.B * 0.1));
		div4.B = Math.floor(rgbArray.B + (rgbArray.B * 0.4));
	}
	document.body.style.background = "#" + colour;
	
	if (document.getElementById("content"))
		document.getElementById("content").style.backgroundColor = "rgb(" + div1.R + "," + div1.G + "," + div1.B + ")";
	document.getElementById("search").style.backgroundColor = "rgb(" + div2.R + "," + div2.G + "," + div2.B + ")";
	
	document.getElementById("footerleft").style.backgroundColor = "rgb(" + div3.R + "," + div3.G + "," + div3.B + ")";
	document.getElementById("footermiddle").style.backgroundColor = "rgb(" + div3.R + "," + div3.G + "," + div3.B + ")";
	document.getElementById("footerright").style.backgroundColor = "rgb(" + div3.R + "," + div3.G + "," + div3.B + ")";	
	if (document.getElementById("products"))
		document.getElementById("products").style.backgroundColor = "rgb(" + div4.R + "," + div4.G + "," + div4.B + ")";
	/*redDec = 255 - redDec;
	greenDec = 255- greenDec;
	blueDec = 255 - blueDec;
	document.getElementById("footer").style.backgroundColor = "rgb(" + rgbArray.R.toString(16) + "," + rgbArray.G.toString(16) + "," + rgbArray.B.toString(16) + ")";*/
	
	var elems = document.getElementsByClassName("colorChangeButtons");
	for (var i = 0; i < elems.length; i++) 
	{
		elems[i].style.borderColor = "black";
	}
	document.getElementById(id).style.borderColor = "white";
}

