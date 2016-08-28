		var title = $('#eventTitle');
        var start = $('#eventStart');
        var end = $('#eventEnd');
        $('#calEventDialog').dialog({
           resizable: false,
           autoOpen: false,
           title: 'Add Event',
           width: 400,
        buttons: {
            Save: function() {
               if ($('input:radio[name=allday]:checked').val() == "1") {
                    eventClass = "gbcs-halfday-event";
                    color = "#9E6320";
                    end.val(start.val());
                }
              else {
                eventClass = "gbcs-allday-event";
                color = "#875DA8";
            }
            if (title.val() !== '') {
                $myCalendar.fullCalendar('renderEvent', {
                    title: title.val(),
                    start: start.val(),
                    end: end.val(),
                    allDay: true,
                    className: eventClass,
                    color: color
                }, true // make the event "stick"
                );
        $('calendar').fullCalendar('renderEvent', {

         title: ($("#eventTitle").val()),
                    start: ($("#eventStart").val()),
                    end:($("#eventEnd").val()),
        allDay: ($("#allday").val()),
                    color:($("background-Color").val())
                }, true // make the event "stick" 
                );
        $.ajax({
        url: 'events.cfc?method=add_events',
        data: 'title='+ ($("#eventTitle").val())+
                        '&start='+ ($("#eventStart").val()) +'
                         &end='+ ($("#eventEnd").val()) +
            '&id='+ 0 ,
            type: "POST",
         success: function(json) {
         alert('Updated Successfully');


            }
                 })
            }
            $myCalendar.fullCalendar('unselect');
            $(this).dialog('close');
        },
        Cancel: function() {
            $(this).dialog('close');
        }
      }
   });
 });// JavaScript Document