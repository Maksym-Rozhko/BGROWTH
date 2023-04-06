function timer(id, deadline) {
    if (id) {
        const addZero = num => num <= 9 ? `0${num}` : num;

        const getTimeRemaining = (endTime) => {
            const time = Date.parse(endTime) - Date.parse(new Date()),
                seconds = Math.floor((time / 1000) % 60),
                minutes = Math.floor((time / 1000 / 60) % 60),
                hours = Math.floor((time / (1000 * 60 * 60)) % 24),
                days = Math.floor((time / (1000 * 60 * 60 * 24)));

            return {
                'total': time,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds,
            };
        };

        const setClock = (selector, endTime) => {
            const timer = document.querySelector(selector),
                days = timer.querySelector('#days'),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds'),
                timeInterval = setInterval(updateClock, 1000);
            // digits time indicator
            let dd = document.getElementById('dd');
            let hh = document.getElementById('hh');
            let mm = document.getElementById('mm');
            let ss = document.getElementById('ss');

            updateClock();

            function updateClock() {
                const time = getTimeRemaining(endTime);

                days.textContent = addZero(time.days);
                hours.textContent = addZero(time.hours);
                minutes.textContent = addZero(time.minutes);
                seconds.textContent = addZero(time.seconds);

                // set time circular indicator
                dd.style.strokeDashoffset = 440 - (440 * time.days) / 30;
                hh.style.strokeDashoffset = 440 - (440 * time.hours) / 24;
                mm.style.strokeDashoffset = 440 - (440 * time.minutes) / 60;
                ss.style.strokeDashoffset = 440 - (440 * time.seconds) / 60;

                if (time.total <= 0) {
                    days.textContent = '00';
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';

                    days.parentElement.parentElement.parentElement.classList.add('timer__container--endtime');

                    clearInterval(timeInterval);
                };
            };
        };

        try {
            setClock(id, deadline);
        } catch (error) {
            
        }
    }
};
let deadline = '2022-06-08';
timer('.timer__container', deadline);