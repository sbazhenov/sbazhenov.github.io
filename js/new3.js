var fs = require("fs");

var friendsData = [
    {
		"firstName": "Petrucco"
	}
];
		

fs.writeFile("out.txt", friendsData[0].firstName, "utf-8");