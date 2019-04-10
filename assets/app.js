
var config = {
    apiKey: "AIzaSyALAapYrn0ov9MDOjfve7Nygq0HxMDyNXg",
    authDomain: "mseairline.firebaseapp.com",
    databaseURL: "https://mseairline.firebaseio.com",
    projectId: "mseairline",
    storageBucket: "mseairline.appspot.com",
    messagingSenderId: "894162130505"

  };
  firebase.initializeApp(config);
  var flightNum = "";
  var departed = "";
  var arriveIn = "";
  var place = "";

  $("#addFlight").on("click",function(event){
      event.preventDefault();
      flightNum =$("#flightInput").val().trim();
      departed= $("#departedInput").val().trim();
      arriveIn = $("#arriveInInput").val().trim();
      place = $("#placeInput").val().trim();

      console.log(flightNum);
      console.log(departed);
      console.log(arriveIn);
      console.log(place);

      firebase.database().ref().set({
          flightNum:flightNum,
          departed:departed,
          arriveIn:arriveIn,
          place:place,
      })
  })

  firebase.database().ref().on("value",function(snapshot){
      $("#flightDisplay").html(snapshot.val().flightNum);
      $("#departedDisplay").html(snapshot.val().departed);
      $("#arriveInDisplay").html(snapshot.val().arriveIn);
      $("#placeDisplay").html(snapshot.val().place);
  })



