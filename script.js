
var answerWrappers = document.querySelectorAll(".answer-div");

answerWrappers.forEach(function(wrapper) {
  var question = wrapper.querySelector(".question");
  var arrow = wrapper.querySelector(".arrow");
  var answer = wrapper.nextElementSibling;

  question.addEventListener("click", function() {
    // Close all other answers
    answerWrappers.forEach(function(otherWrapper) {
      var otherQuestion = otherWrapper.querySelector(".question");
      var otherArrow = otherWrapper.querySelector(".arrow");
      var otherAnswer = otherWrapper.nextElementSibling;

      if (otherAnswer !== answer) {
        otherAnswer.classList.remove("show-answer");
        otherArrow.classList.remove("rotate-arrow");
        otherAnswer.style.display = "none";
      }
    });

    // Toggle the visibility and rotation of the clicked answer
    answer.classList.toggle("show-answer");
    arrow.classList.toggle("rotate-arrow");

    if (answer.classList.contains("show-answer")) {
      answer.style.display = "block";
      question.style.color = "black"; // Updated color value
      question.style.fontWeight ="bold";
    } else {
      answer.style.display = "none";
      question.style.color = "4b4c5f"; // Reset color
      question.style.fontWeight ="normal";
    }
  });
});


