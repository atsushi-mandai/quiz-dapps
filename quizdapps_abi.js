[
	{
		"anonymous": false,
		"inputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "question",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "choice1",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "choice2",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "choice3",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "choice4",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "hint",
						"type": "string"
					},
					{
						"internalType": "uint8",
						"name": "languageCode",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "reward",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardPool",
						"type": "uint256"
					}
				],
				"indexed": false,
				"internalType": "struct CreateQuiz.Quiz",
				"name": "quiz",
				"type": "tuple"
			}
		],
		"name": "GetQuiz",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "question",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "answer",
				"type": "uint8"
			}
		],
		"name": "NewQuiz",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "question",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "choice1",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "choice2",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "choice3",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "choice4",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "hint",
						"type": "string"
					},
					{
						"internalType": "uint8",
						"name": "languageCode",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "reward",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardPool",
						"type": "uint256"
					}
				],
				"indexed": false,
				"internalType": "struct CreateQuiz.Quiz",
				"name": "quiz",
				"type": "tuple"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "answer",
				"type": "uint8"
			}
		],
		"name": "QuizOwnerGetQuiz",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "message",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			}
		],
		"name": "Result",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "addressBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_quizId",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "_answer",
				"type": "uint8"
			}
		],
		"name": "answerQuiz",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "answerReadyTime",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_quizId",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_quizStatus",
				"type": "bool"
			}
		],
		"name": "changeQuizStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_question",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_choice1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_choice2",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_choice3",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_choice4",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_hint",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "_answer",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "_languageCode",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "_reward",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_rewardPool",
				"type": "uint256"
			}
		],
		"name": "createQuiz",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRandomQuiz",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "question",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "choice1",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "choice2",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "choice3",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "choice4",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "hint",
						"type": "string"
					},
					{
						"internalType": "uint8",
						"name": "languageCode",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "reward",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardPool",
						"type": "uint256"
					}
				],
				"internalType": "struct CreateQuiz.Quiz",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "quizIsActive",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "quizOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_quizId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_hint",
				"type": "string"
			}
		],
		"name": "quizOwnerChangeHint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_quizId",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_quizStatus",
				"type": "bool"
			}
		],
		"name": "quizOwnerChangeStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_quizId",
				"type": "uint256"
			}
		],
		"name": "quizOwnerGetQuiz",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "question",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "choice1",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "choice2",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "choice3",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "choice4",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "hint",
						"type": "string"
					},
					{
						"internalType": "uint8",
						"name": "languageCode",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "reward",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardPool",
						"type": "uint256"
					}
				],
				"internalType": "struct CreateQuiz.Quiz",
				"name": "",
				"type": "tuple"
			},
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]