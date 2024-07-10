/*document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100); // Hier wurde ein Timeout von 100 Millisekunden eingefügt, um sicherzustellen, dass die Seite vollständig geladen ist
});
*/

function toggleDetails(element) {
    const details = element.nextElementSibling;
    const plus = element.querySelector('.plus');

    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        plus.textContent = '-';
        element.querySelector('span:first-child').textContent = 'Details';
        element.classList.add('active');
        details.classList.add('active');
    } else {
        details.style.display = 'none';
        plus.textContent = '+';
        function toggleDetails(element) {
            const details = element.nextElementSibling;
            const plus = element.querySelector('.plus');
        
            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block';
                plus.textContent = '-';
                element.querySelector('span:first-child').textContent = 'Details';
                element.classList.add('active');
                details.classList.add('active');
            } else {
                details.style.display = 'none';
                plus.textContent = '+';
                element.classList.remove('active');
                details.classList.remove('active');
            }
        }}};

       
      /*  document.addEventListener('DOMContentLoaded', function() {
            // Funktionen für jeden Abschnitt
            function scrollToIdee() {
                const ideeSection = document.getElementById('#idee');
                ideeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        
            function scrollToKonzept() {
                const konzeptSection = document.getElementById('#konzept');
                konzeptSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        
            function scrollToProbevideo() {
                const probevideoSection = document.getElementById('#probevideo');
                probevideoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        
            function scrollToFeinjustierung() {
                const feinjustierungSection = document.getElementById('#feinjustierung');
                feinjustierungSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        
            function scrollToFinaleUmsetzung() {
                const finaleUmsetzungSection = document.getElementById('#finale-umsetzung');
                finaleUmsetzungSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        
            // Event Listener für jeden Navigationslink
            const ideeLink = document.querySelector('.navbar a[href="#idee"]');
            ideeLink.addEventListener('click', scrollToIdee);
        
            const konzeptLink = document.querySelector('.navbar a[href="#konzept"]');
            konzeptLink.addEventListener('click', scrollToKonzept);
        
            const probevideoLink = document.querySelector('.navbar a[href="#probevideo"]');
            probevideoLink.addEventListener('click', scrollToProbevideo);
        
            const feinjustierungLink = document.querySelector('.navbar a[href="#feinjustierung"]');
            feinjustierungLink.addEventListener('click', scrollToFeinjustierung);
        
            const finaleUmsetzungLink = document.querySelector('.navbar a[href="#finale-umsetzung"]');
            finaleUmsetzungLink.addEventListener('click', scrollToFinaleUmsetzung);
        });
        
       
        
        element.classList.remove('active');
        details.classList.remove('active');
    }
}


document.addEventListener('DOMContentLoaded', function() {
    // Funktionen für jeden Abschnitt
    function scrollToIdee() {
        const ideeSection = document.getElementById('#idee');
        ideeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function scrollToKonzept() {
        const konzeptSection = document.getElementById('#konzept');
        konzeptSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function scrollToProbevideo() {
        const probevideoSection = document.getElementById('#probevideo');
        probevideoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function scrollToFeinjustierung() {
        const feinjustierungSection = document.getElementById('#feinjustierung');
        feinjustierungSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function scrollToFinaleUmsetzung() {
        const finaleUmsetzungSection = document.getElementById('#finale-umsetzung');
        finaleUmsetzungSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Event Listener für jeden Navigationslink
    const ideeLink = document.querySelector('.navbar a[href="#idee"]');
    ideeLink.addEventListener('click', scrollToIdee);

    const konzeptLink = document.querySelector('.navbar a[href="#konzept"]');
    konzeptLink.addEventListener('click', scrollToKonzept);

    const probevideoLink = document.querySelector('.navbar a[href="#probevideo"]');
    probevideoLink.addEventListener('click', scrollToProbevideo);

    const feinjustierungLink = document.querySelector('.navbar a[href="#feinjustierung"]');
    feinjustierungLink.addEventListener('click', scrollToFeinjustierung);

    const finaleUmsetzungLink = document.querySelector('.navbar a[href="#finale-umsetzung"]');
    finaleUmsetzungLink.addEventListener('click', scrollToFinaleUmsetzung);
})

*/