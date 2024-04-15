<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <title>Movies</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <style>
        /* Hide the image title by default */
        .image-title {
            display: none;
        }
    </style>
</head>

<body>
    <!-- Background Video -->
    <video id="bg-video" autoplay loop muted>
        <source src="48569-454825064_small.mp4" type="video/mp4">
        <!-- Add additional source elements for other video formats -->
        Your browser does not support the video tag.
    </video>

    <header>
        <a href="#top">
            <img alt="Screenshot 2024-04-12 160015.png" height="90" src="Screenshot 2024-04-12 160015.png" width="100"></a>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="movies.html">Movies</a></li>
                <li><a href="TV Shows.html">TV Shows</a></li>
                <li><a href="games and apps.html">Games & Apps</a></li>
                <li><a href="collections.html">Collections</a></li>
                <li><a href="feedback.html">Feedback</a></li>
            </ul>
        </nav>
    </header>

    <div class="image-grid">
        <div class="image-item">
            <!-- Add link to trigger the JavaScript function -->
            <a href="#" onclick="toggleInfo('king-kong-info')">
                <img alt="KingKong" height="234" src="king%20kong.jpeg" width="149">
            </a>
            <!-- Add information div -->
            <div class="image-title" id="king-kong-info">King-Kong vs Godzilla</div>
        </div>
        <!-- Add other image items here -->
    </div>

    <script>
        // Function to toggle the visibility of the image title
        function toggleInfo(id) {
            var info = document.getElementById(id);
            if (info.style.display === "none") {
                info.style.display = "block";
            } else {
                info.style.display = "none";
            }
        }
    </script>
</body>

</html>
