// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "./ViewQuiz.sol";

contract AnswerQuiz is ViewQuiz {

    event Result(string message, uint balance);

    uint cooldownTime = 1 days;

    mapping (address => uint) public addressBalance;
    mapping (address => uint32) public answerReadyTime;

    /*
    function signUp() public {
        require(addressRewards[msg.sender] <= 0 ether);
        addressRewards[msg.sender] = 0 ether;
    }
    */

    function _isReady(address _answerer) internal view returns (bool) {
        return (answerReadyTime[_answerer] <= block.timestamp);
    }

    function _triggerCooldown(address _answerer) internal {
        answerReadyTime[_answerer] = uint32(block.timestamp + cooldownTime);
    }
    
    function answerQuiz(uint _quizId, uint8 _answer) public {
        require(_isReady(msg.sender));
        require(quizIsActive[_quizId] == true);
        uint newBalance;
        if (_answer == quizAnswer[_quizId]) {
            newBalance = addressBalance[msg.sender] + quizzes[_quizId].reward;
            uint newRewardPool = quizzes[_quizId].rewardPool - quizzes[_quizId].reward;
            addressBalance[msg.sender] = newBalance;
            quizzes[_quizId].rewardPool = newRewardPool;
            if (newRewardPool <= 0 ether) {
                quizIsActive[_quizId] = false;
                emit Result("Congrats! Your answer is correct! You got rewards.", newBalance);
            } else {
                emit Result("Congrats! Your answer is right! You got rewards.", newBalance);
            }
        } else {
            emit Result("Too bad! Your answer is wrong.", newBalance);
        }
        _triggerCooldown(msg.sender);
    }

    function withdrawReward() public {
        require(addressBalance[msg.sender] > 0 ether);
        payable(msg.sender).transfer(addressBalance[msg.sender]);
        addressBalance[msg.sender] = 0 ether;
	}
}