<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>letter my box</title>
</head>
<body>
    <h1>LETTER MY BOX</h1>
    <h2>Enter Letterboxd username</h2>
    <form action="action_page.php" method="get">
        <input type="text" id="username" name="username"><br><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>

<?php
// Comments: Start of action_page.php

// Comments: Check if the username parameter is set in the GET request
if (isset($_GET['username'])) {
    // Comments: Retrieve the username from the GET request
    $username = escapeshellarg($_GET['username']);
    $command = "python scrape.py $username 2>&1"; // Use 'python' instead of 'python3' for Windows
    echo "<p>Executing command: $command</p>"; // Display the command for debugging
    $output = shell_exec($command);

    if ($output === null) {
        echo "<p>Error running script.</p>";
    } else {
        echo "<pre>$output</pre>"; // Display the output for debugging
        $diffAvg = trim($output);
        echo "<h2>Films for $username</h2>";
        echo "<p>Average difference between your ratings and average ratings: $diffAvg</p>";
    }
} else {
    echo "<p>No username provided.</p>";
}
?>
