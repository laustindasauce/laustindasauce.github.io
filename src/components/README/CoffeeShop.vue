<template>
  <div>
    <h1 id="coffeeshop">coffee-shop</h1>
    <p>Coffee shop built in Java from JetBrains learning. Check out the demo of the program running <a href="https://austinspencer.works/projects/java/demos/coffee/">here</a></p>
    <h1 id="running">Running</h1>
    <p>This will allow user to interact with a coffee shop the way you would in real life.</p>
    <ul>
      <li><a href="https://github.com/austinbspencer/coffee-shop/tree/main#buy">Buy</a></li>
      <li><a href="https://github.com/austinbspencer/coffee-shop/tree/main#fill">Fill</a></li>
      <li><a href="https://github.com/austinbspencer/coffee-shop/tree/main#take">Take</a></li>
      <li><a href="https://github.com/austinbspencer/coffee-shop/tree/main#buy">Remaining</a></li>
    </ul>
    <h2 id="jetbrains">JetBrains</h2>
    <p>This is a project from <a href="https://hyperskill.org/projects/33?track=1">here</a>. I chose to use Eclipse to build and run this project. Will work with whichever compiler of your choice. The main purpose of this project was to refresh my Java and OOP skills. I enjoyed creating this project for those reasons.</p>
    <h1 id="functions">Functions</h1>
    <p>List of each of the functions available to the user. Each with examples of with output/input. The symbol &gt; represents the user input. Note that it's not part of the output.</p>
    <h2 id="buy">Buy</h2>
    <p>Allows user to buy either an espresso, latte, or a cappuccino. Each has their own specific needs as far as ingredients and price.</p>
    <pre><code>Write action (buy, fill, take, remaining, exit): 
&gt; buy

What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu: 
&gt; 2
I have enough resources, making you a coffee!

Write action (buy, fill, take, remaining, exit): 
&gt; buy

What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu: 
&gt; 2
Sorry, not enough water!
</code></pre>
    <h2 id="fill">Fill</h2>
    <p>Allows user to fill each ingredient with whatever amount they desire.</p>
    <pre><code>Write action (buy, fill, take, remaining, exit): 
&gt; fill

Write how many ml of water do you want to add: 
&gt; 1000
Write how many ml of milk do you want to add: 
&gt; 0
Write how many grams of coffee beans do you want to add: 
&gt; 0
Write how many disposable cups of coffee do you want to add: 
&gt; 0
</code></pre>
    <h2 id="take">Take</h2>
    <p>Allows user to take all of the money out of the register</p>
    <pre><code>Write action (buy, fill, take, remaining, exit): 
&gt; take

I gave you $564
</code></pre>
    <h2 id="remaining">Remaining</h2>
    <p>Displays what how much of each ingredient and the amount of money available.</p>
    <pre><code>Write action (buy, fill, take, remaining, exit): 
&gt; remaining

The coffee machine has:
400 of water
540 of milk
120 of coffee beans
9 of disposable cups
$550 of money
</code></pre>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>