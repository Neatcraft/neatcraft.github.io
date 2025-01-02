import {defineConfig} from "@pandacss/dev";

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ["./src/**/*.{js,jsx,ts,tsx,astro}", "./pages/**/*.{js,jsx,ts,tsx,astro}"],

    // Files to exclude
    exclude: [],

    patterns: {
        extend: {
            section: {
                description: "section container",
                defaultValues: {
                    marginTop: "0",
                    bgColor: "primary.100",
                    flexDir: "row",
                },
                properties: {
                    marginTop: {type: "string"},
                    bgColor: {type: "string"},
                    flexDir: {type: "enum", value: ["column", "row"]}
                },
                transform(prop) {
                    return {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "3% 2% 7% 2%",
                        "&:target": {
                            _portrait: {
                                scrollMarginTop: "15vh",
                            },
                            _landscape: {
                                scrollMarginTop: {xs: "15vw", lg: "5vw"},
                            },
                        },
                        ...prop
                    }
                }
            },
            title: {
                description: "title",
                defaultValues: {
                    color: "white"
                },
                properties: {
                    color: {type: "string"},
                },
                transform(props) {
                    return {
                        display: "block",
                        fontFamily: "barlow",
                        fontSize: {xs: "3rem", lg: "7rem"},
                        lineHeight: "1",
                        fontWeight: "500",
                        textTransform: "uppercase",
                        textAlign: {xs:"center",sm:"center",md:"center"},
                            ...props
                    }
                }
            },
            paragraph: {
                description: "paragraph",
                transform(props) {
                    return {
                        fontFamily: "montserrat",
                        fontSize: {xs: "1.2rem", lg: "2rem"},
                        textAlign: 'center',
                        fontWeight: "400",
                        lineHeight: {xs: "1.5rem", md: "2.7rem"},
                        marginTop: "1rem",
                        marginBottom: "2rem",
                        ...props
                    }
                }
            },
        }
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
                        value: 'var(--font-montserrat)'
                    }
                },
                colors: {
                    primary: {
                        100: {value: "#2a3159"},
                        200: {value: "#3a3f6b"},
                        300: {value: "#4a4f7f"},
                        400: {value: "#5a5f8f"},
                        500: {value: "#6a6f9f"},
                        600: {value: "#7a7fa0"},
                        700: {value: "#8a8fa1"},
                        800: {value: "#9a9fa2"},
                        900: {value: "#aaaaa3"},
                        950: {value: "#bbbbb4"},
                    },
                    secondary: {
                        100: {value: "#ed7d1a"},
                        200: {value: "#ef8a31"},
                        300: {value: "#f19748"},
                        400: {value: "#f2a45f"},
                        500: {value: "#f4b176"},
                        600: {value: "#f6be8c"},
                        700: {value: "#f8cba3"},
                        800: {value: "#fad8ba"},
                        900: {value: "#fbe5d1"},
                        950: {value: "#fdf2e8"}
                    },
                    third: {
                        100: {value: "#7d41aa"},
                        200: {value: "#8b4cbb"},
                        300: {value: "#9860c2"},
                        400: {value: "#a574ca"},
                        500: {value: "#b288d1"},
                        600: {value: "#bf9bd9"},
                        700: {value: "#ccafe1"},
                        800: {value: "#d8c3e8"},
                        900: {value: "#e5d7f0"},
                        950: {value: "#f2ebf7"}
                    }
                },
            },
        },
    },

    globalVars: {
        '--font-montserrat': 'montserrat'
    },

    globalFontface: {
        barlow: [
            {
                src: "url(/fonts/barlow/BarlowCondensed-Thin.ttf) format('truetype')",
                fontWeight: "100",
                fontStyle: "normal",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/BarlowCondensed-ThinItalic.ttf) format('truetype')",
                fontWeight: "100",
                fontStyle: "italic",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/BarlowCondensed-ExtraLight.ttf) format('truetype')",
                fontWeight: "200",
                fontStyle: "normal",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/BarlowCondensed-ExtraLightItalic.ttf) format('truetype')",
                fontWeight: "200",
                fontStyle: "italic",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/BarlowCondensed-Light.ttf) format('truetype')",
                fontWeight: "300",
                fontStyle: "normal",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/BarlowCondensed-LightItalic.ttf) format('truetype')",
                fontWeight: "300",
                fontStyle: "italic",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/BarlowCondensed-Regular.ttf) format('truetype')",
                fontWeight: "400",
                fontStyle: "normal",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/BarlowCondensed-Italic.ttf) format('truetype')",
                fontWeight: "400",
                fontStyle: "italic",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/BarlowCondensed-Medium.ttf) format('truetype')",
                fontWeight: "500",
                fontStyle: "normal",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/BarlowCondensed-MediumItalic.ttf) format('truetype')",
                fontWeight: "500",
                fontStyle: "italic",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/BarlowCondensed-SemiBold.ttf) format('truetype')",
                fontWeight: "600",
                fontStyle: "normal",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/BarlowCondensed-SemiBoldItalic.ttf) format('truetype')",
                fontWeight: "600",
                fontStyle: "italic",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/BarlowCondensed-Bold.ttf) format('truetype')",
                fontWeight: "700",
                fontStyle: "normal",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/BarlowCondensed-BoldItalic.ttf) format('truetype')",
                fontWeight: "700",
                fontStyle: "italic",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/BarlowCondensed-ExtraBold.ttf) format('truetype')",
                fontWeight: "800",
                fontStyle: "normal",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/BarlowCondensed-ExtraBoldItalic.ttf) format('truetype')",
                fontWeight: "800",
                fontStyle: "italic",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/BarlowCondensed-Black.ttf) format('truetype')",
                fontWeight: "900",
                fontStyle: "normal",
                fontDisplay: "swap"
            }, {
                src: "url(/fonts/barlow/BarlowCondensed-BlackItalic.ttf) format('truetype')",
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
