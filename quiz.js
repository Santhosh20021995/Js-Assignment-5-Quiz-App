function check() {
     var c = 0;
     var ques1 = document.quiz.q1.value;
     var ques2 = document.quiz.q2.value;
     var ques3 = document.quiz.q3.value;
     var ques4 = document.quiz.q4.value;
     var ques5 = document.quiz.q5.value;
     var result = document.getElementById("result");
     var container = document.getElementById("container");
    
     if(ques1 == "Helga's Diadem") {
         c++
     } 
     if(ques2 == "Grawp") {
        c++
    } 
    if(ques3 == "Defense Against Dark Arts") {
        c++
    } 
    if(ques4 == "Ravenclaw") {
        c++
    } 
    if(ques5 == "Herbology") {
        c++
    } 
    
    document.write(c);
   
}


