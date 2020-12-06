let json;

const getDetails = (e) => {
    let tagname = e.tagName.toLowerCase();
    let attributes;
    
    let nodeAtt = e.attributes;

    let noA = nodeAtt.length;

    if (noA) {
        attributes = {};

        for (let j = 0; j < noA; j++) {
            attributes[nodeAtt[j].name] = nodeAtt[j].value;
        }
    } else {
        attributes = null;
    }

    // console.log(tagname);
    // console.log(attributes);

    return {
        tagname: tagname,
        attributes: attributes
    }
}

const getContents = (e) => {

    let  contents;
    
    let noE = e.childElementCount;

    if (noE) {
        contents = "[";

        for (let i = 0; i < noE; i++) {
            contents += getContent(e.children[i]);
        }

        contents += "]"
    }
    else {
        contents = '"' + e.innerHTML + '"';
    }

    return contents;
}

const getContent = (e) => {
    let details = getDetails(e);

    name = details.tagName;
    att = JSON.stringify(details.attributes);

    // console.log(tagname);
    // console.log(attributes);

    return `${details.tagname}(${att}, ` + getContents(e) + `),`;

    // return {
    //     tagname: details.tagname,
    //     attributes: details.attributes,
    //     content: getContents(e)
    // }
}

const isHTMLContent = (e) => {
    return (e.children.length) ? true : false;
}

const parseContent = (content) => {

}

const parseJSON = (json) => {
    let code = "";

    json.forEach(content => {
        name = content.tagname;
        attributes = JSON.stringify(content.attributes);
        content = (typeof content.content == "string") ? content.content : parseJSON(content.content);

        code += `${content.tagname}(${attributes}, [
            content
        ])`
    });

    return code;
}



let html = `<main id="main" class="victor">
<div></div>
Hello World
</main>
<aside class="aside">Hello world!!!</aside>`;

let testJson = [
    {
        "tagname": "main",
        "attributes": {
            "id": "main",
            "class": "victor"
        },
        "content": [
            {
                "tagname": "div",
                "attributes": {},
                "content": ""
            }
        ]
    },
    {
        "tagname": "aside",
        "attributes": {
            "class": "aside"
        },
        "content": "Hello world!!!"
    }
];

const vd = document.createElement('body');
vd.innerHTML = html;

let code = getContents(vd);

const input = document.querySelector("#input");
const output = document.querySelector("#output");
const convertBtn = document.querySelector("#convert");
const copyBtn = document.querySelector("#copy");
const copyable = document.querySelector("#copyable");


const convert = () => {
    
    copyBtn.disabled = false;

    const vd = document.createElement('body');
    vd.innerHTML = input.value;

    out = getContents(vd);
    
    output.textContent = out;
    copyable.textContent = out;
}

const copyText = () => {
    copyable.select();
    copyable.setSelectionRange(0, 99999);

    document.execCommand("copy");
}

convertBtn.onclick = convert;
copyBtn.onclick = copyText;