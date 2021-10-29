<template>
  <div>
    <h1 id="fantasyfootballtwitterbot">Fantasy Football Twitter Bot</h1>
    <p>Python run twitter bot that uses Tweepy API as well as the Sleeper.app API. Sleeper.app is the app used for the fantasy football league. This bot will tweet out information relative to the league. Such as, the leagues current standings, the matchup results for the week and more. Now there is data available on the <a href="https://austinspencer.works/Fantasy-Twitter/">website</a>!</p>
    <h2 id="specificleagues">Specific Leagues</h2>
    <p>Split the seperate leagues into seperate scripts.. could combine them all into one but didn't want to at the moment since having seperate is easier.
      To combine I would need to possibly create a list with the seperate league IDs.. I also would need to switch the Redis database with each switch of the IDs. So most likely I would create a dictionary with the ID : Redis database</p>
    <h2 id="players">Players</h2>
    <p>This is a helper script that will run and pull the huge dataset of players sleeper.app has. It'll then save the ones that are actually active players in our league on Redis. There is some code in the specific leagues scripts that will work with this data to create hashes of each team name with all of their active players, deleted and re-created weekly.</p>
    <h2 id="website">Website</h2>
    <p>The website is built with HTML/CSS/JavaScript on <a href="https://github.com/austinbspencer/Fantasy-Twitter/tree/webpage">webpage</a> branch. This was a fun site to build since I know there will be people actually visiting this site weekly. I chose to display everything by league. Right now that includes the standings, point leaders, and the rosters(new). All of the data being displayed is stored on Redis database and is recieved through get requests to <a href="https://github.com/austinbspencer/go-backend">my back-end server</a>. Each time the page is loaded all of the data is pulled, I could maybe do this more efficiently, especially for the rosters. Since I am pulling the data and it isn't even visible unless it is clicked. What I could do instead is only pull the data once the league is actually clicked on.</p>
    <h2 id="redis">Redis</h2>
    <p>This program uses Redis as the database to store any data we want to keep track of. Redis works nicely with Python and is quick and easy. Using it in this script to keep track of teams' points and wins. </p>
    <h2 id="docker">Docker</h2>
    <p>Docker is used for running this program 24/7 and fully automating this bot. At the beginning of the season you can set it up and never touch the script again.</p>
    <h2 id="kubernetes">Kubernetes</h2>
    <p>Deploying Docker images to rancher with pipelining.</p>
    <h2 id="installfoundintwitterbotrepo">Install Found in twitter-bot repo</h2>
    <ul>
      <li><a href="https://github.com/austinbspencer/twitter-bot#twitter-developer-set-up">Twitter Developer</a></li>
      <li><a href="https://github.com/austinbspencer/twitter-bot#redis-setup">Redis</a></li>
      <li><a href="https://github.com/austinbspencer/twitter-bot#build--push">Docker</a></li>
      <li><a href="https://github.com/austinbspencer/twitter-bot#google-cloud-terminal-commands">Cloud Deployent</a></li>
    </ul>
    <h4 id="checkoutbotsfflhttpstwittercombotsffltwitterprofilesmiley">Checkout <a href="https://twitter.com/BOTSFFL">BOTS FFL</a> twitter profile :smiley:</h4>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>