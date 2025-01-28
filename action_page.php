<?php
// Comments: Start of action_page.php

// Comments: Check if the username parameter is set in the GET request
if (isset($_GET['username'])) {
    // Comments: Retrieve the username from the GET request
    $username = htmlspecialchars($_GET['username']);

    // Comments: Construct the Letterboxd profile URL
    $profileUrl = "https://letterboxd.com/" . urlencode($username) . "/films/";

    // Comments: Initialize cURL session
    $ch = curl_init();

    // Comments: Configure cURL options
    curl_setopt($ch, CURLOPT_URL, $profileUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    // Comments: Execute the cURL request
    $response = curl_exec($ch);

    // Comments: Check for errors in the cURL request
    if (curl_errno($ch)) {
        echo "Error: " . curl_error($ch);
    } else {
        // Comments: Use DOMDocument and DOMXPath to parse the HTML response
        $dom = new DOMDocument();
        @$dom->loadHTML($response);
        $xpath = new DOMXPath($dom);

        // Comments: Query the page for film titles
        $filmNodes = $xpath->query("//div[contains(@class, 'film-title-wrapper')]/a");

        // Comments: Check if any films were found
        if ($filmNodes->length > 0) {
            echo "<h2>Films for $username</h2>";
            echo "<ul>";
            foreach ($filmNodes as $filmNode) {
                echo "<li>" . htmlspecialchars($filmNode->nodeValue) . "</li>";
            }
            echo "</ul>";
        } else {
            echo "<p>No films found for user: $username</p>";
        }
    }

    // Comments: Close the cURL session
    curl_close($ch);
} else {
    echo "<p>No username provided.</p>";
}
?>
