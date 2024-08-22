import {defineConfig} from "@pandacss/dev";

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ["./src/**/*.{js,jsx,ts,tsx,astro}", "./pages/**/*.{js,jsx,ts,tsx,astro}"],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        extend: {
            tokens: {
                fonts: {
                    montserrat: {
                        value: 'var(--font-montserrat)'
                    }
                },
                colors: {
                    primary: {
                        100: {value: "#2a3159"}
                    },
                    secondary: {
                        100: {value: "#ed7d1a"}
                    },
                },
            },
        },
    },

    globalVars: {
        '--font-montserrat': 'montserrat'
    },

    globalFontface: {
        montserrat: [
            {
                src: "url(/fonts/montserrat/Montserrat-Thin.ttf) format('truetype')",
                fontWeight: "100",
                fontStyle: "normal",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/montserrat/Montserrat-ThinItalic.ttf) format('truetype')",
                fontWeight: "100",
                fontStyle: "italic",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/montserrat/Montserrat-ExtraLight.ttf) format('truetype')",
                fontWeight: "200",
                fontStyle: "normal",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/montserrat/Montserrat-ExtraLightItalic.ttf) format('truetype')",
                fontWeight: "200",
                fontStyle: "italic",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/montserrat/Montserrat-Light.ttf) format('truetype')",
                fontWeight: "300",
                fontStyle: "normal",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/montserrat/Montserrat-LightItalic.ttf) format('truetype')",
                fontWeight: "300",
                fontStyle: "italic",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/montserrat/Montserrat-Regular.ttf) format('truetype')",
                fontWeight: "400",
                fontStyle: "normal",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/montserrat/Montserrat-Italic.ttf) format('truetype')",
                fontWeight: "400",
                fontStyle: "italic",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/montserrat/Montserrat-Medium.ttf) format('truetype')",
                fontWeight: "500",
                fontStyle: "normal",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/montserrat/Montserrat-MediumItalic.ttf) format('truetype')",
                fontWeight: "500",
                fontStyle: "italic",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/montserrat/Montserrat-SemiBold.ttf) format('truetype')",
                fontWeight: "600",
                fontStyle: "normal",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/montserrat/Montserrat-SemiBoldItalic.ttf) format('truetype')",
                fontWeight: "600",
                fontStyle: "italic",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/montserrat/Montserrat-Bold.ttf) format('truetype')",
                fontWeight: "700",
                fontStyle: "normal",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/montserrat/Montserrat-BoldItalic.ttf) format('truetype')",
                fontWeight: "700",
                fontStyle: "italic",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/montserrat/Montserrat-ExtraBold.ttf) format('truetype')",
                fontWeight: "800",
                fontStyle: "normal",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/montserrat/Montserrat-ExtraBoldItalic.ttf) format('truetype')",
                fontWeight: "800",
                fontStyle: "italic",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/montserrat/Montserrat-Black.ttf) format('truetype')",
                fontWeight: "900",
                fontStyle: "normal",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/montserrat/Montserrat-BlackItalic.ttf) format('truetype')",
                fontWeight: "900",
                fontStyle: "italic",
                fontDisplay: "swap"
            }
        ]
    },

    // The output directory for your css system
    outdir: "styled-system",
});
