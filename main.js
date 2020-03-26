window.addEventListener('load', async f => {
    if ('serviceWorker' in navigator) {
        try {
            navigator.serviceWorker.register('sw.js');
            console.log('succeed');
        } catch (error) {
            console.log('failed');
        }
    }
});