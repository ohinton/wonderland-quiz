$(document).ready(function() {
  $("form#wonderland-character").submit(function(event) {
   var personality = $("input:radio[name=personality]:checked").val();
   var treat = $("select#treat").val();
event.preventDefault();
if (personality === "calm" && treat === "tea"){
  $('#dormouse').show();
} else if (personality === "calm" && treat==="cookies"){
  $('#alice').show();
} else if (personality === "calm" && treat==="hookah"){
  $('#caterpillar').show();
} else if (personality === "crazy" && treat==="tea"){
  $('#mad-hatter').show();
} else if (personality === "crazy" && treat==="cookies"){
  $('#alice').show();
} else if (personality === "crazy" && treat==="hookah"){
  $('#caterpillar').show();
}
    });
  });
