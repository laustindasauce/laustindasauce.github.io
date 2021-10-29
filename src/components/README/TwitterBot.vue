<template>
  <div>
    <h1 id="twitterbothitshttpshitsseeyoufarmcomapicountincrbadgesvgurlhttps3a2f2fgithubcom2fabspen12ftwitterbotcount_bg2300aceetitle_bg23555555icontwittersvgicon_color2300aceetitlehitsedge_flatfalsehttpshitsseeyoufarmcom">Twitter Bot <a href="https://hits.seeyoufarm.com"><img
          src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fabspen1%2Ftwitter-bot&count_bg=%2300ACEE&title_bg=%23555555&icon=twitter.svg&icon_color=%2300ACEE&title=hits&edge_flat=false"
          alt="Hits"
        /></a></h1>
    <p>Learning python using tweepy and twitter API to automate twitter functions. Some functions used in this are automatically tweeting, replying to mentions, following users back and more. Most of the examples I've seen online were reading and writing from files, however, in my opinion Redis database is as easy, if not easier, to use. Redis also lowers CPU storage space, especially while doing the sentiment analysis which can download thousands of tweets. For more reliable 24/7 running, I built this script into a Docker container. </p>
    <h2 id="checkoutthewebpagehttpsaustinspencerworkstwitterbotforsomestatisticsofmyaccount">Checkout the <a href="https://austinspencer.works/twitter-bot/">webpage</a> for some statistics of my account!</h2>
    <h1 id="prerequisites">Prerequisites</h1>
    <h2 id="twitterdevelopersetup">Twitter Developer Setup</h2>
    <ul>
      <li>Create your developer account <a href="https://developer.twitter.com/en/apply-for-access">here</a> </li>
      <li><a href="https://developer.twitter.com/en/docs/twitter-api/getting-started/guide">guide</a></li>
      <li>Start a new application and fill out your information</li>
      <li>Save your needed keys</li>
      <li>Consumer ID (API KEY V2)</li>
      <li>Consumer Secret Key (API SECRET V2)</li>
      <li>Key ID (ACCESS TOKEN V2)</li>
      <li>Secret Key ID (SECRET V2)</li>
    </ul>
    <h2 id="idetexteditor">IDE/Text Editor</h2>
    <p>I use Visual Studio Code and prefer that over the other editors I have used. But I will also link some other popular ones if you want to check them out.</p>
    <ul>
      <li><a href="https://code.visualstudio.com/">VSCode</a></li>
      <li><a href="https://www.sublimetext.com/3">Sublime</a></li>
      <li><a href="https://www.jetbrains.com/pycharm/download/">PyCharm</a></li>
    </ul>
    <h2 id="pythondownload">Python Download</h2>
    <p>Make sure to download a version of Python that is at least 3.</p>
    <ul>
      <li>Download python (3.x) from <a href="https://www.python.org/downloads/">here</a></li>
    </ul>
    <h2 id="customizeyourbot">Customize Your Bot</h2>
    <p>Below are some instruction you can copy and paste in your terminal to get started with creating your personal bot. First open terminal and then cd into wherever you want to store your code. In this example I will cd into Documents and assume you are using VSCode.</p>
    <pre><code class="bash language-bash">cd Documents/
git clone https://github.com/austinbspencer/twitter-bot.git
cd twitter-bot/
# code . is a shortcut with Visual Studio Code
code .
</code></pre>
    <p>Now that you have the code on your local machine you can edit bot.py to make it your own.
      Also, if you need inspiration or a live example run the command below in your terminal.</p>
    <pre><code class="bash language-bash"># cd into twitter-bot folder first
git checkout coding-specific
</code></pre>
    <p>Now you will be able to see the exact script that my twitter bot is running within bot.py.</p>
    <ul>
      <li>After you've personalized the script, you are ready to get it running</li>
    </ul>
    <h2 id="choosewheretorunyourscript">Choose where to run your script</h2>
    <p>You can run your bot <a href="https://github.com/austinbspencer/twitter-bot/blob/master/README-local.md">locally</a>, on a <a href="https://github.com/austinbspencer/twitter-bot/blob/master/README-cloud.md">Google Cloud VM instance</a>, or on an <a href="https://github.com/austinbspencer/twitter-bot/blob/master/README-aws.md">AWS ec2 VM</a>. I prefer in the cloud so that I don't have to worry about my computer being on all the time to keep the script running. For the cloud I have instructions for using a Google Cloud Instance below. When you open a new account on the Google Cloud console you will recieve $300 credit for you to spend however you'd like. This will last a long time if the only thing you are doing on the cloud is running the twitter bot.</p>
    <h2 id="contributionsarewelcomed">Contributions are welcomed! 💚</h2>
    <ul>
      <li>
        <p><strong>If you have any ideas, talk to me here: <a href="https://austinspencer.works/about/contact/"><img
                src="https://i.imgur.com/2SqWbO1.png"
                alt="Issues"
                title="mail icon without padding"
              /></a></strong></p>
      </li>
      <li>
        <p><strong>Or submit an issue <a href="https://github.com/austinbspencer/twitter-bot/issues">here</a></strong></p>
      </li>
      <li>
        <p><strong>Check out my personal bot account here: <a href="https://twitter.com/interntendie"><img
                src="http://i.imgur.com/wWzX9uB.png"
                alt="Twitter"
                title="twitter icon without padding"
              /></a></strong></p>
      </li>
    </ul>
    <!-- link to issues page -->
    <!-- link to messaging webapp page -->
    <!-- links to your social media accounts -->
    <!-- icons without padding -->
  </div>
</template>

<script>
export default {
  name: "twitter-bot",
};
</script>

<style scoped>
</style>