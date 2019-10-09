window.addEventListener(
	"load",
	() => {
		init();
	},
	false,
);

let client;
const init = async () => {
	const scopes = ["user.read", "profile", "User.ReadWrite", "Files.Read", "Files.Read.All", "Files.ReadWrite", "Files.ReadWrite.All", "Mail.Read", "Mail.ReadWrite", "Mail.Send","Calendars.Read"];
	const msalConfig = {
		auth: {
			clientId: Secrets.clientId,
			redirectUri: "http://localhost:8080",
		},
	};

	var msalApplication = new Msal.UserAgentApplication(msalConfig);
	const msalOptions = new MicrosoftGraph.MSALAuthenticationProviderOptions(scopes);
	const msalProvider = new MicrosoftGraph.ImplicitMSALAuthenticationProvider(msalApplication, msalOptions);
	client = MicrosoftGraph.Client.initWithMiddleware({
		debugLogging: true,
		authProvider: msalProvider,
	});

	bindEvents();
};

const bindEvents = () => {
	let requestsDOM = document.getElementById("requests");
	requestsDOM.addEventListener("click", (elem, event) => {
		let id = elem.srcElement.getAttribute("cell");
		let startIframe = document.getElementById("startDate");
		let startDate = startIframe.contentWindow.document.getElementById("datepicker").value;
		startDate = moment(startDate).format("YYYY-MM-DD");

		let endIframe = document.getElementById("endDate");
		let endDate = endIframe.contentWindow.document.getElementById("datepicker").value;
		endDate = moment(endDate).format("YYYY-MM-DD");
		switch (id) {

			case "2":
			
			// console.log(startDate,endDate);
				request
					.getCalendarEvents(startDate,endDate)
					.then((res) => {
						ui.updateOutput(res);

					})
					.catch((error) => {
						ui.updateOutput(error);
					});
				break;

				case "3":
				request
					.getCalendarEvents(startDate, endDate)
					.then((res) => {
						JSONToCSVConvertor(res.value, "TimeSheet", true);

					})
					.catch((error) => {
						ui.updateOutput(error);
					});
				break;
		}
	});
};
