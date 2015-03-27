function onSwipeTu1(e)
{
	//Tuesday
	//7:45-8:30 AM
	//First Time Attendee Breakfast
	var confirm = Titanium.UI.createAlertDialog({
        title: 'Calendar',
        message: 'Do you want to add this to your calendar?',
        buttonNames: ['Yes', 'No'],
        cancel: 1
	});
	Ti.API.info(confirm);
	confirm.addEventListener('click', function(e){
        if (e.cancel === e.index || e.cancel === true) {
        return false;
     	}else{
     		//calendar content below here
     		 	Ti.Calendar.requestEventsAuthorization(function(e)
			 	{
			        if (e.success) {
			          	var defCalendar = Ti.Calendar.defaultCalendar;				
							var start = new Date(2015, 6, 28, 7, 45);
							var end = new Date(2015, 6, 28, 8, 30);
						Ti.API.info('start:' + start + ' end:' + end);
						var event = defCalendar.createEvent({
							title: 'First time Attendee Breakfast.  Welcome & Orientation for Newcomers',
							location:'TBD',
							begin:start,
							end:end,
							availability: Ti.Calendar.AVAILABILITY_FREE,
							allDay:false
						});
					
						var reminder = event.createAlert({
						absoluteDate: new Date(2015,7,28,7,30)
						}); 
						event.alerts=[reminder]; 
						event.save(Ti.Calendar.SPAN_FUTUREEVENTS);
						alert("This event has been added to your calendar!");
			        } else {
			            alert($.Tu1.text);
			        };
				});
     	//calendar content above here	
     	}

 	});
 	confirm.show();
 	Ti.API.info("e.cancel:" + e.cancel);
 	Ti.API.info("e.text:" + e.text);
	
 /*	Ti.Calendar.requestEventsAuthorization(function(e)
 	{
        if (e.success) {
          	var defCalendar = Ti.Calendar.defaultCalendar;				
				var start = new Date(2015, 6, 28, 7, 45);
				var end = new Date(2015, 6, 28, 8, 30);
			Ti.API.info('start:' + start + ' end:' + end);
			var event = defCalendar.createEvent({
				title: 'First time Attendee Breakfast.  Welcome & Orientation for Newcomers',
				location:'TBD',
				begin:start,
				end:end,
				availability: Ti.Calendar.AVAILABILITY_FREE,
				allDay:false
			});
		
			var reminder = event.createAlert({
			absoluteDate: new Date(2015,7,28,7,30)
			}); 
			event.alerts=[reminder]; 
			event.save(Ti.Calendar.SPAN_FUTUREEVENTS);
			alert("This event has been added to your calendar!");
        } else {
            alert($.Tu1.text);
        };
	});*/
};

$.index.open();