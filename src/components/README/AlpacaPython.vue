<template>
  <div>
    <h1 id="tradingalgorithmshitshttpshitsseeyoufarmcomapicountincrbadgesvgurlhttps3a2f2fgithubcom2fabspen12falpacapythoncount_bg23808080title_bg23306998iconpythonsvgicon_color23ffd43btitlehitsedge_flatfalsehttpshitsseeyoufarmcom">Trading-Algorithms <a href="https://hits.seeyoufarm.com"><img
          src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fabspen1%2Falpaca-python&count_bg=%23808080&title_bg=%23306998&icon=python.svg&icon_color=%23FFD43B&title=hits&edge_flat=false"
          alt="Hits"
        /></a></h1>
    <p>This is a bunch of code that is me trying to learn the ins and outs of coding in Python. Specifically with API, CSV/TXT files, Redis Database and Pylivetrader. There is a little bit of me trying to migrate these algorithms into other programming languages as well. So far just Golang and JavaScript. The algorithms I have coded so far are simple rebalance algorithms.</p>
    <h2 id="alpaca">📁 alpaca</h2>
    <p>Alpaca is an awesome trading platform for algorithmic trading. They have outstanding docs and an easy-to-work-with API. Here are some links to <a href="https://app.alpaca.markets/login">Alpaca</a> and the <a href="https://alpaca.markets/docs/">API docs</a></p>
    <h3 id="algodata">algo-data</h3>
    <ul>
      <li>This script will give you some account information and data</li>
      <li>You need to instantiate some environment variables first<ul>
          <li>You can do this with export ENV_VAR="value"</li>
          <li>Need your API Key, API Secret Key and API Base URL</li>
        </ul>
      </li>
      <li>Run the script and get some insight into your account's performance</li>
    </ul>
    <h3 id="getacctpct">get-acct-pct</h3>
    <ul>
      <li>This is a possible addition to our WebApp</li>
      <li>This script is set up to be able to take in your API credentials as environment variables</li>
      <li>Then will find your true base value</li>
      <li>With that base value will calculate your total P/L of your account</li>
    </ul>
    <h3 id="jsonfunct">json-funct</h3>
    <ul>
      <li>This is a script of several functions that will return json type</li>
      <li>Very useful if you are wanting to build your own algorithm within Alpaca</li>
      <li>There are many other functions that could be added to this script by reading the Alpaca Docs</li>
    </ul>
    <h3 id="alpaca-1">alpaca</h3>
    <ul>
      <li>This is the original script that now just has leftover scraps that I didn't pull into a seperate script yet</li>
      <li>Still has some interesting things within but does need a clean-up</li>
      <li>Something specific that is cool in here is how to work with the Clock and whether the market is open/closed</li>
    </ul>
    <h3 id="shortabletxt">shortable-txt</h3>
    <ul>
      <li>This script will read/write to and from txt files</li>
      <li>Checks whether a specific list of Assets is shortable and will do things accordingly</li>
      <li>Pretty great option for keeping track of when Assets are hard-to-borrow or not shortable</li>
      <li>However, I would recommend using the 'redis-shortable' script over this one<ul>
          <li>redis-shortable will not use other files and instead use the Redis database for quick speeds and less storage needed</li>
        </ul>
      </li>
    </ul>
    <h2 id="python">📁 python</h2>
    <h3 id="algopy">algo.py</h3>
    <ul>
      <li>This is a simple algorithm that incorporates daily rebalancing to limit volatility and increase returns <ul>
          <li>Set up so you can edit your holdings and weights however you like</li>
        </ul>
      </li>
      <li>Includes the schedule module which works brilliantly</li>
      <li>Allows for the algorithm to be ran 24/7 and only do things when you want to</li>
      <li>There is a Dockerfile in this directory that can help with running 24/7</li>
    </ul>
    <h3 id="dockerfile">Dockerfile</h3>
    <ul>
      <li>Built using conda but you could just as easily use a different python as long as it's python3</li>
      <li>Make sure to download each of your imports that aren't in the default library for python</li>
    </ul>
    <h3 id="runningwithdocker247">Running with Docker 24/7</h3>
    <pre><code class="bash language-bash"># To run you can use to following command

$ docker pull 10.10.10.1:5000/algo-name \
&amp;&amp; docker run -d \
  --name algo_name \
  --restart unless-stopped \
  -e APCA_API_KEY_ID="some key ID" \
  -e APCA_API_SECRET_KEY="some secret KEY" \
  -e APCA_API_BASE_URL="https://api.alpaca.markets or https://paper-api.alpaca.markets" \
  10.10.10.1:5000/algo-name
</code></pre>
    <h3 id="buildpushimages">Build &amp; Push Images</h3>
    <pre><code class="bash language-bash"># To build and push you can use these commands (for portainer)

$ docker build --no-cache -t 10.10.10.1:5000/algo-name .
$ docker push 10.10.10.1:5000/algo-name
</code></pre>
    <h3 id="python-1">Python</h3>
    <p><strong>redis</strong></p>
    <ul>
      <li>Check my other repo <a href="https://github.com/austinbspencer/twitter-bot#prerequisites">twitter-bot</a> for redis install directions</li>
      <li>I also implement redis in several ways in that repo so a great resource for more examples</li>
      <li>In my <a href="https://github.com/austinbspencer/Fantasy-Twitter/blob/master/main.py">Fantasy-Twitter</a> script I also use Redis.</li>
      <li>In my opinion, Redis is the easiest to manipulate in Python. Could be biased since I've used Redis with Python the most out of the three</li>
    </ul>
    <h2 id="redisshortable">📁 redis-shortable</h2>
    <h3 id="mainpy">main.py</h3>
    <ul>
      <li>This script uses Redis database to keep track of how frequently specific Assets are actually shortable</li>
      <li>Good to know if you're wanting to short Assets that frequently fluctuate from hard-to-borrow or to un-shortable</li>
      <li>I created this script to keep track of how frequently Volatility ETF's are shortable</li>
      <li>There is a Dockerfile as well that will allow you to run this script each morning automatically</li>
    </ul>
    <h3 id="redissetup">Redis Setup</h3>
    <ul>
      <li>Download redis and activate your redis server, a simple youtube search will do</li>
      <li>Start running your redis-server</li>
      <li>Next open your redis-cli</li>
      <li>Be sure to change the requirepass within your config to secure your server</li>
      <li>Within redis-cli// &gt; config get requirepass<ol>
          <li>"requirepass"</li>
          <li>"This Will Be Empty"</li>
        </ol>
      </li>
      <li>Set your password</li>
      <li>Within redis-cli// &gt; config set requirepass yourPasswordHere (recommended at least 32 characters long)</li>
    </ul>
    <h3 id="running">Running</h3>
    <pre><code class="bash language-bash"># To run redis-shortable use the following docker command

docker pull 10.10.10.1:5000/algo-name \
&amp;&amp; docker run -d \
  --name algo_name \
  --restart unless-stopped \
  -e APCA_API_KEY_ID="some key ID" \
  -e APCA_API_SECRET_KEY="some secret KEY" \
  -e APCA_API_BASE_URL="https://api.alpaca.markets or https://paper-api.alpaca.markets" \
  10.10.10.1:5000/algo-name
</code></pre>
    <h3 id="buildandpushimage">Build and push image</h3>
    <pre><code class="bash language-bash"># To build and push you can use these commands (for portainer)

$ docker build --no-cache -t 10.10.10.1:5000/algo-name .
$ docker push 10.10.10.1:5000/algo-name
</code></pre>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>