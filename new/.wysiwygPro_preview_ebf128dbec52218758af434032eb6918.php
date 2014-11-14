<?php
if ($_GET['randomId'] != "JVrqwSEi6iyun9B_4hsheKaQfMnybJ7QoIHMwxIEKbPClfZUsaZOlkOko88TaKnz") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
