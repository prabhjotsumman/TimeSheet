let ui = {
	setDisplayName: (name) => {
		document.getElementById("displayName").innerHTML = name;
	},

	setProfilePicture: (imgBlob) => {
		document.getElementById("profileImg").setAttribute("src", URL.createObjectURL(imgBlob));
	},

	updateOutput: (res) => {
		document.getElementById("output").innerHTML = JSON.stringify(res);
		let tableBody = document.getElementById("tableBody");
		tableBody.innerHTML += `<tr>
									<td class="column1"></td>
									<td class="column2"></td>
									<td class="column3"></td>
									<td class="column4"></td>
								</tr>`;
	},
};
