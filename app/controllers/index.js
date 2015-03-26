
function onClickTu1(e)
{
	//Tuesday
	//7:45-8:30 AM
	//First Time Attendee Breakfast
 	Ti.Calendar.requestAuthorization(function(e)
 	{
        if (e.success) {
          	var defCalendar = Ti.Calendar.defaultCalendar;				
				var start = new Date(2015, 7, 28, 7, 45);
				var end = new Date(2015, 7, 28, 8, 30);
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
        } else {
            alert($.Tu1.text);
        };
	});
};
function onClickTu2(e){
	//Tuesday
	//8:30-9:25 AM
	//Opening Ceremony
			alert($.Tu2.text);

};
$.index.open();