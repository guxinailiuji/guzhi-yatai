// Flag SVG data
const flagsSVG = {
    japan: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
            <rect width="900" height="600" fill="#fff"/>
            <circle cx="450" cy="300" r="180" fill="#bc002d"/>
        </svg>
    `,
    korea: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
            <rect width="900" height="600" fill="#fff"/>
            <path fill="#c60c30" d="m450,300 113.2,-90.8a150,150 0 0,0 -226.4,0z"/>
            <path fill="#003478" d="m450,300 -113.2,-90.8a150,150 0 0,0 -38.4,95.4,150,150 0 0,0 75.4,129.9z"/>
            <path fill="#c60c30" d="m450,300 -76.2,134.5a150,150 0 0,0 152.4,0z"/>
            <path fill="#003478" d="m450,300 76.2,134.5a150,150 0 0,0 75.4,-129.9,150,150 0 0,0 -38.4,-95.4z"/>
            <circle cx="450" cy="300" r="75" fill="#fff"/>
            <path fill="#003478" d="m363.8,400 86.2,-150 86.2,150"/>
            <path fill="#c60c30" d="m536.2,200 -86.2,150 -86.2,-150"/>
        </svg>
    `,
    taiwan: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
            <rect width="900" height="600" fill="#fe0000"/>
            <rect width="450" height="300" fill="#000095"/>
            <path d="M225,150 L225,110 L255,110 L225,80 L255,50 L225,50 L225,10 L195,10 L195,50 L165,50 L195,80 L165,110 L195,110 L195,150 Z" fill="white"/>
            <circle cx="225" cy="150" r="60" fill="white"/>
            <circle cx="225" cy="150" r="45" fill="#000095"/>
        </svg>
    `,
    singapore: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
            <rect width="900" height="600" fill="#fff"/>
            <rect width="900" height="300" fill="#ED2939"/>
            <path d="M225,100 A75,75 0 0,0 225,250 A75,75 0 0,0 225,100 z" fill="#fff"/>
            <polygon points="225,112 235.4,144.5 269.3,144.5 242,164.5 252.3,196.9 225,176.9 197.7,196.9 208,164.5 180.7,144.5 214.6,144.5" fill="#fff"/>
        </svg>
    `,
    malaysia: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
            <rect width="900" height="600" fill="#fff"/>
            <rect width="900" height="42.9" fill="#cc0001" y="0"/>
            <rect width="900" height="42.9" fill="#cc0001" y="85.8"/>
            <rect width="900" height="42.9" fill="#cc0001" y="171.6"/>
            <rect width="900" height="42.9" fill="#cc0001" y="257.4"/>
            <rect width="900" height="42.9" fill="#cc0001" y="343.2"/>
            <rect width="900" height="42.9" fill="#cc0001" y="429"/>
            <rect width="900" height="42.9" fill="#cc0001" y="514.8"/>
            <rect width="450" height="342.9" fill="#00006a"/>
            <circle cx="204" cy="171" r="100" fill="#ffcc00"/>
            <path d="M204,110 A50,50 0 0,0 150,160 A50,50 0 0,0 258,160" fill="#ffcc00"/>
            <polygon points="204,120 215,160 260,160 225,183.5 234,225 204,200 174,225 183,183.5 148,160 193,160" fill="#ffcc00"/>
        </svg>
    `,
    india: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
            <rect width="900" height="200" fill="#FF9933"/>
            <rect width="900" height="200" fill="#ffffff" y="200"/>
            <rect width="900" height="200" fill="#138808" y="400"/>
            <circle cx="450" cy="300" r="60" fill="#000080"/>
            <circle cx="450" cy="300" r="55" fill="#ffffff"/>
            <circle cx="450" cy="300" r="20" fill="#000080"/>
            <g id="spokes">
                <line x1="450" y1="245" x2="450" y2="355" stroke="#000080" stroke-width="3.5"/>
                <line x1="395" y1="300" x2="505" y2="300" stroke="#000080" stroke-width="3.5"/>
            </g>
            <use xlink:href="#spokes" transform="rotate(15, 450, 300)"/>
            <use xlink:href="#spokes" transform="rotate(30, 450, 300)"/>
            <use xlink:href="#spokes" transform="rotate(45, 450, 300)"/>
            <use xlink:href="#spokes" transform="rotate(60, 450, 300)"/>
            <use xlink:href="#spokes" transform="rotate(75, 450, 300)"/>
        </svg>
    `,
    indonesia: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
            <rect width="900" height="300" fill="#FF0000"/>
            <rect width="900" height="300" fill="#FFF" y="300"/>
        </svg>
    `,
    thailand: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
            <rect width="900" height="600" fill="#ED1C24"/>
            <rect width="900" height="400" fill="#FFF" y="100"/>
            <rect width="900" height="200" fill="#241D4F" y="200"/>
        </svg>
    `,
    vietnam: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
            <rect width="900" height="600" fill="#DA251D"/>
            <polygon points="450,150 497.6,300.5 650,300.5 526.2,396 573.8,546.5 450,450.9 326.2,546.5 373.8,396 250,300.5 402.4,300.5" fill="#FFFF00"/>
        </svg>
    `
};
