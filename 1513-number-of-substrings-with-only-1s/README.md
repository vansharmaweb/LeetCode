<h2><a href="https://leetcode.com/problems/number-of-substrings-with-only-1s/">1513. Number of Substrings With Only 1s</a></h2><h3>Medium</h3><hr><p>Given a binary string <code>s</code>, return <em>the number of substrings with all characters</em> <code>1</code><em>'s</em>. Since the answer may be too large, return it modulo <code>10<sup>9</sup> + 7</code>.</p>

<p>&nbsp;</p>
<p><span class="float-right -my-0.5 ml-2 inline-flex select-none items-center" data-example-lang-controls=""><span role="group" class="inline-flex h-6 items-center rounded-sd-md bg-sd-muted p-0.5" data-example-lang-toggle=""><button type="button" aria-pressed="true" class="h-5 max-w-[10rem] truncate whitespace-nowrap rounded-sd-sm border px-2 text-xs font-normal leading-none border-sd-border bg-sd-background text-sd-foreground">Original</button><button type="button" aria-pressed="false" class="h-5 max-w-[10rem] truncate whitespace-nowrap rounded-sd-sm border px-2 text-xs font-normal leading-none border-transparent text-sd-muted-foreground hover:text-sd-foreground">C++</button></span></span><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> s = "0110111"
<strong>Output:</strong> 9
<strong>Explanation:</strong> There are 9 substring in total with only 1's characters.
"1" -&gt; 5 times.
"11" -&gt; 3 times.
"111" -&gt; 1 time.</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> s = "101"
<strong>Output:</strong> 2
<strong>Explanation:</strong> Substring "1" is shown 2 times in s.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> s = "111111"
<strong>Output:</strong> 21
<strong>Explanation:</strong> Each substring contains only 1's characters.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s[i]</code> is either <code>'0'</code> or <code>'1'</code>.</li>
</ul>
