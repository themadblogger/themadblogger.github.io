
var documents = [{
    "id": 0,
    "url": "/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "/about",
    "title": "About TheMadBlogger.com",
    "body": "You’ve likely upset me "
    }, {
    "id": 2,
    "url": "/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "/",
    "title": "Home",
    "body": "      Featured:               All Stories:             "
    }, {
    "id": 4,
    "url": "/About",
    "title": "",
    "body": ""
    }, {
    "id": 5,
    "url": "/Videos/Video-Player",
    "title": "",
    "body": ""
    }, {
    "id": 6,
    "url": "/Home/catpageid/2",
    "title": "",
    "body": ""
    }, {
    "id": 7,
    "url": "/Home/catpageid/3",
    "title": "",
    "body": ""
    }, {
    "id": 8,
    "url": "/Home/catpageid/4",
    "title": "",
    "body": ""
    }, {
    "id": 9,
    "url": "/Home/catpageid/5",
    "title": "",
    "body": ""
    }, {
    "id": 10,
    "url": "/Home/catpageid/6",
    "title": "",
    "body": ""
    }, {
    "id": 11,
    "url": "/Home/catpageid/7",
    "title": "",
    "body": ""
    }, {
    "id": 12,
    "url": "/Home/catpageid/8",
    "title": "",
    "body": ""
    }, {
    "id": 13,
    "url": "/Home/catpageid/9",
    "title": "",
    "body": ""
    }, {
    "id": 14,
    "url": "/redirects.json",
    "title": "",
    "body": "{“/About”:”/about”,”/Videos/Video-Player”:”/”,”/Home/catpageid/2”:”/”,”/Home/catpageid/3”:”/”,”/Home/catpageid/4”:”/”,”/Home/catpageid/5”:”/”,”/Home/catpageid/6”:”/”,”/Home/catpageid/7”:”/”,”/Home/catpageid/8”:”/”,”/Home/catpageid/9”:”/”} "
    }, {
    "id": 15,
    "url": "/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, ];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});