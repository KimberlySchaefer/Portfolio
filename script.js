// ==================== //
// JAVASCRIPT FOR PORTFOLIO WEBSITE
// ==================== //

// PROJECT DATA
const projectData = {
    1: { // Purple Aesthetics
        title: 'Purple Aesthetics',
        category: 'Visual Design',
        image: './Images/Collage6/Collage6.png',
        description: 'In dieser frühen Phase meiner Design-Reise lag der Fokus auf dem präzisen Anordnen und Zuschneiden von Bildmaterial. Durch das Spiel mit einer monochromatischen, violetten Farbpalette habe ich gelernt, wie unterschiedliche Motive durch gezielte Farbanpassungen zu einer stimmigen, atmosphärischen Gesamteinheit verschmelzen.',
        detailImages: [
            './Images/Collage6/.jpg',
            './Images/Collage6/⋆.jpg',
            './Images/Collage6/2_.jpg',
            './Images/Collage6/8.jpg',
            './Images/Collage6/cutecat.jpg',
            './Images/Collage6/Download(2).jpg',
            './Images/Collage6/Download3).jpg',
            './Images/Collage6/Download4).jpg',
            './Images/Collage6/Download7).jpg',
            './Images/Collage6/Download8).jpg',
            './Images/Collage6/Download9).jpg',
            './Images/Collage6/Download10).jpg',
            './Images/Collage6/hz.jpg',
            './Images/Collage6/inlovepurple.jpg',
            './Images/Collage6/Moon.jpg',
            './Images/Collage6/Tecna _ Technology _ Winx Aesthetic.jpg',
            './Images/Collage6/WELOVETHEATTITUDE.jpg'
        ],
        tools: 'Adobe Photoshop',
        year: '2026'
    },
    2: {
        title: 'Film Noir Collection',
        category: 'Photography',
        image: './Images/Collage1/Collage1.png',
        description: 'Dieses Projekt diente als intensive Übung im Umgang mit Bildhierarchien und dem Toolset von Photoshop. Durch die Kombination von harten Schwarz-Weiß-Kontrasten und dem präzisen Maskieren von Objekten habe ich erste Techniken entwickelt, um visuelle Narrative innerhalb einer komplexen Collagen-Struktur zu erzeugen.',
        detailImages: [
        './Images/Collage1/𝙢𝙖𝙩𝙚𝙧𝙞𝙖𝙡_.jpg', 
        './Images/Collage1/(2).jpg', 
        './Images/Collage1/Download.jpg',              
        './Images/Collage1/Download(1).jpg',              
        './Images/Collage1/Download(3).jpg',              
        './Images/Collage1/Download(6).jpg',              
        './Images/Collage1/Download(9).jpg',              
        './Images/Collage1/Download(10).jpg',              
        './Images/Collage1/Download(13).jpg',              
        './Images/Collage1/Download4).jpg',              
        './Images/Collage1/Download8).jpg',              
        './Images/Collage1/Download11).jpg',              
        './Images/Collage1/Download12).jpg',              
        './Images/Collage1/.jpg',              
        ],
        tools: 'Adobe Photoshop',
        year: '2026'
    },
    3: {
        title: 'DIVINE Magazine',
        category: 'Editorial Design',
        image: './Images/Divine/Divine.png',
        description: 'Mit diesem Magazincover-Entwurf begann meine vertiefte Auseinandersetzung mit dem Ebenen-System. Das Zusammenspiel von rauchigen Texturen, Überlagerungseffekten und einer minimalistischen Typografie markiert den Übergang von einfachen Collagen hin zu strukturierten, redaktionellen Layout-Konzepten.',
        detailImages: ['./Images/Divine/Download(2).jpg', './Images/Divine/Download3).jpg', './Images/Divine/k.jpg'],
        tools: 'Adobe InDesign, Photoshop',
        year: '2025'
    },
    4: {
        title: 'HER',
        category: 'Film Poster',
        image: './Images/Her/HER.png',
        description: 'Dieses Plakatprojekt fokussiert sich auf die Erzeugung von Räumlichkeit. Durch das Experimentieren mit verschiedenen Ebenen-Modi und Maskierungstechniken ist es mir gelungen, die Silhouette organisch in die neblige Umgebung einzubetten und so eine fesselnde, cineastische Atmosphäre zu kreieren.',
        detailImages: ['./Images/Her/Gemini_Generated_Image_9cvwt9cvwt9cvwt9.png', './Images/Divine/Download3).jpg'],
        tools: 'Adobe Photoshop, Illustrator',
        year: '2026'
    },
    5: {
        title: 'The Last Transmission',
        category: 'Sci-Fi Poster',
        image: './Images/TheLastTransmission/The_Last_Transmission.png',
        description: 'In diesem Entwurf habe ich die Arbeit mit komplexen Ebenen-Strukturen weiter perfektioniert. Das Projekt demonstriert meine Entwicklung im Bereich des digitalen Compositings, wobei der Fokus auf der Harmonisierung von Lichtquellen und der Platzierung prägnanter Typografie im Raum liegt.',
        detailImages: ['./Images/TheLastTransmission/space-shuttle-156012.svg', './Images/TheLastTransmission/dolby-1.svg', './Images/TheLastTransmission/imax-2.svg', './Images/TheLastTransmission/Interstellartakesusbeyondthestars.jpg', './Images/TheLastTransmission/panavision.svg', './Images/TheLastTransmission/sdds-sony-dynamic-digital-sound.svg',],
        tools: 'Adobe Photoshop',
        year: '2026'
    },
    6: {
        title: 'Nightshift',
        category: 'Digital Art',
        image: './Images/Nightshift/Nightshift.png',
        description: 'Hier stand das Experiment mit typografischen Elementen im Vordergrund. Durch das bewusste Aufbrechen klassischer Layout-Regeln und den Einsatz von Glitch-Effekten habe ich untersucht, wie Text nicht nur als Information, sondern als aktives Gestaltungselement mit der Bildkomposition interagieren kann.',
        detailImages: ['./Images/Nightshift/Download.jpg'],
        tools: 'Adobe Photoshop',
        year: '2026'
    },
    7: {
        title: 'Girl',
        category: 'Digital Art',
        image: './Images/GirlwithNewspaper/girl.png',
        description: 'Dieses Projekt konzentriert sich auf die Reduktion. Mit nur zwei Hauptebenen habe ich die Wirkung von Farben und deren harmonisches Zusammenspiel erforscht, um eine klare, emotionale Bildsprache zu entwickeln, die trotz ihrer Einfachheit eine starke visuelle Präsenz entfaltet.',
        detailImages: ['./Images/GirlwithNewspaper/aleksandra‘sasha’ivanova_.jpg', './Images/GirlwithNewspaper/bw.jpg', './Images/GirlwithNewspaper/d.jpg'],
        tools: 'Adobe Photoshop',
        year: '2026'
    },
    8: {
        title: 'Matrix Couple',
        category: 'Digital Art',
        image: './Images/MatrixCouple/MatrixCouple.png',
        description: 'In dieser Arbeit habe ich die Grenzen der Bildbearbeitung durch intensive Verzerrungstechniken und eine Vielzahl übereinandergelagerter Ebenen ausgelotet. Das Resultat ist eine dynamische Komposition, die durch mutige Farbexperimente und digitale Artefakte eine hohe visuelle Energie erzeugt.',
        detailImages: ['./Images/MatrixCouple/CosmicEnergy Dance.jpg', './Images/MatrixCouple/Download(6).jpg', './Images/MatrixCouple/Download(7).jpg', './Images/MatrixCouple/gn.jpg', './Images/MatrixCouple/Wallpaper.jpg'],
        tools: 'Adobe Photoshop',
        year: '2026'
    },
    9: {
        title: 'Lost in Silence',
        category: 'Digital Art',
        image: './Images/LostinSilence/LostinSilence(zoom).png',
        description: 'In dieser Arbeit habe ich die Grenzen der Bildbearbeitung durch intensive Verzerrungstechniken und eine Vielzahl übereinandergelagerter Ebenen ausgelotet. Das Resultat ist eine dynamische Komposition, die durch mutige Farbexperimente und digitale Artefakte eine hohe visuelle Energie erzeugt.',
        detailImages: ['./Images/LostinSilence/Download6).jpg'],
        tools: 'Adobe Photoshop',
        year: '2026'
    },
    10: {
        title: 'Old TV',
        category: 'Digital Art',
        image: './Images/OldTV/oldtv.png',
        description: 'Dieses Design nutzt repetitive Texturen und Code-Elemente, um mit der menschlichen Wahrnehmung von Perspektive zu spielen. Durch das geschickte Layering unterschiedlicher Informationsebenen entstand ein technisches Layout, das Tiefe und eine futuristische Ästhetik vereint.',
        detailImages: ['./Images/OldTV/Download(15).jpg', './Images/OldTV/Download(16).jpg'],
        tools: 'Adobe Photoshop',
        year: '2026'
    },
    11: {
        title: 'Pew Pew',
        category: 'Digital Art',
        image: './Images/PewPew/pewpew.gif',
        description: 'Als eines meiner ersten Projekte in After Effects markiert diese Arbeit den Einstieg in die Welt der Motion Graphics. Ich habe hier insbesondere mit dem Rauscheffekt und der Anordnung von Ebenen experimentiert, um die Ästhetik analoger Videotechnik in den digitalen Raum zu übertragen.',
        detailImages: ['./Images/PewPew/background.png', './Images/PewPew/vordergrund.png'],
        tools: 'Adobe Photoshop, After Effects',
        year: '2026'
    },
    12: {
        title: 'Night',
        category: 'Digital Art',
        image: './Images/Night/Night.png',
        description: 'Bei diesem Entwurf habe ich intensiv mit der Wiederholung von Schriftzügen experimentiert, um ein rhythmisches Muster zu erzeugen. Das Projekt zeigt meine Fortschritte im Umgang mit Typografie als eigenständiges grafisches Muster in Kombination mit freigestellten Foto-Elementen.',
        detailImages: ['./Images/Night/Download.jpg'],
        tools: 'Adobe Photoshop',
        year: '2026'
    }
};

// INITIALIZE ON PAGE LOAD
document.addEventListener('DOMContentLoaded', function() {
    initializeStars();
    initializeThemeToggle();
    initializeProjectCards();
    initializeModal();
});

// GENERATE STARS
function initializeStars() {
    const starsContainer = document.getElementById('starsContainer');
    const numberOfStars = 50;
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        star.style.animationDuration = `${2 + Math.random() * 3}s`;
        starsContainer.appendChild(star);
    }
}

// THEME TOGGLE
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');
    const body = document.body;
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark');
        sunIcon.classList.toggle('hidden');
        moonIcon.classList.toggle('hidden');
    });
}

// PROJECT CARDS
function initializeProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = parseInt(this.getAttribute('data-project-id'));
            openProjectModal(projectId);
        });
    });
}

// MODAL FUNCTIONS
function initializeModal() {
    const modal = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');
    
    // Close button
    modalClose.addEventListener('click', closeModal);
    
    // Click outside to close
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // ESC key to close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const project = projectData[projectId];
    
    if (!project) return;
    
    // Generate modal content
    let detailImagesHTML = '';
    project.detailImages.forEach((image, index) => {
        detailImagesHTML += `
            <div class="modal-detail-item">
                <img src="${image}" alt="Detail ${index + 1}">
            </div>
        `;
    });
    
    const modalContent = `
        <div class="modal-header">
            <h2 class="modal-title">${project.title}</h2>
            <p class="modal-category">${project.category}</p>
        </div>
        
        <div class="modal-main-image">
            <img src="${project.image}" alt="${project.title}">
        </div>
        
        <div class="modal-section">
            <h3>Projektbeschreibung</h3>
            <p class="modal-description">${project.description}</p>
        </div>
        
        <div class="modal-section">
            <h3>Projektbestandteile</h3>
            <div class="modal-details-grid">
                ${detailImagesHTML}
            </div>
        </div>
        
        <div class="modal-info-grid">
            <div class="modal-info-item">
                <h4>Tools</h4>
                <p>${project.tools}</p>
            </div>
            <div class="modal-info-item">
                <h4>Jahr</h4>
                <p>${project.year}</p>
            </div>
            <div class="modal-info-item">
                <h4>Typ</h4>
                <p>${project.category}</p>
            </div>
        </div>
    `;
    
    modalBody.innerHTML = modalContent;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}
