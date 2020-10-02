const config = {
    'pg-fr': {
        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split(
            '_',
        ),
        monthsParseExact: true,
        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split(
            '_',
        ),
        weekdaysParseExact: true,
        longDateFormat: {
            L: 'DD/MM/YYYY',
        },
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4, // Used to determine first week of the year.
        },
    },
    'pg-en': {
        months: 'january_february_march_april_may_june_july_august_september_october_november_december'.split(
            '_',
        ),
        monthsParseExact: true,
        weekdays: 'sunday_monday_tuesday_wednesday_thursday_friday_saturday'.split(
            '_',
        ),
        weekdaysParseExact: true,
        longDateFormat: {
            L: 'DD/MM/YYYY',
        },
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4, // Used to determine first week of the year.
        },
    },
};

export default config;
