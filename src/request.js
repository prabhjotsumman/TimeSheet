let request = {
	getDisplayName: async () => {
		try {
			let response = await client
				.api("/me")
				.select("displayName")
				.get();
			return response.displayName;
		} catch (error) {
			console.error(error);
		}
	},

	getProfilePicture: async () => {
		try {
			let response = await client.api("/me/photo/$value").get();
			return response;
		} catch (error) {
			console.error(error);
		}
	},

	updateProfilePicture: async () => {
		let file = document.getElementById("uploadProfile").files[0],
			reader = new FileReader();

		reader.addEventListener(
			"load",
			() => {
				client
					.api("/me/photo/$value")
					.responseType(MicrosoftGraph.ResponseType.BLOB)
					.put(file)
					.then((res) => {
						request
							.getProfilePicture()
							.then((blob) => {
								ui.setProfilePicture(blob);
							})
							.catch((error) => {
								console.error(error);
							});
					})
					.catch((error) => {
						console.error(error);
					});
			},
			false,
		);

		if (file) {
			reader.readAsDataURL(file);
		}
	},

	getUserDetails: async () => {
		try {
			let res = await client.api("/me").get();
			return res;
		} catch (error) {
			throw error;
		}
	},

	getCalendarEvents: async (startDate, endDate) => {
		try {
			let res = await client.api("/me/calendar/events")
				// .filter("start/dateTime ge 2019-10-08T00:00 and start/dateTime le 2019-10-10T23:59")
				.filter("start/dateTime ge '" + startDate + "T00:00'" + "and start/dateTime le '" + endDate + "T23:59'")
				.select("start,end,subject")
				.orderby("start/dateTime")
			.get();
			return res;
		} catch (error) {
			throw error;
		}
	},
};
