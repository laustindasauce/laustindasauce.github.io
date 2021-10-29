<template>
  <div>
    <h1 id="gotradingalgo">go trading algo</h1>
    <h3 id="maingo">main.go</h3>
    <ul>
      <li>This is a simple algorithm that incorporates daily rebalancing to limit volatility and increase returns <ul>
          <li>Set up so you can edit your holdings and weights however you like</li>
        </ul>
      </li>
      <li>Environment Variable Setup<ul>
          <li>There are several ways to set and get environment variables with Go</li>
          <li>I chose to use the GoDotEnv Package<ol>
              <li>Install the GoDotEnv Package - $ go get github.com/joho/godotenv</li>
              <li>Create the .env file within the same directory as your algorithm</li>
            </ol>
          </li>
        </ul>
      </li>
      <li>Download Alpaca Packages<ul>
          <li>$ go get github.com/alpacahq/alpaca-trade-api-go/common</li>
          <li>$ go get github.com/alpacahq/alpaca-trade-api-go/polygon</li>
          <li>$ go get github.com/alpacahq/alpaca-trade-api-go/stream</li>
          <li>$ go get github.com/alpacahq/alpaca-trade-api-go/alpaca</li>
        </ul>
      </li>
      <li>Download Decimal Package<ul>
          <li>$ go get github.com/shopspring/decimal</li>
        </ul>
      </li>
    </ul>
    <h1 id="redisshortable">Redis-shortable</h1>
    <ul>
      <li>
        <p>Currently works but takes over 5 minutes to execute</p>
      </li>
      <li>
        <p><strong>Fixed the execution time to only take 2.45 seconds without go-routines</strong></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>