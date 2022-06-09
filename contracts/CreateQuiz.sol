// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "./Ownable.sol";

contract CreateQuiz is Ownable {

    event NewQuiz(string question, uint8 answer);

    struct Quiz {
        string question;
        string choice1;
        string choice2;
        string choice3;
        string choice4;
        string hint;
        uint8 languageCode;
    }

    Quiz[] public quizzes;

    mapping (uint => bool) public quizIsActive;
    mapping (uint => uint8) internal quizAnswer;
    mapping (uint => address) public quizOwner;

    modifier onlyQuizOwner(uint _quizId) { 
        require(quizOwner[_quizId] == msg.sender);
        _;
    }

    //@dev Create a Quiz. Will call this function from other functions.
    function _createQuiz(string memory _question, string memory _choice1, string memory _choice2, string memory _choice3, string memory _choice4, string memory _hint, uint8 _answer, uint8 _languageCode) private {
        quizzes.push(Quiz(_question, _choice1, _choice2, _choice3, _choice4, _hint, _languageCode));
        uint id = quizzes.length - 1;
        quizAnswer[id] = _answer;
        quizOwner[id] = msg.sender;
        quizIsActive[id] = true;
        emit NewQuiz(_question, _answer);
    }

    /* will write this later
    function createQuiz() {
        //some transactions here
        //_createQuiz(){}
    }
    */

    //@dev Let quiz owner change the status of each quiz
    function quizOwnerChangeStatus(uint _quizId, bool _quizStatus) public onlyQuizOwner(_quizId) {
        quizIsActive[_quizId] = _quizStatus;
    }

    //@dev Let quiz owner change the hint of each quiz
    function quizOwnerChangeHint(uint _quizId, string memory _hint) public onlyQuizOwner(_quizId) {
        quizzes[_quizId].hint = _hint;
    }

    //@dev Giving contract owner a power to change the status of each quiz for now.
    function changeQuizStatus(uint _quizId, bool _quizStatus) public onlyOwner {
        quizIsActive[_quizId] = _quizStatus;
    }

}