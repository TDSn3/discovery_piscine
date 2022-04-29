var global = document.getElementById('global');
var findStyleGlobal = getComputedStyle(global);

var ft_list = document.getElementById('ft_list');
var findStyleList = getComputedStyle(ft_list);

var task = document.querySelector('.task');
var butonNew = document.getElementById('buttonNew');

var taskclass = document.getElementsByClassName('task');

document.cookie = 'stockDiv; max-age = 30*24*60*60';
var c = document.cookie;

console.log(c);

function deleteTask() {
	if (confirm('Delete ?'))
	{
		console.log("Delete this div");
		ft_list.removeChild(this);
		if (ft_list.childNodes.length > 1) 
		{
			global.style.height = parseInt(findStyleGlobal.height.replace(/px/,""))-88+"px";
			ft_list.style.height = parseInt(findStyleList.height.replace(/px/,""))-88+"px";
		}
	}
}

butonNew.addEventListener('click', function() {
	let txt = prompt();
	if (txt)
	{
		if (ft_list.childNodes.length > 1) 
		{
			global.style.height = parseInt(findStyleGlobal.height.replace(/px/,""))+88+"px";
			ft_list.style.height = parseInt(findStyleList.height.replace(/px/,""))+88+"px";
		}

		console.log('Click on button New');
		var newDiv = document.createElement('div');
		newDiv.className = "task";
		newDiv.onclick = deleteTask;
		var newDivTxt = document.createElement('h6');
		newDiv.appendChild(newDivTxt);
		newDivTxt.innerHTML=txt;
		ft_list.prepend(newDiv);
	}
})

