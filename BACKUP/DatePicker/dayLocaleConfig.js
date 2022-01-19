const config = {
    fr: {
        name: 'fr',
        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split(
            '_',
        ),
        weekdays: 'lundi_mardi_mercredi_jeudi_vendredi_samedi_dimanche'.split(
            '_',
        ),
        formats: { L: 'DD/MM/YYYY' },
        weekStart: 0,
        yearStart: 4,
    },
    en: {
        name: 'en',
        months: 'january_february_march_april_may_june_july_august_september_october_november_december'.split(
            '_',
        ),
        weekdays: 'monday_tuesday_wednesday_thursday_friday_saturday_sunday'.split(
            '_',
        ),
        formats: { L: 'DD/MM/YYYY' },
        weekStart: 0,
        yearStart: 4,
    },
};

export default config;
