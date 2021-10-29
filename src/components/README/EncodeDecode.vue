<template>
  <div>
    <h1 id="encodedecodeprogramforcse310asu">Encode/Decode Program for CSE 310 @ ASU</h1>
    <p>This is a program that will take std::in input and output to std::out. However both can be redirected from/to txt files. Pretty fun program to build overall.</p>
    <h2 id="howtorun">How To Run</h2>
    <ul>
      <li>Clone the repository onto your machine</li>
      <li>Create txt file to encode/decode or use some that I already have in the repository</li>
      <li>Move the txt file you want to use into the Code folder</li>
      <li>cd into the Code folder</li>
    </ul>
    <pre><code class="bash language-bash"># In terminal
cd Code/
</code></pre>
    <ul>
      <li>Build your executables for encode and decode</li>
    </ul>
    <pre><code class="bash language-bash"># In terminal
make encode
make decode
</code></pre>
    <ul>
      <li>Run commands to encode and decode your txt file</li>
    </ul>
    <pre><code class="bash language-bash"># In terminal
# Encode with insertion sort
./encode insertion &lt; your-txt-file.txt &gt; encoded-your-txt-file.txt
# OR with quick sort
./encode quick &lt; your-txt-file.txt &gt; encoded-your-txt-file.txt

# Decode with insertion sort
./decode insertion &lt; encoded-your-txt-file.txt &gt; decoded-your-txt-file.txt
# OR with quick sort
./decode quick &lt; encoded-your-txt-file.txt &gt; decoded-your-txt-file.txt
</code></pre>
    <ul>
      <li>Test to see the decode worked</li>
    </ul>
    <pre><code class="bash language-bash"># In terminal
diff decoded-your-txt-file.txt your-txt-file.txt
</code></pre>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>