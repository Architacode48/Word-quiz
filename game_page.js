player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="question turn: "+player1_name;
document.getElementById("player_answer").innerHTML="answer turn: "+player2_name;

function send()
{
getWord=document.getElementById("word").value;
word=getWord.toLowerCase();
console.log("word in lower case= "+word);

c1=word.charAt(1);
console.log(c1);

half=Math.floor(word.length/2);
console.log(half);
c2=word.charAt(half);
console.log(c2);

last=word.length-1;
console.log(last);
c3=word.charAt(last);
console.log(c3);

removeC1=word.replace(c1,"_");
removeC2=removeC1.replace(c2,"_");
removeC3=removeC2.replace(c3,"_");
console.log(removeC3);

question="<h4 id='word_display'>Question: "+removeC3+"</h4>";
input="<br>Answer: <input type='text'id='answer'>";
checkbutton="<br><br><button class='btn btn-info'onclick='check()'>CHECK</button>";
row=question+input+checkbutton;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}
questionturn="player1";
answerturn="player2";
function check()
{
getAns=document.getElementById("answer").value;
uttar=getAns.toLowerCase();
if(uttar==word)
{
if(answerturn=="player1")
{
    update_player1_score=player1_score+1;
document.getElementById("player1_score").innerHTML=update_player1_score;

}
else{
update_player2_score=player2_score+1;
document.getElementById("player2_score").innerHTML=update_player2_score;
}
if(questionturn=="player1")
{
questionturn="player2";
document.getElementById("player_question").innerHTML="question turn: "+player2_name;
}
else{
    questionturn="player1";
    document.getElementById("player_question").innerHTML="question turn: "+player1_name;
}
if(answerturn=="player1")
{
answerturn="player2";
document.getElementById("player_answer").innerHTML="answer turn: "+player2_name;
}
else{
answerturn="player1";
document.getElementById("player_answer").innerHTML="answer turn: "+player1_name;
}
document.getElementById("output").innerHTML="";
}












}