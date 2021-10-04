const getHostnameFromString = function (url: string) {
	const result = url.replace(/\\/g, '/').match(/\/\/([^/]*)/);
	if (!result) return '';
	return result[1];
};

function doGet() {
	const ss_id = '1c25pvMyjQ89OBCvB9whCQQLM_BPXKyY7umsj5wmpP2k'
	const sheet_name = 'NOT_SSL_LIST'
	const sheet = SpreadsheetApp.openById(ss_id).getSheetByName(sheet_name);
	if (sheet) {
		console.log(sheet.getName());
	} else {
		console.error('NOT_SSL_LIST が見つかりません');
		return;
	}

	const data = sheet.getRange(3, 2, sheet.getLastRow() - 2).getValues();
	let domains: Array<String> = [];

	for (const url of data) {
		const hostName = getHostnameFromString(url[0]);
		domains.push(hostName);
	}

	const body = {
		"domains": domains
	}

	let response = ContentService.createTextOutput();
	response.setMimeType(ContentService.MimeType.JSON);
	response.setContent(JSON.stringify(body))
	return response
}
