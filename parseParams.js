import * as yup from "yup";

const colorRegex = /^[0-9a-z]{6}$/;
const schema = yup.object({
    w: yup.number().required().min(10).max(10000),
    t: yup.string(),
    bg: yup.string().matches(colorRegex),
    fg: yup.string().matches(colorRegex),
});

function parseParams(params) {
    return schema.isValidSync(params) ?
        schema.cast(params) :
        {
            w: 1024,
            t: "",
            bg: "de2910",
            fg: "ffde00",
        };
}

export default parseParams;
