
module.exports =
{
	"svrProps": {
		"name": "CashCodesData",
		"validation": "none",
		"listingScreenOrder": [["location", "location"], ["object", "workInProcessMethod"], ["object", "partsWorkInProcessAccount"], ["object", "laborWorkInProcessAccount"], ["object", "defaultInventoryAccount"], ["object", "defaultCostOfSalesAccount"]]
	},
	"status": {
		"svrProps": {
			"name": "Active",
			"validation": "none"
		}
	},
	"object": {
			"svrProps": {
				"name": "WorkInProgressData",
				"validation": "none"
			},
		"workInProcessMethod": {
			"svrProps": {
				"name": "Method",
				"validation": "none"
			}
		},
		"partsWorkInProcessAccount": {
			"svrProps": {
				"name": "Parts Account",
				"validation": "none",
				"type" : "string",
				"combination": {"action" : "concat", "values" : ["accountNumber", "costCenter"]}

			},
			"accountNumber": {
				"svrProps": {
					"name": "Account Number",
					"validation": "none"
				}
			},
			"costCenter": {
				"svrProps": {
					"name": "Cost Center",
					"validation": "none"
				}
			}
		},
		"laborWorkInProcessAccount": {
			"svrProps": {
				"name": "Labor Account",
				"validation": "none",
				"type" : "string",
				"combination": {"action" : "concat", "values" : ["accountNumber", "costCenter"]}

			},
			"accountNumber": {
				"svrProps": {
					"name": "Account Number",
					"validation": "none"
				}
			},
			"costCenter": {
				"svrProps": {
					"name": "Cost Center",
					"validation": "none"
				}
			}
		},
		"defaultInventoryAccount": {
			"svrProps": {
				"name": "Inventory Account",
				"validation": "none",
				"type" : "string",
				"combination": {"action" : "concat", "values" : ["accountNumber", "costCenter"]}
			},
			"accountNumber": {
				"svrProps": {
					"name": "Account Number",
					"validation": "none"
				}
			},
			"costCenter": {
				"svrProps": {
					"name": "Cost Center",
					"validation": "none"
				}
			}
		},
		"defaultCostOfSalesAccount": {
			"svrProps": {
				"name": "Cost of Sales Account",
				"validation": "none",
				"type" : "string",
				"combination": {"action" : "concat", "values" : ["accountNumber", "costCenter"]}
			},
			"accountNumber": {
				"svrProps": {
					"name": "Account Number",
					"validation": "none"
				}
			},
			"costCenter": {
				"svrProps": {
					"name": "Cost Center",
					"validation": "none"
				}
			}
		}
	},
	"location": {
		"svrProps": {
			"name": "Locaton",
			"validation": "none"
		},
		"company": {
			"svrProps": {
				"name": "Company",
				"validation": "none"
			}
		},
		"division": {
			"svrProps": {
				"name": "Division",
				"validation": "none"
			}
		},
		"location": {
			"svrProps": {
				"name": "Location",
				"validation": "none"
			}
		}
	}

}