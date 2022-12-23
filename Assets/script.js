// var today = moment()
// $("#date").text(today.format("MMMM Do, YYYY"))

$(document).ready(function(){
    var today = moment();

    $("#currentDay").text(today.format("[Today's date:] ddd MMM do, YYYY [Time:] h:mm a"));
    $(".saveBtn").on('click', function() {
        var scheduledEvent = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, scheduledEvent);
    })
});


function updateTime() {
    var currentTime = moment().hours();

    $('.time-block').each(function(){
        var blockHour = parseInt($(this).attr('id').split('-')[1]);
        if (blockHour < currentTime){
            $(this).addClass('past');
        } else if (blockHour > currentTime){
            $(this).removeClass('past');
            $(this).addClass('future')
        } else {
            $(this).removeClass('past');
            $(this).removeClass('future');
            $(this).addClass('present');
        }
    });
}

setInterval(timeUpdater, 100);

function timeUpdater(){
    updateTime();
}
    console.log(localStorage.getItem('hour-9'));
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));

