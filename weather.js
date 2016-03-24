 (function updateWeatherData(){
 	setTimeout(function(){
 		$(document).ready(function() {
    $.ajax( {
        url:'weather.json',
		type: 'GET',
        dataType: 'json', // Returns JSON
		success: function(response){
			var output = '<thead><tr><th>City</th><th>Conditions</th><th>Temprature</th><th>Wind Spee</th><th>Wind Direction</th><th>Wind Chill Factor</th></thead>';
			var unitForTemp='°C';
			var unitForSpeed='mph';
			$.each(response.weather,function(index) {
				output+= '<tr><td>'+ response.weather[index].city.cityName+ '</td>';
				output+= '<td>'+ response.weather[index].currentConditions+ '</td>';
				output+= '<td>'+ response.weather[index].temperature+unitForTemp+ '</td>';
				output+= '<td>'+ response.weather[index].wind.windSpeed+ unitForSpeed+'</td>';
				output+= '<td>'+ response.weather[index].wind.windDirection+ '</td>';
				output+= '<td>'+ response.weather[index].wind.windChillFactor+ '</td></tr>';
			});
			//$('#updateData').append(response);
			$('#updateData').append(output);
			
			//$('#updateData').load(updateWeatherData());


			//document.getElementById('citylist').innerHTML = output;
			
			//updateWeatherData();
		},	
		error: function() { 
			$('#info').html('<p>An error has occurred</p>');
       }
    });      
        });

 	}, 250);
 })();
 