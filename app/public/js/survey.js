$("#submit").on("click", function(){
	event.preventDefault();

	var name = $("#name").val();
    var photo = $("#picture").val();
    var scores = [
      $("#question1").val(),
      $("#question2").val(),
      $("#question3").val(),
      $("#question4").val(),
      $("#question5").val(),
    ];

    var userData = {
      name: name,
      photo: photo,
      scores: scores
    }

    console.log(userData);


	$.post("/api/friends", userData, function(data) {
		
		console.log(data);

		console.log("done");
	});
});
