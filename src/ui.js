let ui = {
	setDisplayName: (name) => {
		document.getElementById("displayName").innerHTML = name;
	},

	setProfilePicture: (imgBlob) => {
		document.getElementById("profileImg").setAttribute("src", URL.createObjectURL(imgBlob));
	},

	updateOutput: (res) => {
		// document.getElementById("output").innerHTML = JSON.stringify(res);
		// console.log(res);
		document.getElementById("tableBody").innerHTML ='';
		JSONToCSVConvertor(res.value, "Timesheet Data", false);
		document.getElementById("tableDiv").style.display = 'block';
		// let tableBody = document.getElementById("tableBody");
		// tableBody.innerHTML += `<tr>
		// 							<td class="column1"></td>
		// 							<td class="column2"></td>
		// 							<td class="column3"></td>
		// 							<td class="column4"></td>
		// 						</tr>`;
	},
};
