
var answerWrappers = document.querySelectorAll(".answer-div");



answerWrappers.forEach(function(wrapper) {
  var question = wrapper.querySelector(".question");
  var arrow = wrapper.querySelector(".arrow");
  var answer = wrapper.nextElementSibling;
  

  question.addEventListener("click", function() {
    answer.classList.toggle("show-answer");
    arrow.classList.toggle("rotate-arrow");
    if (answer.classList.contains("show-answer")) {
        answer.style.display = "block";
      } else {
        answer.style.display = "none";
      }
     

  });
 

});

