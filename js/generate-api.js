// This script will take a local reference.html and generate both JSON and HTML files from it

const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

JSDOM.fromFile("../reference.html", { contentType: "text/html" }).then(dom => {
    var articles = dom.window.document.querySelectorAll('article');
    var elements = [];

    articles.forEach(function (article) {
        
        var divNodeList = article.querySelectorAll('div');
        var tempElement = {
            "name": article.id,
            // "type": "",
            "description": divNodeList[1].textContent.replace(/(\r\n|\n|\r)/gm, "").trim(),
            "code": `https://html.haus/api/elements/${article.id}.html`,
            // TBD - need to solve nested list problem and fix reference.html
            // "attributes": attributeObject,
            "url": `https://html.haus/reference.html#${article.id}`
        };

        // Generate JSON portion of API
        fs.writeFile(`../api/elements/${article.id}.json`, JSON.stringify(tempElement), function (err) {
            if (err) return console.log(err);
            console.log(`Successfully created: ${article.id}.json`);
        });

        // Generate HTML portion of API
        var codeBlock = article.querySelector('.display');
        if (codeBlock) {
            fs.writeFile(`../api/elements/${article.id}.html`, codeBlock.innerHTML.replace(/^\s+/mg, ""), function (err) {
                if (err) return console.log(err);
                console.log(`Successfully created: ${article.id}.html`);
            });
        }

        // Spit out array of all elements
        elements.push(tempElement.name);
    })

    console.log(elements.sort());
});
