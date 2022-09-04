import { extendTheme } from "@chakra-ui/react";
import "@fontsource/titillium-web/900.css"
import '@fontsource/montserrat/300.css'

const theme = extendTheme({
    colors: {
        navy: '#264653',
        orange: '#f4a261',
        yellow: '#e9c46a'
    },
    fonts: {
        header: `'Titillium Web'`,
        body: `'Montserrat'`,
    }
})

export default theme;