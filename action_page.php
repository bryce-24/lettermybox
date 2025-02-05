<?php
// Comments: Start of action_page.php

// Comments: Check if the username parameter is set in the GET request
if (isset($_GET['username'])) {
    // Comments: Retrieve the username from the GET request
    $username = escapeshellarg($_GET['username']);
    $command = escapeshellcmd("python3 scrape.py $username 2>&1"); // Capture stderr
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
