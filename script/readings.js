        //this will be in the html page that calls the function
        //var sign = 'Aquarius';
                   
			var starsignNames = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
            var totalNumberOfHoroscopes = 24;
			
			var todaysReadings = null;
			getReadings();
			
        function getReadings() {
		

		const apiUrl = 'https://horoscopes-api-u4jy.onrender.com/horoscopes';

		// Make a GET request
			fetch(apiUrl)
		  .then(response => {
				  
			//console.log(response);
			if (!response.ok) {
			  throw new Error('Network response was not ok');
			}
			return response.json();
		  })
		  .then(data => {
			console.log(data);
			  todaysReadings = data;
		  })
		  .catch(error => {
			console.error('Error:', error);
		  });
        
        }

        function getTodaysReadings(signName) {
            		
			console.log("Getting reading for " + signName);
			console.log(todaysReadings);

			var readingsForSign = todaysReadings[signName];
			var todaysReading = readingsForSign.today.content;
			var tomorrowsReading = readingsForSign.tomorrow.content;

            return {today: todaysReading, tomorrow: tomorrowsReading};     
        }
        
       
