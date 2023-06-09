/*================================================================================
---------------------- sb_js 2023 © Copyright Sourav Bishai ----------------------
**********************************************************************************
----------------This is a React version of sb_js javascript library---------------
e.g:
import Sb_Js, { registerClass } from './Sb_Js';

function Test() {
    registerClass([
        "para", "btn", "para2", "hadding"
    ])

    ``useEffect ar modhey deyar karon``: 
    ** page render ba html/jsx element gulo load hoye jabar por ei function ta call hobe **
    useEffect(() => {
        Sb_Js();
    }, [])

    return (
        <div>
            <button className='btn' bg="green" hoverbg="maroon" 
                hoverfg="white" click="myPara,{font-size:120px; color:orange}">
            click me
            </button>
            <p className='para' fg="blue">i'm sb_js</p>

            <h1 className="hadding" fg="red" hoverfg="green" px="20px" mt="120px"> Hello World </h1>
            <p className="para2" fg="blue" bold="true" fs="20"> Hello World </p>
        </div>
    );
}

Warning: ********************* Don't edit this file ******************************
==================================================================================
*/

let AllClass = [];

function registerClass(classArray) {
    for (let classAr of classArray) {
        AllClass.push(classAr);
    }
}

function Sb_Js() {
    AllClass.forEach(currentClass => {        
        let currentClassNode = document.querySelectorAll(`.${currentClass}`)

        currentClassNode.forEach(currentElement => {            
            function getAtt(att) {
                if (currentElement) {// jodi ei element ta theke taile return hove;
                    return currentElement.getAttribute(att);
                }
            }

            // 000------------------------------ ALL ATTRIBUTES LISTED HERE ----------------000

            // -------- Common style --------
            const fg = getAtt("fg");//<-- color name
            const bg = getAtt("bg");//<-- color name
            const width = getAtt("width");//<-- Number value
            const height = getAtt("height");//<-- Number value
            const centerchild = getAtt("centerchild");// <-- true | false

            // ---- start for padding ----
            const px = getAtt("px");
            const py = getAtt("py");
            const pt = getAtt("pt");
            const pb = getAtt("pb");
            const pr = getAtt("pr");
            const pl = getAtt("pl");
            const pall = getAtt("pall");

            // ---- start for margin ----
            const mx = getAtt("mx");
            const my = getAtt("my");
            const mt = getAtt("mt");
            const mb = getAtt("mb");
            const mr = getAtt("mr");
            const ml = getAtt("ml");
            const mall = getAtt("mall");

            // animation effect and events ---------
            const hoverfg = getAtt("hoverfg"); //<-- color name
            const hoverbg = getAtt("hoverbg");//<-- color name
            const hide = getAtt("hide"); //<-- true | false
            const hoverunderline = getAtt("hoverunderline");// <-- true | false
            const click = getAtt("click");// <-- "taregetId,{cssCode}"
            const dblclick = getAtt("dblclick");// <-- "taregetId,{cssCode}"
            const clicktohide = getAtt("clicktohide")// <-- targetId
            const clicktoshow = getAtt("clicktoshow");//<-- targetId
            const clicktotoggle = getAtt("clicktotoggle");//<-- targtId

            // ------ font style  ---------
            const fs = getAtt("fs");// <-- Number with pixel value
            const fm = getAtt("fm");// <-- font style name
            const bold = getAtt("bold");// <-- true | false
            const italic = getAtt("italic");// <-- true | false
            const underline = getAtt("underline");// <-- true | false

            // ------- shadow effect  ----------
            const tshadow = getAtt("tshadow");//<-- css text shadow syntax
            const bshadow = getAtt("bshadow");//<-- css box shadow syntax

            // ----- border effect  -----------
            const bdtop = getAtt("bdtop");
            const bdbottom = getAtt("bdbottom");
            const bdright = getAtt("bdright");
            const bdleft = getAtt("bdleft");
            const bdall = getAtt("bdall");// for all side border
            const br = getAtt("br");//for border radius;

            const to = getAtt("to");//create link;

            // ----- text effect --------
            const talign = getAtt("talign");
            const letterspace = getAtt("letterspace"); // <-- Number value
            const wordspace = getAtt("wordspace"); //<-- Number value
            const blur = getAtt("blur"); // <-- Number value


            if (fg != null) {
                currentElement.style.color = fg;
            }
            if (bg != null) {
                currentElement.style.backgroundColor = bg;
            }
            if (centerchild != null) {
                if (centerchild === "true") {
                    currentElement.style.display = "grid";
                    currentElement.style.placeItems = "center"
                }
            }
            // text effect logic ---------------------------
            if (talign != null) {
                currentElement.style.textAlign = talign;
            }
            if (letterspace != null) {
                currentElement.style.letterSpacing = letterspace;
            }
            if (wordspace != null) {
                currentElement.style.wordSpacing = wordspace;
            }
            if (blur != null) {
                currentElement.style.WebkitFilter = `blur(${blur})`;
            }
            // padding logic start ----------------------------
            if (px != null) {
                currentElement.style.paddingRight = px;
                currentElement.style.paddingLeft = px;

            } if (py != null) {
                currentElement.style.paddingTop = py;
                currentElement.style.paddingBottom = py;

            } if (pt != null) {
                currentElement.style.paddingTop = pt;

            } if (pb != null) {
                currentElement.style.paddingBottom = pb;

            } if (pr != null) {
                currentElement.style.paddingRight = pr;

            } if (pl != null) {
                currentElement.style.paddingLeft = pl;

            } if (pall != null) {
                currentElement.style.padding = pall;
            }


            // margin logic start -----
            if (mx != null) {
                currentElement.style.marginRight = mx;
                currentElement.style.marginLeft = mx;

            } if (my != null) {
                currentElement.style.marginTop = my;
                currentElement.style.marginBottom = my;

            } if (mt != null) {
                currentElement.style.marginTop = mt;

            } if (mb != null) {
                currentElement.style.marginBottom = mb;

            } if (mr != null) {
                currentElement.style.pmarginRight = mr;

            } if (ml != null) {
                currentElement.style.marginLeft = ml;
            }
            if (mall != null) {
                currentElement.style.margin = mall;
            }

            // animation logic start -----------------------------------
            if (hoverfg != null) {
                const currentClassNode = currentElement;
                // get previus color jodi color ache tahole color return hobe naile 
                //(jodi black color theke) blank return korbe 
                const getColor = currentElement.style.color;

                currentElement.addEventListener("mouseenter", () => {
                    currentClassNode.style.color = hoverfg;
                })
                currentElement.addEventListener("mouseout", () => {
                    if (getColor === "") {
                        currentClassNode.style.color = "black";
                    } else {
                        currentClassNode.style.color = getColor;
                    }
                })
            }
            if (hoverbg != null) {
                const currentClassNode = currentElement;
                // get previus color jodi color ache tahole color return hobe naile 
                //(jodi white color theke) blank return korbe 
                const getBGColor = currentElement.style.backgroundColor;

                currentElement.addEventListener("mouseenter", () => {
                    currentClassNode.style.backgroundColor = hoverbg;
                })
                currentElement.addEventListener("mouseout", () => {
                    if (getBGColor === "") {
                        currentClassNode.style.background = "none";
                    } else {
                        currentClassNode.style.backgroundColor = getBGColor;
                    }
                })
            }
            if (hide != null) {
                const getHideValue = hide;
                if (getHideValue === "true") {
                    currentElement.style.display = "none"
                }
            }
            if (hoverunderline != null) {
                const getHoverunderlineValue = hoverunderline;
                const currentClassNode = currentElement;

                if (getHoverunderlineValue === "true") {
                    currentElement.addEventListener("mouseenter", () => {
                        currentClassNode.style.textDecoration = "underline"
                    })
                    currentElement.addEventListener("mouseout", () => {
                        currentClassNode.style.textDecoration = "None"
                    })
                }
            }

            /*
                000---- SYNTAX-----000
                ****<span className="classname" click="targetId, {CSS}">*****
                <span className="paragraph" click="sideNav, {width:200px}">
            */
            if (click != null) {
                const clickData = click.trim();
                const IdAndCss = clickData.split(",");
                const id = document.querySelector(`#${IdAndCss[0]}`);

                currentElement.addEventListener("click", () => {
                    try {
                        let presentCssCode = id.getAttribute("style");
                        const cssCode = IdAndCss[1];
                        let removebraces = cssCode.split("{");
                        removebraces = removebraces[1].split("}");
                        const css = removebraces[0]

                        id.setAttribute("style", `${presentCssCode} ${css};`);
                    } catch {
                        console.warn("** something went wrong **");
                        console.warn("** sb_js click attribute not work **");
                    }
                })

            }

            if (dblclick != null) {
                const clickData = dblclick.trim();
                const IdAndCss = clickData.split(",");
                const id = document.querySelector(`#${IdAndCss[0]}`);

                currentElement.addEventListener("dblclick", () => {
                    try {
                        let presentCssCode = id.getAttribute("style");
                        const cssCode = IdAndCss[1];
                        let removebraces = cssCode.split("{");
                        removebraces = removebraces[1].split("}");
                        const css = removebraces[0]

                        id.setAttribute("style", `${presentCssCode} ${css};`);
                    } catch {
                        console.warn("** something went wrong **");
                        console.warn("** sb_js dblclick attribute not work **");
                    }
                })

            }

            if (clicktohide != null) {
                const targetId = clicktohide;
                console.log(targetId);
                currentElement.addEventListener("click", () => {
                    try {
                        document.querySelector(`#${targetId}`).style.display = 'none';
                    } catch (e) {
                        console.warn("!!clicktohide error!! check your code")
                    }
                })
            }
            /*
            000---- SYNTAX-----000
            `**Default**` <span class="sb_js" clicktoshow="targetId">
                e.g <span class="sb_js" clicktoshow="sideNav"> default is `block`
            
            `**User define display property**` <span class="sb_js" clicktoshow="targetId,cssDisplayProperty">
                e.g <span class="sb_js" clicktoshow="sideNav,flex">  use `flex` | `grid` | `block` etc..
            */
            if (clicktoshow != null) {
                const targetId = clicktoshow;
                let coma = false;
                let checkComa = targetId.search(",");

                if (checkComa > 1) {
                    coma = true;
                }

                currentElement.addEventListener("click", () => {
                    if (!coma) {
                        try {
                            document.querySelector(`#${targetId}`).style.display = 'block';
                        } catch (e) {
                            console.warn("!!clicktoshow error!! check your code");
                        }
                    } else {
                        const splitTargetId = targetId.split(",");
                        const id = splitTargetId[0];
                        const cssDisplay = splitTargetId[1];

                        try {
                            document.querySelector(`#${id}`).style.display = cssDisplay;
                        } catch (e) {
                            console.warn("!!clicktoshow error!! check your code");
                        }
                    }

                })
            }

            if (clicktotoggle != null) {
                let show = true;
                const targetId = clicktotoggle;
                const getTargetDisplayValue = document.querySelector(`#${targetId}`).style.display;

                currentElement.addEventListener("click", () => {
                    try {
                        if (show === true) {
                            document.querySelector(`#${targetId}`).style.display = "none";
                            show = false;
                        } else {
                            if (getTargetDisplayValue === "") {
                                document.querySelector(`#${targetId}`).style.display = "";
                                show = true;
                            } else {
                                document.querySelector(`#${targetId}`).style.display = getTargetDisplayValue;
                                show = true;
                            }
                        }
                    } catch (e) {
                        console.warn("!!clicktotoggle error!! check your code")
                    }
                })
            }

            // font style logic start ----------------------
            if (fs != null) {
                currentElement.style.fontSize = fs;
            }
            if (fm != null) {
                currentElement.style.fontFamily = fm;
            }
            if (bold != null) {
                const getBoldValue = bold;
                if (getBoldValue === "true") {
                    currentElement.style.fontWeight = "bold"
                }
            }
            if (italic != null) {
                const getItalicValue = italic;
                if (getItalicValue === "true") {
                    currentElement.style.fontStyle = "italic"
                }
            }
            if (underline != null) {
                const getUnderlineValue = underline;
                if (getUnderlineValue === "true") {
                    currentElement.style.textDecoration = "underline";
                } if (getUnderlineValue === "false") {
                    currentElement.style.textDecoration = "none"
                }
            }
            // shadow effect logic start-------------------
            if (tshadow != null) {
                currentElement.style.textShadow = tshadow;
            }
            if (bshadow != null) {
                currentElement.style.boxShadow = bshadow;
            }
            // border logic start-------------------
            if (bdtop != null) {
                currentElement.style.borderTop = bdtop;
            }
            if (bdbottom != null) {
                currentElement.style.borderBottom = bdbottom;
            }
            if (bdright != null) {
                currentElement.style.borderRight = bdright;
            }
            if (bdleft != null) {
                currentElement.style.borderLeft = bdleft;
            }
            if (bdall != null) {
                currentElement.style.border = bdall;
            }
            if (br != null) {
                currentElement.style.borderRadius = br
            }
            // for link create logic -------------------------
            if (to != null) {
                const getToValue = to;
                currentElement.style.cursor = "pointer";

                currentElement.addEventListener("click", () => {
                    window.location = getToValue;
                })
            }
            // width and height logic ------------------------
            if (width != null) {
                currentElement.style.width = width;
            }
            if (height != null) {
                currentElement.style.height = height;
            }
        })


    })
}

export default Sb_Js;
export { registerClass }

