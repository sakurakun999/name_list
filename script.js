document.addEventListener('DOMContentLoaded', () => {
    const namesGroups = [
        ["名前1-1", "名前1-2", "名前1-3"], // グループ1
        ["名前2-1", "名前2-2", "名前2-3"],  // グループ2
        // 必要に応じて更にグループを追加
    ];

    const namesContainer = document.getElementById('namesContainer');
    const columns = document.createElement('div');
    columns.className = 'columns';

    namesGroups.forEach(group => {
        const column = document.createElement('div');
        column.className = 'column';
        group.forEach(name => {
            const label = document.createElement('label');
            label.className = 'checkbox';
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.className = 'name-checkbox';
            input.value = name;
            label.appendChild(input);
            label.append(` ${name}`);
            column.appendChild(label);
        });
        columns.appendChild(column);
    });

    namesContainer.appendChild(columns);

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
