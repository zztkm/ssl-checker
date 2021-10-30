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

	const data = sheet.getRange(3, 3, sheet.getLastRow() - 2).getValues();
	let results: Array<string> = [];

	for (const hostname of data) {
		results.push(hostname[0]);
	}

	const body = {
		"hostnames": results
	}

	let response = ContentService.createTextOutput();
	response.setMimeType(ContentService.MimeType.JSON);
	response.setContent(JSON.stringify(body))
	return response
}
