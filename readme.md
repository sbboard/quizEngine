# Instructions:

Put the following code wherever you want the quiz to appear:

```html
<div id="quizParent" class="startUp">
  <link rel="stylesheet" href="./quizAssets/quizStyle.css" />
  <div id="quiz">
    <h1>What does your health journey look like?</h1>
    <p class="introCopy">
      Take this <strong>3 minute quiz</strong> to understand how Integrative
      Wellness Group can be part of your healing journey. Whether you suffer
      from chronic pain, are looking to improve your performance, or are
      somewhere in between, we see you. At IWG, our mission is to uncover the
      root cause; we don’t guess, we test. And that gets us results to transform
      your life.
    </p>
    <button onclick="startQuiz()">Get Started</button>
    <noscript
      >NOTE: This assessment will only work with Javascript enabled.
    </noscript>
  </div>
  <progress id="quizProg"></progress>
  <script src="./quizAssets/quiz.js"></script>
</div>
<div
  style="display: none"
  id="hubspot-cal"
  class="meetings-iframe-container"
  data-src="https://meetings.hubspot.com/marketing-iwg?embed=true"
></div>
<script
  type="text/javascript"
  src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
></script>
```

Put the **/quizAssets/** folder in the **root** directory of your website.

- If you put it in a subdirectory, make sure you change the CSS for the **#quizParent** element and **folderName** variable in quiz.js to match the new path.
- Make sure the variable **rooturl** in quiz.js matches the root url of your website, with no slash at the end.
