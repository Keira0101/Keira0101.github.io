$(document).ready(function () {
    function handleImageChange(imagePath) {
        $(".custom_block_4").attr("src", imagePath);
    }

    let selectPink = false; 
    let selectPack = ""; 

    function getImagePath() {
        
        if ($('#pink_FL').is(':checked')) {
            selectPink = true;
        } else {
            selectPink = false;
        }

        if (selectPink) {
            if (selectPack === "white") {
                return "./images/FL6_PK_WT.png";
            } else {
                return "./images/FL6_PK_BG.png";
            }
        } else {
            if (selectPack === "white") {
                return "./images/FL6_BG_WT.png";
            } else {
                return "./images/FL6_BG.jpg";
            }
        }
    }

    $("#white, #beige,#white_FL, #pink_FL").click(function () {
        if ($(this).val() !== "") {
           
            selectPack = $(this).val();
        }
        let imagePath = getImagePath();
        handleImageChange(imagePath);
    });
});