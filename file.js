$(document).ready(function() {
  $("#year").click(function() {
    var year = this.value;
    console.log(year);
    if(!year){
      for(var i = 0; i <12;i++){
        $(this).append("<option value='" + i + "'>" + i + "</option>");
      }
   
    }
  })
});