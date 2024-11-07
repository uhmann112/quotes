async function fetchQ() {
    const quoDiv = document.getElementById("quo");
   
    try {
        const response = await fetch("https://api.api-ninjas.com/v1/quotes?category=inspirational", {
            headers: {
                'X-Api-Key': `zovS/fArMMS3BLI8EBKVzw==EGDpD12mVsz3d0B4`
            }
        });

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        
        if (response.ok) {
            const data = await response.json();
            const quote = data[0]?.quote; 
            const author = data[0]?.author;
        
            quoDiv.innerHTML = `<p>"${quote}     "</p><p>- ${author}</p>`;
            sleep(20000).then(() => {
                quoDiv.innerHTML = `made by Marcel Uhlemann`;
            });
        
        } else {
            quoDiv.innerHTML = "<p>Fehler beim Laden des Zitats. Versuche es erneut!</p>";
            sleep(20000).then(() => {
                quoDiv.innerHTML = `made by Marcel Uhlemann`;
            });
        }

    } catch (error) {
        console.error("Fehler beim Abrufen des Zitats:", error);
        quoDiv.innerHTML = "<p>Fehler beim Laden des Zitats. Versuche es erneut!</p>";
    }
}




async function likeAndSave() {
    const quoteText = document.getElementById('quo').innerText; // Get the quote text from the div

    // Send the quote to PHP via AJAX
    if (quoteText !== "made by Marcel uhlemann") { // Check if the quote is not the default text
        // AJAX request to send the liked quote to the server
        fetch('save_quote.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'quo=' + encodeURIComponent(quoteText) // Send the quote text in the request body
        })
        .then(response => response.text())
        .then(data => {
            console.log('Server Response:', data); // Log the response from PHP
            alert('Quote saved: ' + data); // Optional: Alert the user that the quote was saved
        })
        .catch(error => {
            console.error('Error saving quote:', error);
        });
    } else {
        alert("Please fetch a quote before liking it!");
    }
}




function submitQuote() {
    var quoteText = document.getElementById('quo').innerText; // Get the quote
    document.getElementById('quoteInput').value = quoteText; // Set the hidden input to the quote
}
