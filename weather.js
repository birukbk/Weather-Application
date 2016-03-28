 	$(document).ready(function updateWeatherData() {
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
			//$('#citylist').append(output);
			document.getElementById('citylist').innerHTML = output;
			setTimeout(updateWeatherData, 5000);
			document.getElementById('info').innerHTML = ''; //clear error message.
			
		},	
		error: function() { 
			$('#info').html('<p>An error has occurred</p>'); //show error message
			document.getElementById('citylist').innerHTML = ''; //clears the table

			setTimeout(updateWeatherData, 2000); //wait for 5sec and load data.
       }
    });      
       

 	});

 