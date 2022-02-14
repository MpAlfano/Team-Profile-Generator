function generateProfile(data) {


    return `
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Profile</title>
            // <link rel="stylesheet" href="styles/jass.css" />
  </head>
  <body>
    <section class="jumbotron">
      <h1>Job Postings</h1>
    </section>
    <div class="articles container p-5" id="articles">
      <div class="card card-rounded">
        <div class="card-header">Automation Engineer---</div>
        <div class="card-body">

        
        </div>
        <img class="card-image" src="images/google.png" />
        <div class="card-footer"><a href="#">Apply</a></div>
      </div>
      <div class="card card-rounded">
        <div class="card-header">Technical Writer-----</div>
        <div class="card-body">

        </div>
        <img class="card-image" src="images/bia.jpg" />
        <div class="card-footer"><a href="#">Apply</a></div>
      </div>
      <div class="card card-rounded">
        <div class="card-header">Front End Web Developer------</div>
        <div class="card-body">
        
        </div>
        <img class="card-image" src="images/at.png" />
        <div class="card-footer">
          <a
            href="https://www.atlassian.com/company/careers/detail/67badd7a-c93b-47fe-b082-fa8220ac6325"
            >Apply</a
          >
      </div>
    </div>
  </body>
</html>

  `;
  }

  module.exports = generateProfile;
  