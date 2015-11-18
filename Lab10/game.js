"use strict";
var interval = 3000;
var numberOfBlocks = 9;
var numberOfTarget = 3;
var targetBlocks = [];
var selectedBlocks = [];
var timer;

document.observe('dom:loaded', function(){
	$("start").onclick = stopToStart;
	$("stop").onclick = stopGame;
});

function stopToStart(){
    stopGame();
    startToSetTarget();
}

function stopGame(){
	$("state").textContent = "Stop";
	$("answer").textContent = "0/0";
	clearInterval(timer);
	var blocks = $$(".block");
	for (var i = 0; i < numberOfBlocks; i++) {
		blocks[i].removeClassName("target");
		blocks[i].removeClassName("selected");
		blocks[i].stopObserving("click");
	}
	targetBlocks=[];
	selectedBlocks=[];
}

function startToSetTarget(){
	clearInterval(timer);
	targetBlocks=[];
	selectedBlocks=[];	
	$("state").textContent = "Ready!";

	while(1){
		targetBlocks=[];
		for(var i =0; i<numberOfTarget; i++){
			targetBlocks.push(Math.floor((Math.random()*9)));
		}
		if((targetBlocks[0]!=targetBlocks[1])&&(targetBlocks[0]!=targetBlocks[2])&&(targetBlocks[1]!=targetBlocks[2])){
			break;
		}
	}	
	timer = setInterval(setTargetToShow, interval);
}

function setTargetToShow(){
	//alert(setTargetToShow);
	clearInterval(timer);
	$("state").textContent = "Memorize!";
	var blocks = $$("div.block");
	for(var i=0; i<numberOfTarget; i++){
		blocks[targetBlocks[i]].addClassName('target');
	}
	timer = setInterval(showToSelect, interval);
}

function showToSelect(){
	clearInterval(timer);
	$("state").textContent = "Select!";
	var blocks = $$(".block");
	for(var i=0; i<numberOfBlocks; i++){
		blocks[i].removeClassName('target');
		blocks[i].observe("click", function() {
			if (selectedBlocks.length<numberOfTarget) {
				this.addClassName('selected');
				this.stopObserving("click");
				selectedBlocks.push(this.readAttribute("data-index"));
			}
		});
	}
	timer = setInterval(selectToResult, interval);
}

function selectToResult(){
	clearInterval(timer);
	$("state").textContent = "Checking!";
	var blocks = $$(".block");
	for(var i=0; i<numberOfBlocks; i++){
		blocks[i].removeClassName('selected');	//Remove 
		blocks[i].stopObserving("click");	//Detach
	}

	var count=0;
	for (var i=0; i<numberOfTarget; i++) {
		for (var j=0; j<numberOfTarget; j++) {
			if (selectedBlocks[i]==targetBlocks[j]) {
				count++;
			}
		}
	}
	var current = $("answer").innerHTML;
	var answer = current.split("/");
	var Before = parseInt(answer[0]);
	var After = parseInt(answer[1]);
	var score = parseInt(count);
	$("answer").textContent = (Before+score)+"/"+(After+3);
	timer = setInterval(startToSetTarget, interval);
}
