import {defineConfig} from "@pandacss/dev";

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ["./src/**/*.{js,jsx,ts,tsx,astro}", "./pages/**/*.{js,jsx,ts,tsx,astro}"],

    // Files to exclude
    exclude: [],

    patterns: {

    },

    globalVars: {
        '--font-montserrat': 'montserrat',
        '--font-barlow': 'barlow',
    },

    // Useful for theme customization
    theme: {
        extend: {
            breakpoints: {
                xs: "350px",
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
            },
            tokens: {
                fonts: {
                    montserrat: {
                        value: "var(--font-montserrat), sans-serif",
                    },
                    barlow: {
                        value: "var(--font-barlow), sans-serif",
                    }
                },
                colors: {
                    primary: {
                        5: {value: "rgb(0 39 64 / 0.05)"},
                        70: { value: "rgb(0 39 64 / 0.7)" },
                        100: { value: "rgb(0 39 64)" }
                    },
                    secondary: { value: "#ed7d1a" },
                    third: { value: "#5d358f"},
                    fourth: { value: "#ef0098" },
                    fifth: { value: "#460098" },
                },
                radii : { value: "0.75rem" }
            },
        },
    },

    globalFontface: {
        barlow: [
            {
                src: "url(/fonts/barlow/Barlow-Thin.ttf) format('truetype')",
                fontWeight: "100",
                fontStyle: "normal",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/Barlow-ThinItalic.ttf) format('truetype')",
                fontWeight: "100",
                fontStyle: "italic",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/Barlow-ExtraLight.ttf) format('truetype')",
                fontWeight: "200",
                fontStyle: "normal",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/Barlow-ExtraLightItalic.ttf) format('truetype')",
                fontWeight: "200",
                fontStyle: "italic",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/Barlow-Light.ttf) format('truetype')",
                fontWeight: "300",
                fontStyle: "normal",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/Barlow-LightItalic.ttf) format('truetype')",
                fontWeight: "300",
                fontStyle: "italic",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/Barlow-Regular.ttf) format('truetype')",
                fontWeight: "400",
                fontStyle: "normal",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/Barlow-Italic.ttf) format('truetype')",
                fontWeight: "400",
                fontStyle: "italic",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/Barlow-Medium.ttf) format('truetype')",
                fontWeight: "500",
                fontStyle: "normal",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/Barlow-MediumItalic.ttf) format('truetype')",
                fontWeight: "500",
                fontStyle: "italic",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/Barlow-SemiBold.ttf) format('truetype')",
                fontWeight: "600",
                fontStyle: "normal",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/Barlow-SemiBoldItalic.ttf) format('truetype')",
                fontWeight: "600",
                fontStyle: "italic",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/Barlow-Bold.ttf) format('truetype')",
                fontWeight: "700",
                fontStyle: "normal",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/Barlow-BoldItalic.ttf) format('truetype')",
                fontWeight: "700",
                fontStyle: "italic",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/Barlow-ExtraBold.ttf) format('truetype')",
                fontWeight: "800",
                fontStyle: "normal",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/Barlow-ExtraBoldItalic.ttf) format('truetype')",
                fontWeight: "800",
                fontStyle: "italic",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/Barlow-Black.ttf) format('truetype')",
                fontWeight: "900",
                fontStyle: "normal",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/Barlow-BlackItalic.ttf) format('truetype')",
                fontWeight: "900",
                fontStyle: "italic",
                fontDisplay: "swap"
            }
        ],
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
