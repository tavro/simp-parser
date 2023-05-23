<template>
  <div class="about">
    <div class="left">
      <p>
        <span class="tag">html</span><br/>
        &emsp;<span class="tag">head</span><br/>
        &emsp;&emsp;<span class="tag">title</span> Test test test<br/>
        &emsp;<span class="tag">body</span><br/>
        &emsp;&emsp;<span class="tag">h1</span><span class="identifier">#testId</span> Test test<br/>
        &emsp;&emsp;<span class="tag">img[</span>src=<span class="string">"./test.png"</span><span class="tag"> ]</span><br/>
        &emsp;&emsp;<span class="tag">p</span> Test<br/>
        &emsp;&emsp;&emsp;<span class="tag">div</span><span class="identifier">.testClass</span><br/>
        &emsp;&emsp;&emsp;&emsp;<span class="tag">a[</span>href=<span class="string">"#"</span><span class="tag"> ]</span> Test test test test<br/>
        &emsp;&emsp;&emsp;&emsp;<span class="tag">p</span> Test test test test test
      </p>
    </div>
    <div class="right">
      <p>
        &lt;html&gt;<br/>
        &emsp;&lt;head&gt;<br/>
        &emsp;&emsp;&lt;title&gt;Test test test&lt;/title&gt;<br/>
        &emsp;&lt;/head&gt;<br/>
        &emsp;&lt;body&gt;<br/>
        &emsp;&emsp;&lt;h1 id="testId"&gt;Test test&lt;/h1&gt;<br/>
        &emsp;&emsp;&lt;img src="./test.png"/&gt;<br/>
        &emsp;&emsp;&lt;p&gt;Test<br/>
        &emsp;&emsp;&emsp;&lt;div class="testClass"&gt;<br/>
        &emsp;&emsp;&emsp;&emsp;&lt;a href="#"&gt;Test test test test&lt;/a&gt;<br/>
        &emsp;&emsp;&emsp;&lt;/div&gt;<br/>
        &emsp;&emsp;&lt;/p&gt;<br/>
        &emsp;&emsp;&lt;p&gt;Test test test test test&lt;/p&gt;<br/>
        &emsp;&lt;/body&gt;<br/>
        &lt;/html&gt;
      </p>
    </div>
  </div>
</template>

<style>
.string {
  color:rgb(0, 189, 126);
  font-style: italic;
}

.identifier {
  color:rgb(0, 189, 126);
  font-weight: bold;
}

.tag {
  font-weight: bold;
}

.about {
  margin: 8px;
}

.left {
  padding: 8px;
  width: 45%;
  float: left;
  background-color: white;
  color: black;
  border: 4px solid rgb(0, 189, 126);
  margin: 8px;
}

.right {
  padding: 8px;
  width: 45%;
  float: right;
  background-color: white;
  color: black;
  border: 4px solid rgb(0, 189, 126);
  margin: 8px;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
