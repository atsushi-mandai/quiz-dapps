// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "./CreateQuiz.sol";

contract ViewQuiz is CreateQuiz {

    event GetQuiz(Quiz quiz);
    event QuizOwnerGetQuiz(Quiz quiz, uint8 answer);

    //for answerer to get a random quiz
    function getRandomQuiz(string memory _seed) public returns (Quiz memory) {
        uint rand = uint(keccak256(abi.encodePacked(_seed, block.timestamp, msg.sender)));
        uint quizId = rand % quizzes.length;
        Quiz memory quiz = quizzes[quizId];
        emit GetQuiz(quiz);
        return quiz;
    }

    //for answerer to get a random quiz filtered by language
    /* will write this later
    function getRandomQuizByLanguage() public returns () {
        // some function
    }
    */

    //owner should be able to see the quiz & answer for his/her quiz
    function quizOwnerGetQuiz(uint _quizId) public onlyQuizOwner(_quizId) returns (Quiz memory, uint8) {
        emit QuizOwnerGetQuiz(quizzes[_quizId], quizAnswer[_quizId]);
        return (quizzes[_quizId], quizAnswer[_quizId]);
    } 

}