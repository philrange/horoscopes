        //this will be in the html page that calls the function
        //var sign = 'Aquarius';
                   
			var starsignNames = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
            var totalNumberOfHoroscopes = 24;
			
			
        function getReading(readingNumber) {
            return "reading" + readingNumber;
        }

        function getTodaysReadings(signName) {
            		
			console.log("Getting reading for " + signName);
            let now = new Date();
            now.setHours(0);
            now.setMinutes(0);
            let nowTime = now.getTime();
            
            let numberOfDaysSinceEpoch = Math.floor(nowTime / (1000*60*60*24));
            let dayOffset = numberOfDaysSinceEpoch % totalNumberOfHoroscopes;
            let gap = (totalNumberOfHoroscopes - 24)/2;

			console.log(starsignNames);
            let today = (starsignNames.indexOf(signName) + dayOffset) % totalNumberOfHoroscopes;
            let tomorrow = (today + 12 + gap) % totalNumberOfHoroscopes;
            
            let todaysReading = getReading(today);
            let tomorrowsReading = getReading(tomorrow);

            return {today: todaysReading, tomorrow: tomorrowsReading};     
        }
        
       