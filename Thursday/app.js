let newsListUL = document.getElementById('newsList');
let selectMenu = document.getElementById('selectMenu');
let checkBox = document.getElementById('checkBox');
var newsListName = selectMenu.innerHTML;

function getArrayNewsList(list){
    let newsListLI = [];

    list.forEach(element => {    
        newsListLI.push('<li>')
        if(element.title != null ){
            newsListLI.push(`<h1>${element.title}</h1>`)
        }
        if(element.author != null ){
            newsListLI.push(`<h2>${element.author}</h2>`)
        }
        if(element.description != null ){
            newsListLI.push(`<p>${element.description}</p>`)
        }
        if(element.url != null ){
            newsListLI.push(`<a href = "${element.url}" target = "_blank">${element.url}</a>`)
        }
        if(element.urlToImage != null ){
            newsListLI.push(`<div class = "image"><img src = "${element.urlToImage}"></div>`)
        }
        else{newsListLI.push('<div></div>')}
        if(element.publishedAt != null ){
            newsListLI.push(`<span>${element.publishedAt}<span>`)
        }
        newsListLI.push('</li>');
    });
    if(newsListLI.length == 0){newsListLI.push(`<h1>No news articles for this source...try again</h1>`)}

    return newsListLI;
}

function getNewsList(){
    let newsValueList = news["articles"]
    if(selectMenu.value != 'All'){
        let filteredNewsValueList = newsValueList.filter(x => 
            x.source.id == selectMenu.value)
        let newsListLiResult = getArrayNewsList(filteredNewsValueList);
        newsListUL.innerHTML = newsListLiResult.join("");
    }
    else{
    let newsListLiResult = getArrayNewsList(newsValueList);
    newsListUL.innerHTML = newsListLiResult.join("");
    }
}

function getArraySourcesList(list){
    let sourcesListLI = [];
    sourcesListLI.push(`<option value = "All" selected = "selected">All Sources</option>`)
    list.forEach(element => {    
        sourcesListLI.push(`<option value = "${element.id}">${element.name}</option>`)
    });

    return sourcesListLI
}

function getSourcesList(){
    let sourcesValueList = source["sources"]
    if(checkBox.checked == true){    
        let sourcesListLiResult = getArraySourcesList(filterSourcesList(sourcesValueList));
        selectMenu.innerHTML = sourcesListLiResult.join("");
}
    else{
        let sourcesListLiResult = getArraySourcesList((sourcesValueList));
        selectMenu.innerHTML = sourcesListLiResult.join("");
    }
 
}

function filterSourcesList(inputList){
    let newsValueList = news["articles"]
    let newsIDList = newsValueList.map(x => {
        return x.source.id
    })
    let filteredList = inputList.filter(x => newsIDList.includes(x.id));
    return filteredList;
}

selectMenu.addEventListener('change', getNewsList);

checkBox.addEventListener('change', getSourcesList);

