<template>
  <div>
    <h1 id="encoderdecoderbuiltwithgo">Encoder &amp; Decoder built with Go</h1>
    <p>This is an Encoder and eventually decoder that I built in Go. Originally built in C++ for CSE school project but migrated into Go. Interested to see how the run times compare for large files. So far the encoding is working nicely and I think close to finished.</p>
    <h2 id="running">Running</h2>
    <pre><code class="bash language-bash">go run main.go &lt;input.txt &gt;output.txt
</code></pre>
    <h2 id="examples">Examples</h2>
    <p>Input:</p>
    <pre><code>Mississippi
</code></pre>
    <ul>
      <li>Create each shift of character and append to str2 slice</li>
      <li>[ississippiM ssissippiMi sissippiMis issippiMiss ssippiMissi sippiMissis ippiMississ ppiMississi piMississip iMississipp Mississippi]</li>
      <li>Sort the strings in the slice lexicographically</li>
      <li>Take the last letter of each string in order</li>
      <li>Ouput the index of original string</li>
      <li>Next line output frequency of cluster followed by character
        Output:</li>
    </ul>
    <pre><code>0
1 i 1 p 2 s 1 M 1 p 1 i 2 s 2 i
</code></pre>
    <ul>
      <li>So the actual last letters are i p s s M p i s s i</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>