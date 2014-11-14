<?php
if ($_GET['randomId'] != "ZcIJZcajHCbYc_Eeg0i9QifAVnXvI5wbT7tM0s3g44Y827lBrok6elI224ounKCQ") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
