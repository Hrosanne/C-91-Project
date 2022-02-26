player_1 = localStorage.getItem("player1_name");
player_2 = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player_1").innerHTML = player_1 + " : ";
document.getElementById("player_2").innerHTML = player_2 + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player_1;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_2;
console.log("Entered in JS")

function send(){
    number_1 = document.getElementById("number1").value;
    number_2 = document.getElementById("number2").value;
    actual_ans = parseInt(number_1) * parseInt(number_2);
    
    question_number = "<h4>" + number_1 + "x" + number_2 + "</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

