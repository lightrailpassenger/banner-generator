// Font source: https://github.ink/flyskywhy/react-native-font-sim/raw/master/fonts/SimHei.ttf

const initialize = async () => {
    const font = new FontFace("SimHei", `url(./lib/font/SimHei.ttf)`);

    document.fonts.add(font);
    font.load();

    await document.fonts.ready;
};

const draw = (canvas, text, wrapWidth, fg, bg, fontSize) => {
    const ctx = canvas.getContext('2d');

    ctx.font = `bold ${fontSize}px SimHei`;

    const { fontBoundingBoxAscent, fontBoundingBoxDescent, width } = ctx.measureText(text);
    const height = fontBoundingBoxAscent - fontBoundingBoxDescent + 50; // TODO: Margin

    canvas.width = Math.min(wrapWidth, width + 10);
    canvas.height = height;

    ctx.font = `bold ${fontSize}px SimHei`;
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = fg;
    ctx.fillText(text, 5, canvas.height - 25); // TODO: Wrapping
};

export { initialize, draw };
