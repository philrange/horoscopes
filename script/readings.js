        //this will be in the html page that calls the function
        //var sign = 'Aquarius';
                   
        var starsignNames = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
        var totalNumberOfHoroscopes = 24;

        var todaysReadings = null;
        getReadings();
			
        function getReadings() {
            
            console.log("Fetching all readings");
            
            const apiUrl = 'https://horoscopes-api-u4jy.onrender.com/horoscopes';

            // Make a GET request
			fetch(apiUrl)
		      .then(response => {
                
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }

                return response.json();
            })
                .then(data => {
                console.log("Found readings");
                console.log(data);
                todaysReadings = data;
            })
                .catch(error => {
                console.error('Error:', error);
            });
        
        }

        function getTodaysReadings(signName) {
            		
            if (todaysReadings != null) {
                var readingsForSign = todaysReadings[signName];
                var todaysReading = readingsForSign.today.content;
                var tomorrowsReading = readingsForSign.tomorrow.content;

                return {today: todaysReading, tomorrow: tomorrowsReading};     
            } else {
                var errorMessage = "error finding reading for " + signName;
                return {today: errorMessage, tomorrow: errorMessage};
            }
        }
        
       
