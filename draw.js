// Font source: https://github.ink/flyskywhy/react-native-font-sim/raw/master/fonts/SimHei.ttf

const initialize = async () => {
    const font = new FontFace("SimHei", `url(./lib/font/SimHei.ttf)`);

    document.fonts.add(font);

    await font.load();
};

const draw = (canvas, text, wrapWidth, fg, bg, fontSize) => {
    const ctx = canvas.getContext('2d');

    ctx.font = `${fontSize}px SimHei`;

    const { fontBoundingBoxAscent, fontBoundingBoxDescent, width } = ctx.measureText(text);
    const height = fontBoundingBoxAscent - fontBoundingBoxDescent + 50; // TODO: Margin
    const measuredWidth = width + 10;
    const chunks = [];

    if (wrapWidth <= measuredWidth) {
        // chunk
        let current = "";

        for (const char of text) {
            const { width } = ctx.measureText(`${current}${char}`);

            if (width > wrapWidth - 10) {
                chunks.push(current);
                current = char;
            } else {
                current = `${current}${char}`;
            }
        }

        chunks.push(current);
        canvas.width = wrapWidth;
        canvas.height = (fontBoundingBoxAscent - fontBoundingBoxDescent + 50) * chunks.length;
    } else {
        chunks.push(text);
        canvas.width = measuredWidth;
        canvas.height = height;
    }

    ctx.font = `${fontSize}px SimHei`;
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = fg;

    let accHeight = fontBoundingBoxAscent - fontBoundingBoxDescent + 25;

    for (let chunk of chunks) {
        const { width: chunkWidth } = ctx.measureText(chunk);

        ctx.fillText(chunk, (canvas.width - chunkWidth) / 2, accHeight);
        accHeight += (fontBoundingBoxAscent - fontBoundingBoxDescent + 50);
    }
};

export { initialize, draw };
