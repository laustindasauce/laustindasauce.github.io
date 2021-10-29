<template>
  <div>
    <h1 id="cse340spring2021project2">CSE340 Spring 2021 Project 2</h1>
    <p>Generating a lexical analyzer automatically!</p>
    <h2 id="introduction">Introduction</h2>
    <p>I will start with a high-level description of the project in this section. In subsequent sections, I will go into a detailed description of the requirements and how to go about implementing a solution that satisfies them.
      The goal of this project is to implement a lexical analyzer automatically for any list of tokens that are specified using regular expressions. The input to your program will have two parts:</p>
    <ol>
      <li>
        <p>The first part of the input is a list of tokens separated by commas and terminated with the # (hash) symbol. Each token in the list consists of a token name and a token description. The token description is a regular expression for the token. The list has the following form:</p>
        <p><strong>t1<em>name t1</em>description , t2<em>name t2</em>description , … , tk<em>name tk</em>description #</strong></p>
      </li>
      <li>
        <p>The second part of the input is a input string of letters and digits and space characters.</p>
      </li>
    </ol>
    <p>Your program will read the list of tokens, represent them internally in appropriate data structures, and then do lexical analysis on the input string to break it down into a sequence of tokens and lexeme pairs from the provided list of tokens. The output of the program will be this sequence of tokens and lexemes. If during the processing of the input string, your program cannot identify a token to match from the list, it outputs <strong>ERROR</strong> and stops.</p>
    <p>If the input to the program has a syntax error, then your program should not do any lexical analysis of the input string and instead it should output a syntax error message and exits.</p>
    <h2 id="outputformat">Output Format</h2>
    <p>The output will be either SYNTAX ERROR if the input has a syntax error or a message indicating that one or more of the tokens have expressions that are not valid (see below) or a sequence of tokens and their corresponding lexemes according to the list of tokens provided if there are no errors. More specifically, the following are the output requirements.</p>
    <ol>
      <li>
        <p>if the input to your program is not in the correct format (not according to the grammar in Section 2), your parser should output SYNTAX ERROR and nothing else, so you should make sure not to print anything before the complete parsing of the input is completed.</p>
      </li>
      <li>
        <p>if the input to your program is syntactically correct, then there are two cases to consider:</p>
      </li>
    </ol>
    <ul>
      <li>If any of the regular expressions of the tokens in the list of tokens in the input to your program can generate the empty string, then your program should output</li>
    </ul>
    <pre><code>EPSILON IS NOOOOOT A TOKEN !!! tok_1 tok_2 ... tok_k
# where **tok 1, tok 2, ..., tok k** is the list of tokens whose regular expressions can generate the empty string.
</code></pre>
    <ul>
      <li>If there is no syntax error and none of the expressions of the tokens can generate the empty string, your program should do lexical analysis on INPUT TEXT and produce a sequence of tokens and lexemes in INPUT TEXT according to the list of tokens specified in the input to your program. Each token and lexeme should be printed on a separate line. The output on a given line will be of the form
        <code>t , "lexeme"</code>
        where t is the name of a token and lexeme is the actual lexeme for the token t. If during lexical analysis of <strong>INPUT TEXT</strong>, a syntax error is encountered then <strong>ERROR</strong> is printed on a separate line and the program exits.
        In doing lexical analysis for <strong>INPUT TEXT</strong>, <strong>SPACE</strong> is treated as a separator and is otherwise ignored.
      </li>
    </ul>
    <h2 id="examples">Examples</h2>
    <p>Each of the following examples gives an input and the corresponding expected output.</p>
    <ul>
      <li>Input 1</li>
    </ul>
    <pre><code class="commandline language-commandline">t1 (a)|(b) , t2 ((a)*).(a) , t3 (((a)|(b))*).(((c)*).(c)) #
"a aac bbc aabc"
</code></pre>
    <p>This input specifies three tokens t1, t2, and t3 and an INPUT TEXT “a aac bbc aabc”. Since the input is in the correct format and none of the regular expressions generates epsilon, the output of your program should be the list tokens in the INPUT TEXT:</p>
    <ul>
      <li>Output 1</li>
    </ul>
    <pre><code class="commandline language-commandline">t1 , "a"
t3 , "aac"
t3 , "bbc"
t3 , "aabc"
</code></pre>
    <ul>
      <li>Input 2</li>
    </ul>
    <pre><code class="commandline language-commandline">t1 (a)|(b) , t2 ((a)*).(a) , t3 (((a)|(b))*).(c) # 
"a aa bbc aad aa"
</code></pre>
    <p>This input specifies three tokens t1, t2, and t3 and an INPUT TEXT “a aa bbc aad aa”. Since the input is in the correct format and none of the regular expressions generates epsilon, the output of your program should be the list tokens in the INPUT TEXT the output of the program should be</p>
    <ul>
      <li>Output 2</li>
    </ul>
    <pre><code class="commandline language-commandline">t1 , "a"
t2 , "aa"
t3 , "bbc"
t2 , "aa"
ERROR
</code></pre>
    <p>Note that doing lexical analysis for INPUT TEXT according to the list of tokens produces ERROR after the second t2 token because there is no token that starts with ’d’.</p>
    <ul>
      <li>Input 3</li>
    </ul>
    <pre><code class="commandline language-commandline">t1a (a)|(b) , t2bc (a).((a)*) , t34 (((a)|(b))*).((c)|(d))
# "aaabbcaaaa"
</code></pre>
    <p>This input specifies three tokens whose names are t1a, t2bc, and t34 and an input text “aaabbcaaaa”. Since the input is in the correct format, the output of your program should be the list tokens in the INPUT TEXT:</p>
    <ul>
      <li>Output 3</li>
    </ul>
    <pre><code class="commandline language-commandline">t34 , "aaabbc"
t2bc , "aaaa"
</code></pre>
    <ul>
      <li>Input 4</li>
    </ul>
    <pre><code class="commandline language-commandline">t1 (a)|(b) , t2 ((a)*).(a) , t3 (a)*, t4 b , t5 ((a)|(b))* #
"a aac bbc aabc"
</code></pre>
    <p>This input specifies five tokens and an INPUT TEXT “a aac bbc aabc”. Since some of the regular expressions can generate epsilon, the output:</p>
    <ul>
      <li>Output 4</li>
    </ul>
    <pre><code class="commandline language-commandline">EPSILON IS NOOOOOT A TOKEN !!! t3 t5
</code></pre>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>