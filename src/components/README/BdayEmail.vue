<template>
  <div>
    <h1 id="bdayemailhitshttpshitsseeyoufarmcomapicountincrbadgesvgurlhttps3a2f2fgithubcom2fabspen12fbdayemailcount_bg2329beb0title_bg23555555icongosvgicon_color2329beb0titlehitsedge_flatfalsehttpshitsseeyoufarmcom">bday-email <a href="https://hits.seeyoufarm.com"><img
          src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fabspen1%2Fbday-email&count_bg=%2329BEB0&title_bg=%23555555&icon=go.svg&icon_color=%2329BEB0&title=hits&edge_flat=false"
          alt="Hits"
        /></a></h1>
    <p>Python/Go script that will send a personalized birthday message over email</p>
    <h2 id="pythonversion">Python Version</h2>
    <ul>
      <li>Uses post request to my <a href="https://github.com/go-backend">Go Back-End</a> server to complete the emailing process</li>
      <li>Rest of the code is done in the Python script..</li>
      <li>Figures out if anyone in my Database has a birthday today and if so will send a personalized email with random joke</li>
    </ul>
    <h2 id="goversion">Go Version</h2>
    <ul>
      <li>No need to use the back-end server</li>
      <li>All code necessary is in this repo</li>
      <li>Main.go imports our emailer package</li>
      <li><strong>I still haven't figured out a scheduler with go to run the script each morning</strong></li>
    </ul>
    <h2 id="randomjoke">Random Joke</h2>
    <p>This is a random joke pulled from API by <a href="https://github.com/KegenGuyll/DadJokes_API">KegenGuyII</a></p>
    <ul>
      <li>Could add in where when joke is sent to person we append a set with the joke number so we don't retell any jokes to people</li>
    </ul>
    <h2 id="secure">Secure</h2>
    <ul>
      <li>Decided to add a layer of security to my back-end emailer</li>
      <li>Since this is open-source, anyone could see the url for my back-end api<ul>
          <li>Knowing this, there is now required authentification when trying to email a birthday message</li>
        </ul>
      </li>
      <li>BASE_URL is also now hidden as well</li>
    </ul>
    <h1 id="todocompleted">To Do (Completed)</h1>
    <ul>
      <li>Recreate this code in Go and remove the api calls to my back-end</li>
      <li>I can just have the Go script run as a stand-alone application</li>
      <li>This will be good for learning go and I think a better implementation for this script</li>
    </ul>
    <h3 id="abovetodosarecompletedhoweverneedtofigureoutarunscheduler">Above To Dos are completed, however need to figure out a run scheduler</h3>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>