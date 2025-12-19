## sb_js 2023 © Copyright Sourav Bishai

## This is a React version of sb_js javascript library

```javascript
import Sb_Js, { registerClass } from './Sb_Js';

 function Test() {
    registerClass([
        "para", "btn", "para2", "hadding"
    ])

    useEffect(() => {
        Sb_Js();
    }, [])

    return (
        <div>
            <button className='btn' bg="green" hoverbg="maroon" 
                hoverfg="white" click="myPara,{font-size:120px; color:orange}">
            click me
            </button>
            <p className='para' fg="blue" id="myPara">i'm sb_js</p>

            <h1 className="hadding" fg="red" hoverfg="green" px="20px" mt="120px"> Hello World </h1>
            <p className="para2" fg="blue" bold="true" fs="20"> Hello World </p>
      </div>
    );
 }
```
