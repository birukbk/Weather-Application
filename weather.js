 $(document).ready(function() {
    $.ajax( {
        url:'weather.json',
		type: 'GET',
        dataType: 'json', // Returns JSON
		success: function(response){
			var output = '';
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
			$('#citylist').append(output);
		},	
		error: function() {
			$('#info').html('<p>An error has occurred</p>');
       }
    });      
});