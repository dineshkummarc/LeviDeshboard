function toggleTab(obj, tabId){
	if(obj.id.indexOf('sub') >= 0){
	tabLength = document.getElementById('subTabContainer').getElementsByTagName('table').length;
	//alert(tabLength);
		for(var i=1; i<=tabLength; i++){
				document.getElementById('subtab' + i).className = 'subtab_inactive';
				if((document.getElementById('subTD' + i))){
					document.getElementById('subTD' + i).style.display = 'none';
				}
		}
		document.getElementById('subtab' + tabId).className = 'subtab_active';
		
		if((document.getElementById('subTD' + tabId))){
			document.getElementById('subTD' + tabId).style.display = 'block';
		}
	}else{
		for(var i=1; i<=3; i++){
				document.getElementById('tab' + i).className = 'tab_inactive';
				document.getElementById('td' + i).style.display = 'none';
		}
		document.getElementById('tab' + tabId).className = 'tab_active';
		document.getElementById('td' + tabId).style.display = 'block';
	}
}

function fn_lnkBox(id){
	if(document.getElementById('lnkBox'+id).style.display == 'none'){
		document.getElementById('lnkBox'+id).style.display = "block";
		document.getElementById('ar'+id).src = "images/actionButton_active.png";
	}else{
		document.getElementById('lnkBox'+id).style.display = "none";
		document.getElementById('ar'+id).src = "images/actionButton.png";
	}
}
function fn_displayForm(id){
	
		document.getElementById('form_'+id).style.display = "block";
		document.getElementById('data_'+id).style.display = "none";
	
}

function fn_displayData(id){
		document.getElementById('form_'+id).style.display = "none";
		document.getElementById('data_'+id).style.display = "block";
}




function writeMenu(){
	cellContent = '<table border="0" cellspacing="2" cellpadding="2" bgcolor="#FFFFFF">' +
                   '<tr> <td bgcolor="#97b43c" class="subLink"><a href="view_contract_inventorymanagement.html"><strong>View&nbsp;Contract</strong></a></td></tr>' +
                    '<tr> <td bgcolor="#97b43c" class="subLink"><a href="modify_contract_inventorymanagement.html"><strong>Modify&nbsp;Contract</strong></a></td></tr>' +
                     '<tr> <td bgcolor="#97b43c" class="subLink"><a href="#"><strong>Delete&nbsp;Contract</strong></a></td></tr>' +
                     '<tr><td bgcolor="#97b43c" class="subLink"><a href="#"><strong>Add&nbsp;Objects</strong></a></td></tr>' + 
                      '<tr><td bgcolor="#97b43c" class="subLink"><a href="#"><strong>View&nbsp;Objects</strong></a></td></tr>' +
                       '<tr> <td bgcolor="#97b43c" class="subLink"><a href="#"><strong>Modify&nbsp;Objects</strong></a></td></tr>' +
                        '</table>';
		document.write(cellContent);
}

function saleMenu(){
	cellContent = '<table border="0" cellspacing="2" cellpadding="2" bgcolor="#FFFFFF">' +
                   '<tr> <td bgcolor="#97b43c" class="subLink"><a href="#"><strong>Add&nbsp;Sale</strong></a></td></tr>' +
                    '<tr> <td bgcolor="#97b43c" class="subLink"><a href="#"><strong>Cancel&nbsp;Sale</strong></a></td></tr>' +
                        '</table>';
		document.write(cellContent);
}

function fn_RowActive(objRow){
	if(objRow.className != "activeRow")
	//alert(objRow.style.backgroundColor);
	if(objRow.style.backgroundColor != '#d8d8d8' && objRow.style.backgroundColor != 'rgb(216, 216, 216)'){
		objRow.style.backgroundColor = '#d8d8d8'; 		
	}else{
		objRow.style.backgroundColor = '#ffffff';
	}
}

function fn_hover(obj){
	obj.style.cursor = 'pointer';
}
function toggleForm(obj){
	//alert(obj.getElementById('img_toggle').src);
	imgToggle = document.getElementById('img_toggle'+obj);
	obj = document.getElementById('obj'+obj);
	
	//alert(imgToggle);
	if(obj.style.display != 'none'){
		obj.style.display = 'none';
		if(imgToggle)
		imgToggle.src = 'images/expanded_arrow.gif';
	}else {
		obj.style.display = '';
		if(imgToggle)
		imgToggle.src = 'images/collapsed_arrow.gif';
	}
}