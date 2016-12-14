$(function(){
    hra();
});

function hra() {

      $(function() {
        vyrobDisky();
      });

        function vyrobDisky() {  
        	var pocet_diskov = $("#pocet").val(); 
        	for(i=1;i<=pocet_diskov;i++){
        		var	inerHTML = ('<div class="draggable disk'+i + '" id="disk'+i+'"></div>');
        		$("#start").prepend(inerHTML);
        	}  
          nastavDrag();
          nastavDrop();
        }
      
      function nastavDrag() {
        $(".draggable").draggable({
           stack: $(".draggable"),
           helper: "clone",
           start: function(event, ui) {
              return jeNavrchu($(event.target).parent(), event.target);
            }
        });
      }

      function nastavDrop() {
        $(".droppable").droppable({
           accept: ".draggable",
           drop: function(event, ui) {
            var ciel = $(this).find(".obsah");
            if (isValidMove(ciel, ui.draggable)) {
              $(ui.draggable).prependTo(ciel);
            } 
           } 
        });
      }

      function jeNavrchu(parent, child) {
        return $(parent).children()[0].id == child.id;
      }

      function isValidMove(parent, child) {
        var children = $(parent).children();
        return (children.length == 0) || (parseInt(children.css("width")) > parseInt(child.css("width")));
      }       
}

function novaHra(){
  $(".obsah").empty();
  hra();
}