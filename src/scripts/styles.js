function resizeIframe(iframe) {
    iframe.style.height = iframe.contentWindow.document.documentElement.scrollHeight + 'px';
}

function resizeAllIframes() {
    document.querySelectorAll('iframe').forEach(iframe => {
        iframe.onload = () => resizeIframe(iframe);
    });
}

// Executar a função assim que o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', resizeAllIframes);