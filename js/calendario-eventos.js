document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth', // Vista mensual
        locale: 'es', // Cambiar el idioma a español
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [
            {
                title: 'Volvemos a Parque Lezama',
                start: '2024-09-28T19:00:00',
                description: 'Lanzamiento Nacional de La Libertad Avanza en Parque Lezama.',
            },
            {
                title: '',
                start: '',
                description: ''
            },
            {
                title: '',
                start: '', // Evento con hora específica
                description: ''
            }
            // Añade más eventos aquí
        ],
        eventClick: function(info) {
            alert(info.event.title + "\n" + info.event.extendedProps.description);
        }
    });
    calendar.render();
});
