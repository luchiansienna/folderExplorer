const testItems = [
    [{
        "id": "urn:intuit",
        "displayName": "CSGoldCompany",
        "lastUpdated": {
                    "updatedAt": "2020-11-02T16: 44:56.538734Z",
                    "updatedBy": "@rfeygenberg"
        }
    }
    ],
    [{
        "id": "urn",
        "displayName": "CSGoldCompany",
        "lastUpdated": {
                    "updatedAt": "2020-11-02T16: 44:56.538734Z",
                    "updatedBy": "@rfeygenberg"
        }
    },
    {
        "id": "urn",
        "displayName": "CSGoldCompany",
        "lastUpdated": {
                    "updatedAt": "2020-11-02T16: 44:56.538734Z",
                    "updatedBy": "@rfeygenberg"
        }
    }
    ]

]


let testCases = [
    {
        itemAt: 0,
        description: 'a simple',
        expectedToCallWith: [{
            "id": ":urn",
            "parentId": "",
            "displayName": "urn",
            "lastUpdated": {
                        "updatedAt": "1 Nov 2020 06:44",
                        "updatedBy": "@rfeygenberg"
            }
        },
        {
            "id": ":urn:intuit",
            "parentId": ":urn",
            "displayName": "CSGoldCompany",
            "lastUpdated": {
                        "updatedAt": "1 Nov 2020 06:44",
                        "updatedBy": "@rfeygenberg"
            }
        }
        ]
    },
    {
        itemAt: 1,
        description: 'multiple items with same id',
        expectedToCallWith: [{
            "id": ":urn",
            "parentId": "",
            "displayName": "CSGoldCompany",
            "lastUpdated": {
                        "updatedAt": "1 Nov 2020 06:44",
                        "updatedBy": "@rfeygenberg"
            }
        }
        
        ]
    }
]

export {testItems, testCases}