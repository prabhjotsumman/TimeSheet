function JSONToCSVConvertor(JSONData, ReportTitle, downloadReport) {
    //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

    var CSV = 'sep=,' + '\r\n';

    //This condition will generate the Label/Header
    var row = "",
        titles = ["Day", "Date and Time", "Meeting Topic", "Duration"];
        totalDuration = 0;
        for (var i in titles) {
        row += titles[i] + ',';
    }
    row = row.slice(0, -1);

    //append Label row with line break
    CSV += row + '\r\n';
    let tableBody = document.getElementById("tableBody");
    //1st loop is to extract each row
    for (var i = 0; i < arrData.length; i++) {
        var row = ""
        newArr = [],
            feildsRequired = ["start", "end", "subject"];

        for (var j in feildsRequired) {
            if (typeof (arrData[i][feildsRequired[j]]) == 'object') {
                var day, dateTime, topic, duration, d1, d2;
                if (feildsRequired[j] == "start") {
                    day = moment(JSON.stringify(arrData[i][feildsRequired[j]].dateTime).slice(1, -2).replace(/ /g, '')).format("dddd");
                    dateTime = moment(JSON.stringify(arrData[i][feildsRequired[j]].dateTime).slice(1, -2).replace(/ /g, '')).format("DD MM YYYY, h:mm a");
                    d1 = new Date(JSON.stringify(arrData[i][feildsRequired[j]].dateTime).slice(1, -2).replace(/ /g, ''));

                } else if (feildsRequired[j] == "end") {
                    d2 = new Date(JSON.stringify(arrData[i][feildsRequired[j]].dateTime).slice(1, -2).replace(/ /g, ''));
                    duration = (d2.getTime() - d1.getTime()) / (1000 * 60 * 60);
                    totalDuration += duration;
                    duration = (d2.getTime() - d1.getTime()) / (1000 * 60 * 60) + ' Hrs';
                }
            } else {
                topic = arrData[i][feildsRequired[j]];
                newArr.push(day, dateTime, topic, duration);

                // let tableBody = document.getElementById("tableBody");
                if (downloadReport == false) {
                    tableBody.innerHTML += `<tr>
									<td class="column1">${day}</td>
									<td class="column2">${dateTime}</td>
									<td class="column3">${topic}</td>
									<td class="column4">${duration}</td>
                                </tr>`;

                }
            }
        }

        for (var k = 0; k < newArr.length; k++) {
            row += '"' + newArr[k] + '",';
        }

        row.slice(0, row.length - 1);

        //add a line break after each row
        CSV += row + '\r\n';
    }

    tableBody.innerHTML +=`<tr>
    <td class="column1">Total</td>
    <td></td>
    <td></td>
    <td class="column4">
    ${totalDuration}  Hrs
    </td>
    </tr>`;

    if (CSV == '') {
        alert("Invalid data");
        return;
    }
    if (downloadReport == true) {

        //Generate a file name
        var fileName = "MyReport_";
        //this will remove the blank-spaces from the title and replace it with an underscore
        fileName += ReportTitle.replace(/ /g, "_");

        //Initialize file format you want csv or xls
        var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

        // Now the little tricky part.
        // you can use either>> window.open(uri);
        // but this will not work in some browsers
        // or you will not get the correct file extension    

        //this trick will generate a temp <a /> tag
        var link = document.createElement("a");
        link.href = uri;

        //set the visibility hidden so it will not effect on your web-layout
        link.style = "visibility:hidden";
        link.download = fileName + ".csv";

        //this part will append the anchor tag and remove it after automatic click
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    }
}