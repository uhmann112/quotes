<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">

    <title>Document</title>
</head>
<body>

<?php
if (isset($_POST['quote'])) { // Ensure you're looking for 'quo' in the POST data
    $quote = $_POST['quote']; // Store the quote in a PHP variable
    
} else {
    echo "No quote received."; // Display if no quote is received
}
?>

<div id="title">
    <h1>Your liked posts</h1>
</div>

<div id="text">
    <h2>Here you can find your favorite quotes. <br>
    If you want to go back, click <a id="link" href="http://localhost/Quotes/index.php">HERE</a></h2>
</div>   

<div id="quoLike">
    <?php
    if (isset($quote)) {
        echo  htmlspecialchars($quote); // Display the received quote
    }
    ?>
</div>

<form action="index.php" method="POST">
    <input type="hidden" name="quo" id="quoteInput">
    <button type="submit" id="buttLike">Like</button>
</form>

<form action="index.php">
    <button id="buttBack">Back to generator</button>
</form>

</body>
</html>
