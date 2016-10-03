{
	"fileData" : {
		"divisionId": {
			"company": "01",
			"division": "01"
		},
		"Address": {
			"addressLine1": "adr1111111111111111111END",
			"addressLine2": "adr2222222222222222222END",
			"addressLine3": ""
		},
		"dealerName": "nameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeEND",
		"phoneNumber": "123.45\\6.78/90-123 x(345)",
		"email": "aaa@bbb.comWWWWwsssssssssssssssssssssssss",
		"webAddress": "wwwsome-long-web-site-address.coukhh"
	},
	"supportData": {
		"svrProps": {"name" : "Footer Data", "validation": "none"},
		"divisionId": {
			"svrProps": {"name" : "Footer Key", "validation": "none", "visibility": "none", "css" : {"classes" : ["hide"]}},
			"company": {"svrProps": {"name" : "Company", "validation": "String", "visibility": "none"}},
			"division": {"svrProps": {"name" : "Division", "validation": "String", "visibility": "none"}}
		},
		"Address": {
			"svrProps": {"name" : "Address", "validation": "Address"},
			"addressLine1": {"svrProps": {"name" : "Address Line 1", "validation": "String"}},
			"addressLine2": {"svrProps": {"name" : "Address Line 2", "validation": "String"}},
			"addressLine3": {"svrProps": {"name" : "Address Line 3", "validation": "String"}}
		},
		"dealerName": {"svrProps": {"name" : "Dealer Name", "validation": "String"}},
		"phoneNumber": {"svrProps": {"name" : "Address Line 2", "validation": "PhoneNumber"}},
		"email": {"svrProps": {"name" : "Email", "validation": "Email"}},
		"webAddress": {"svrProps": {"name" : "Dealer Site", "validation": "WebAddress"}}

	}
}
