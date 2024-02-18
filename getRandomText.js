function getRandomText(lang) {
    // TODO: Switch lang
    const rand = Math.floor(Math.random() * 4);

    switch (rand) {
        case 0:
        return "熱烈歡迎";
        case 1:
        return "永遠懷念";
        case 2:
        return "好好學習";
        case 3:
        return "努力工作";
    }
}

export default getRandomText;
