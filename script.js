document.addEventListener('DOMContentLoaded', function () {
    const groupA = ['hoge', 'hoge', 'hoge', 'hoge', 'hoge', 'hoge', 'hoge', 'hoge', 'hoge', 'hoge', 'hoge', 'hoge', 'hoge', 'hoge', 'hoge',/* 他の名前を追加 */];
    const groupB = ['hoge', 'hoge', 'hoge', 'hoge', 'hoge', 'hoge', 'hoge', 'hoge', 'hoge', 'hoge', 'hoge', 'hoge', 'hoge', 'hoge', 'hoge',/* 他の名前を追加 */];
    const groupC = ['hoge', 'hoge', 'hoge', 'hoge', 'hoge', 'hoge', 'hoge', 'hoge', 'hoge', 'hoge', 'hoge', 'hoge', 'hoge', 'hoge', 'hoge',/* 他の名前を追加 */];

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
            addToClipboard()
        });
    });
});

function createCheckbox(name) {
    const label = document.createElement('label');
    label.classList.add('checkbox');
    label.innerHTML = `<input type="checkbox" value="${name}"> ${name}`;
    return label;
}

function addToClipboard() {
    // ポップアップを表示
    const popup = document.getElementById("popup");
    popup.classList.remove("hide");
    popup.style.opacity = 1;

    // 3秒後にポップアップを非表示にする
    setTimeout(() => {
        popup.style.opacity = 0;
        setTimeout(() => popup.classList.add("hide"), 500);
    }, 3000);
}