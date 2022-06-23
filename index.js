let marginWidth = 0;
let count = 0;
function onMouseOver(){
    document.getElementById("more-icon_img").src = "./icon/header/exit.png";
    document.getElementById("more-icon_img").style.width = "15x";
    document.getElementById("extend_menu").style.transitionDuration = "0.5s";

    document.getElementById("extend_menu").style.visibility = "visible";
}

function onMouseOut(){
    document.getElementById("more-icon_img").src = "./icon/header/more.png";
    document.getElementById("more-icon_img").style.width = "15px";
    document.getElementById("extend_menu").style.transitionDuration = "0.5s";

    document.getElementById("extend_menu").style.visibility = "hidden";
}
function forward(){
    if(count < 3){
        if(count < 2){
            document.getElementById("slide_list").style.marginLeft = `${marginWidth-540}px`;
            document.getElementById("right").style.backgroundColor = "rgba(251,108,39, 0.9)";
            document.getElementById("slide_list").style.transitionDuration = "0.5s";

            marginWidth -= 540;
        }
        else {
            document.getElementById("slide_list").style.marginLeft = `${marginWidth-50}px`;
            document.getElementById("slide_list").disabled = true;
            document.getElementById("right").style.backgroundColor = "rgba(51,51,51, 0.9)";
        }
        count++;
    }
    document.getElementById(`b${count-1}`).style.backgroundColor = "rgba(0,0,0,0.2)";
    document.getElementById(`b${count}`).style.backgroundColor = "rgba(251,108,39,1)";
}

function backward(){
    if(count > 0){
        if(count == 1) {
            document.getElementById("slide_list").style.marginLeft = `${marginWidth + 540}px`;
            document.getElementById("left").style.backgroundColor = "rgba(51,51,51, 0.9)";
            document.getElementById("slide_list").style.transitionDuration = "0.5s";

            marginWidth += 540;
            count--;
        }
        else if (count == 2){
            document.getElementById("slide_list").style.marginLeft = `${marginWidth + 500}px`;
            document.getElementById("slide_list").style.transitionDuration = "0.5s";

            marginWidth += 500;
            count--;
        }
        else {
            document.getElementById("slide_list").style.marginLeft = `${marginWidth + 540}px`;
            document.getElementById("right").style.backgroundColor = "rgba(251,108,39, 0.9)";
            document.getElementById("slide_list").style.transitionDuration = "0.5s";

            marginWidth += 540;
            count-=2;
        }
        document.getElementById(`b${count}`).style.backgroundColor = "rgba(251,108,39,1)";
        document.getElementById(`b${count+1}`).style.backgroundColor = "rgba(0,0,0,0.2)";
        document.getElementById(`b${count+2}`).style.backgroundColor = "rgba(0,0,0,0.2)";
    }
    
    console.log(count + ' move back')
}
