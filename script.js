document.addEventListener('DOMContentLoaded', () => {
    const confirmButton = document.getElementById('confirmButton');
    confirmButton.addEventListener('click', () => {
        const selectedNames = [];
        document.querySelectorAll('.name-checkbox:checked').forEach(checkbox => {
            selectedNames.push(checkbox.value);
        });
        const namesText = selectedNames.join('\n');
        navigator.clipboard.writeText(namesText)
            .then(() => alert('クリップボードにコピーしました: \n' + namesText))
            .catch(err => console.error('クリップボードへのコピーに失敗しました:', err));
    });
});
