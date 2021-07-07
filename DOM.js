function singletrackcollections() {
    var singleTrack = document.getElementsByTagName('ol');
    for (var i = 0; i < singleTrack.length; i++) {
        singleTrack[i].style.color = "red";
    }


}

function singletracksizecollections() {
    var singleTrack2 = document.getElementsByClassName('content');
    for (var i = 0; i < singleTrack2.length; i++) {
        singleTrack2[i].style.fontSize = "18px";
    }


}

function singletrackfontcollections() {
    var singleTrack3 = document.getElementsByTagName('ol');
    for (var i = 0; i < singleTrack3.length; i++) {
        singleTrack3[i].style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
    }


}

var closebtns = document.getElementsByClassName("closed");
for (var i = 0; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", function () {
        this.parentElement.style.display = 'none';
    });
}