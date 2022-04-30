var global = document.getElementById("global");
var findStyleGlobal = getComputedStyle(global);

var ft_list = document.getElementById("ft_list");
var findStyleList = getComputedStyle(ft_list);

var task = document.querySelector(".task");
var butonNew = document.getElementById("buttonNew");

var taskclass = document.getElementsByClassName("task");
var j = 0;

function stockNumChr()
{
	if (document.cookie)
	{
		for (var i = 0 ; document.cookie.split(";")[i]; i++)
		{
			if (document.cookie.split(";")[i].split("=")[0] == "stockNum" || document.cookie.split(";")[i].split("=")[0] == " stockNum")
			{
				return (document.cookie.split(";")[i].split("=")[1]);
			}	
		}
		return (0);
	}
	else
		return (0);
}

if (!stockNumChr())
{
	console.log("Creat Cookies stockNum");
	document.cookie = "stockNum" + "=" + 1 + "; expires = 01 Jan 3000 00:00:00 UTC";
}

function addCookie(idOfDiv, content) 
{
	document.cookie = idOfDiv + "=" + content + "; expires = 01 Jan 3000 00:00:00 UTC";
}

for (0 ; document.cookie.split(";")[j]; j++)
{
	if (document.cookie.split(";")[j].split("=")[0] == "stockNum" || document.cookie.split(";")[j].split("=")[0] == " stockNum")
	{
		console.log("Cookie stockNum = "+stockNumChr());
	}
	else
	{
		var newDiv = document.createElement("div");
		newDiv.className = "task";
		newDiv.id = document.cookie.split(";")[j].split("=")[0];
		newDiv.onclick = deleteTask;
		var newDivTxt = document.createElement("h6");
		newDiv.appendChild(newDivTxt);
		newDivTxt.innerHTML = document.cookie.split(";")[j].split("=")[1];
		ft_list.prepend(newDiv);
	}
}
if (j > 1) 
{
	global.style.height = parseInt(findStyleGlobal.height.replace(/px/,"")) + (88 * (j - 2)) + "px";
	ft_list.style.height = parseInt(findStyleList.height.replace(/px/,"")) + (88 * (j - 2)) + "px";
}

function deleteTask() 
{
	if (confirm("Delete ?"))
	{
		console.log("Delete this div");
		ft_list.removeChild(this);
		if (ft_list.childNodes.length > 1) 
		{
			global.style.height = parseInt(findStyleGlobal.height.replace(/px/,"")) - 88 + "px";
			ft_list.style.height = parseInt(findStyleList.height.replace(/px/,"")) - 88 + "px";
		}
		document.cookie = this.id + "=" + this + "; expires = Thu, 01 Jan 1970 00:00:00 UTC";
	}
}

butonNew.addEventListener("click", function() 
{
	let txt = prompt();
	if (txt)
	{
		if (ft_list.childNodes.length > 1) 
		{
			global.style.height = parseInt(findStyleGlobal.height.replace(/px/,"")) + 88 + "px";
			ft_list.style.height = parseInt(findStyleList.height.replace(/px/,"")) + 88 + "px";
		}

		console.log("Click on button New");
		var newDiv = document.createElement("div");
		newDiv.className = "task";
		newDiv.id = parseInt(stockNumChr().replace(/ /,""));
		newDiv.onclick = deleteTask;
		var newDivTxt = document.createElement("h6");
		newDiv.appendChild(newDivTxt);
		newDivTxt.innerHTML = txt;
		addCookie(parseInt(stockNumChr().replace(/ /,"")), txt);
		ft_list.prepend(newDiv);
		document.cookie = "stockNum" + "=" + (parseInt(stockNumChr().replace(/ /,"")) + 1) + "; expires = 01 Jan 3000 00:00:00 UTC";
	}
})
