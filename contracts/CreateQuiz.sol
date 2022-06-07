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
        uint8 answer;
        uint8 languageCode;
    }

    Quiz[] internal quizzes;

    mapping (uint => bool) public quizzIsActive;

    //@dev Create a Quiz. Will call this function from other functions.
    function _createQuiz(string memory _question, string memory _choice1, string memory _choice2, string memory _choice3, string memory _choice4, uint8 _answer, uint8 _languageCode) private {
        quizzes.push(Quiz(_question, _choice1, _choice2, _choice3, _choice4, _answer, _languageCode));
        uint id = quizzes.length - 1;
        quizzIsActive[id] = true;
        emit NewQuiz(_question, _answer);
    }

    //@dev Giving contract owner a power to change the status of each quiz for now.
    function changeQuizStatus(uint _quizId ,bool _quizStatus) public onlyOwner {
        quizzIsActive[_quizId] = _quizStatus;
    }

}