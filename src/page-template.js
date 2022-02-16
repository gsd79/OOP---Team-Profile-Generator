function generateSite(data) {
   
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our Team</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="top-bar">Meet Our Team</div>
    </header>
    <main>
        <div class="card-container">
         CARDS HERE
        </div>
    </main>
</body>
</html>
`;
};

module.exports = generateSite;