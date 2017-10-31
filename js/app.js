// alert("Hello world!");

$("button").click(function(){
    $.getJSON("http://www.odaa.dk/api/action/datastore_search?resource_id=2a82a145-0195-4081-a13c-b0e587e9b89c", function(result){
        $.each(result, function(i, field){
            var jsonStr = JSON.stringify(field);

            if (typeof(field)=='object') {
                //var obj = JSON.parse(field);
                var returnVar = JSON.stringify(field.records[1]);
                field.records.forEach(myFunction);
            }
        });

    });
});

function myFunction(item, index){
    $("table").append("<tr><td>" + item.garageCode + "</td><td>"  + item.totalSpaces + "</td><td>" + item.vehicleCount + "</td></tr>" );

}