document.addEventListener('DOMContentLoaded', function() {
    const groupA = ['名前A1', '名前A2', '名前A3', /* 他の名前を追加 */];
    const groupB = ['名前B1', '名前B2', '名前B3', /* 他の名前を追加 */];
    const groupC = ['名前C1', '名前C2', '名前C3', /* 他の名前を追加 */];

    const groupAContainer = document.getElementById('groupA');
    const groupBContainer = document.getElementById('groupB');
    const groupCContainer = document.getElementById('groupC');

    groupA.forEach(name => {
        const checkbox = createCheckbox(name);
        groupAContainer.appendChild(checkbox);
    });

    groupB.forEach(name => {
        const checkbox = createCheckbox(name);
        groupBContainer.appendChild(checkbox);
    });

    groupC.forEach(name => {
        const checkbox = createCheckbox(name);
        groupCContainer.appendChild(checkbox);
    });

    document.getElementById('confirmBtn').addEventListener('click', () => {
        const selectedNames = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(el => el.value);
        const namesText = selectedNames.join('\n');
        navigator.clipboard.writeText(namesText).then(() => {
            alert('クリップボードにコピーしました。');
        });
    });
});

function createCheckbox(name) {
    const label = document.createElement('label');
    label.classList.add('checkbox');
    label.innerHTML = `<input type="checkbox" value="${name}"> ${name}`;
    return label;
}
