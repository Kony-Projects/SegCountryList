//Type your code here
var count = 0;

function play() {
    frmLogin.Segment0a8b974d5d59c46.onSwipe = playdele;
    var sectionIndex = frmLogin.Segment0a8b974d5d59c46.selectedRowIndex[0];
    var rowIndex = frmLogin.Segment0a8b974d5d59c46.selectedRowIndex[1] + 1;
    alert("rowIndex" + rowIndex);
    alert("sectionIndex" + sectionIndex);
    var data = {
        lbltxt: "text" + rowIndex
    };
    animation = kony.anim.FILL_MODE_BACKWARDS;
    frmLogin.Segment0a8b974d5d59c46.addDataAt(data, rowIndex, sectionIndex, animation);
    //Defining the context Object
    // var context1={"widget":frmHome.Button1,"anchor":"left","sizetoanchorwidth":false};       
    // //setContext method call
    // Popup0ha12702b45354e.setContext(context1);
    //   Popup0ha12702b45354e.show();
}

function playdele() {
    var sectionIndex = frmLogin.Segment0a8b974d5d59c46.selectedRowIndex[0];
    var rowIndex = frmLogin.Segment0a8b974d5d59c46.selectedRowIndex[1];
    alert("rowIndex" + rowIndex);
    alert("sectionIndex" + sectionIndex);
    var data = [{
        lbltxt: "text" + rowIndex
    }, {
        lbltxt: "text" + rowIndex
    }, {
        lbltxt: "text" + rowIndex
    }];
    animation = kony.anim.FILL_MODE_BACKWARDS;
    frmLogin.Segment0a8b974d5d59c46.addAll(data);
    //Defining the context Object
    // var context1={"widget":frmHome.Button1,"anchor":"left","sizetoanchorwidth":false};       
    // //setContext method call
    // Popup0ha12702b45354e.setContext(context1);
    //   Popup0ha12702b45354e.show();
}

function onreachSegEnd() {
    var len = frmLogin.Segment0a8b974d5d59c46.data.length;
    var data = {
        lbltxt: "text" + len
    };
    animation = kony.anim.FILL_MODE_BACKWARDS;
    frmLogin.Segment0a8b974d5d59c46.addDataAt(data, len, 0, animation);
}