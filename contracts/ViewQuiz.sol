// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "./CreateQuiz.sol";

contract ViewQuiz is CreateQuiz {

    event ReturnQuizQuestion(QuizQuestion quizQuestion);

    struct QuizQuestion {
        string question;
        string choice1;
        string choice2;
        string choice3;
        string choice4;
        string hint;
    }

    //answerer shouldn't be able to see the answer
    function getQuizQuestion(uint _quizId) private view returns (QuizQuestion memory) {
        Quiz memory quiz = quizzes[_quizId];
        return QuizQuestion(quiz.question, quiz.choice1, quiz.choice2, quiz.choice3, quiz.choice4, quiz.hint);
    }

    //owner could see the whole quiz
    function getQuizForOwner(uint _quizId) public view returns (Quiz memory) {
        return quizzes[_quizId];
    } 

    function getRandomQuizQuestion(string memory _seed) public returns (QuizQuestion memory) {
        uint storedBlockNumber = block.number + 1;
        uint rand = uint(keccak256(abi.encodePacked(_seed, blockhash(storedBlockNumber))));
        uint quizId = rand % quizzes.length;
        QuizQuestion memory quizQuestion = getQuizQuestion(quizId);
        emit ReturnQuizQuestion(quizQuestion);
        return quizQuestion;
    }

}