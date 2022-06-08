// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "./CreateQuiz.sol";

contract ViewQuiz is CreateQuiz {

    struct QuizQuestion {
        string question;
        string choice1;
        string choice2;
        string choice3;
        string choice4;
        string hint;
    }

    function getQuizQuestion(uint _quizId) public view returns (QuizQuestion memory) {
        Quiz memory quiz = quizzes[_quizId];
        return QuizQuestion(quiz.question, quiz.choice1, quiz.choice2, quiz.choice3, quiz.choice4, quiz.hint);
    }



}