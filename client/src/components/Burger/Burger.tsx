import './Burger.sass';

const burgerLines = {
    top: {
        start: {
            x:1,
            y:1
        },
        end: {
            x:39,
            y:1
        }
    },
    medium: {
        start: {
            x:1,
            y:20
        },
        end: {
            x:39,
            y:20
        }
    },
    bottom: {
        start: {
            x:1,
            y:39
        },
        end: {
            x:39,
            y:39
        }
    },
}
// const burgerLines = {
//     top: {
//         start: {
//             x:5,
//             y:5
//         },
//         end: {
//             x:35,
//             y:35
//         }
//     },
//     medium: {
//         start: {
//             x:0,
//             y:0
//         },
//         end: {
//             x:0,
//             y:0
//         }
//     },
//     bottom: {
//         start: {
//             x:5,
//             y:35
//         },
//         end: {
//             x:35,
//             y:5
//         }
//     },
// }

const Burger = () => {
    return (
        <svg className='burger'>
            <line 
                className="burger__line" 
                x1={burgerLines.top.start.x}
                y1={burgerLines.top.start.y}
                x2={burgerLines.top.end.x}
                y2={burgerLines.top.end.y}
            ></line>
            <line 
                className="burger__line" 
                x1={burgerLines.medium.start.x}
                y1={burgerLines.medium.start.y}
                x2={burgerLines.medium.end.x}
                y2={burgerLines.medium.end.y}
            ></line>
            <line 
                className="burger__line" 
                x1={burgerLines.bottom.start.x}
                y1={burgerLines.bottom.start.y}
                x2={burgerLines.bottom.end.x}
                y2={burgerLines.bottom.end.y}
            ></line>
        </svg>
    );
};

export default Burger;