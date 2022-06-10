// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "./ViewQuiz.sol";

contract AnswerQuiz is ViewQuiz {
    
    function answerQuiz(uint _quizId, uint8 _answer) public {
        require(quizIsActive[_quizId] == true);
        if (_answer == quizAnswer[_quizId]) {
        // some functions here;
        } else {
        // some functions here;
        }
    }
}