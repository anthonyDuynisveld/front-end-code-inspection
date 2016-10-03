
module.exports =
{
	"svrProps": {
		"name": "PartGroupBranch",
		"validation": "none",
		"listingScreenOrder": [["location", "location"], ["object", "groupingBranch"]]
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
		"groupingBranch": {
			"svrProps": {
				"name": "Method",
				"validation": "none"
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