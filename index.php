<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Quotes 4U</title>
</head>



<body>
    <div id="title">
        <h1>Quote generator</h1>
    </div>

    <div id="text">
        <h2>diese seite wird dir ein random zitat geben. <br>
        ich nutze die ninja API <br>
        schaue doch sonst auch mal bei <a id="link" href="http://localhost/steckbrief/index.html">STECKBRIEF</a> vorbei <br>
        viel spass!!!</h2>
    </div>   

    <div id="quo">
        made by Marcel uhlemann
    </div>

    <section id="buttonContainer">
        <button id="butt" onclick="fetchQ()">Show me a quote!</button>

    <form action="Liked.php" method="POST">
    <input type="hidden" name="quote" id="quoteInput">
    <button id="buttLike" type="submit" onclick="submitQuote()">like Quote</button>
</form>
           
        
    </section>

    <script src="script.js"></script>

</body>
</html>
