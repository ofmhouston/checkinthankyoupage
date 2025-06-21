<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Check-In – Omega Fire Houston</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #000;
      color: #fff;
      font-family: 'Segoe UI', sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      text-align: center;
    }
    .card {
      padding: 30px;
      max-width: 400px;
    }
    .logo {
      font-size: 1.8rem;
      font-weight: bold;
      margin-bottom: 20px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .status {
      font-size: 1.5rem;
      margin-top: 20px;
    }
    .time {
      margin-top: 10px;
      font-size: 0.9rem;
      color: #aaa;
    }
  </style>
</head>
<body>
  <div class="card" id="output">
    <div class="logo">Omega Fire Houston</div>
    <div class="status">⏳ Checking in...</div>
  </div>

  <script>
    const id = new URLSearchParams(window.location.search).get('id');
    const output = document.getElementById('output');

    if (!id) {
      output.innerHTML += `<div class="status">❌ No ID provided in the link.</div>`;
    } else {
      fetch(`https://script.google.com/macros/s/AKfycbyLd4xxraiyG6uO5Kb4l6QTCy_KW7XLtHUWFzwfGgeI92G3wWKDnlVWXyNx_cPcxEg/exec?id=${id}`)
        .then(res => res.json())
        .then(data => {
          if (data.firstName) {
            output.innerHTML = `
              <div class="logo">Omega Fire Houston</div>
              <div class="status">✅ Thank you, ${data.firstName}!</div>
              <div class="time">Checked in at ${data.lastCheckIn}</div>
            `;
          } else {
            output.innerHTML = `
              <div class="logo">Omega Fire Houston</div>
              <div class="status">❌ ID not found</div>
            `;
          }
        })
        .catch(err => {
          output.innerHTML = `
            <div class="logo">Omega Fire Houston</div>
            <div class="status">❌ Error checking in</div>
          `;
        });
    }
  </script>
</body>
</html>
