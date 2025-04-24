document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.querySelector('.start-button');
    const bottomSections = document.querySelector('.bottom-sections');
    const mainContent = document.querySelector('.main-content');
    const copyButtonNav = document.getElementById('copyButtonNav');
    const ipAddressNavElement = document.getElementById('ipAddressNav');

    if (copyButtonNav && ipAddressNavElement) {
        copyButtonNav.addEventListener('click', function() {
            const ipAddressNav = ipAddressNavElement.textContent;
            const textAreaNav = document.createElement('textarea');
            textAreaNav.value = ipAddressNav;
            document.body.appendChild(textAreaNav);
            textAreaNav.select();
            document.execCommand('copy');
            document.body.removeChild(textAreaNav);
            alert('IP-адрес скопирован!');
        });
    }

    if (startButton && bottomSections && mainContent) {
        startButton.addEventListener('click', function() {
            startButton.style.transform = 'translateY(200px)';
            startButton.style.opacity = '0';
            setTimeout(function() {
                startButton.style.display = 'none';
                bottomSections.classList.add('visible');
                mainContent.style.justifyContent = 'flex-start';
            }, 300);
        });
    }
});
