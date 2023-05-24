<template>
  <div class="about">
    <div class="left">
      <h2>input.simp</h2>
      <hr/><br/>
      <p>
        <div class="number">1</div><span class="tag">html</span><br/>
        <div class="number">2</div>&emsp;<span class="tag">head</span><br/>
        <div class="number">3</div>&emsp;&emsp;<span class="tag">title</span> hello world!<br/>
        <div class="number">4</div>&emsp;<span class="tag">body</span><br/>
        <div class="number">5</div>&emsp;&emsp;<span class="tag">h1</span><span class="identifier">#headerId</span> hello world!<br/>
        <div class="number">6</div>&emsp;&emsp;<span class="tag">img[</span>src=<span class="string">"./img.png"</span><span class="tag"> ]</span><br/>
        <div class="number">7</div>&emsp;&emsp;<span class="tag">p</span> hello world!<br/>
        <div class="number">8</div>&emsp;&emsp;<span class="tag">div</span><span class="identifier">.divClass</span><br/>
        <div class="number">9</div>&emsp;&emsp;&emsp;<span class="tag">a[</span>href=<span class="string">"#"</span><span class="tag"> ]</span> click me!<br/>
        <div class="number">10</div>&emsp;&emsp;&emsp;<span class="tag">p</span> SIMPing is fun!
      </p>
    </div>
    <div class="right">
      <h2>output.html</h2>
      <hr/><br/>
      <p>
        <div class="number">1</div>&lt;<span class="tag">html</span>&gt;<br/>
        <div class="number">2</div>&emsp;&lt;<span class="tag">head</span>&gt;<br/>
        <div class="number">3</div>&emsp;&emsp;&lt;<span class="tag">title</span>&gt;hello world!&lt;/<span class="tag">title</span>&gt;<br/>
        <div class="number">4</div>&emsp;&lt;/<span class="tag">head</span>&gt;<br/>
        <div class="number">5</div>&emsp;&lt;<span class="tag">body</span>&gt;<br/>
        <div class="number">6</div>&emsp;&emsp;&lt;<span class="tag">h1</span> id=<span class="string">"headerId" </span>&gt;hello world!&lt;/<span class="tag">h1</span>&gt;<br/>
        <div class="number">7</div>&emsp;&emsp;&lt;<span class="tag">img</span> src=<span class="string">"./img.png" </span>/&gt;<br/>
        <div class="number">8</div>&emsp;&emsp;&lt;<span class="tag">p</span>&gt;hello world!&lt;/<span class="tag">p</span>&gt;<br/>
        <div class="number">9</div>&emsp;&emsp;&lt;<span class="tag">div</span> class=<span class="string">"divClass" </span>&gt;<br/>
        <div class="number">10</div>&emsp;&emsp;&emsp;&lt;<span class="tag">a</span> href=<span class="string">"#" </span>&gt;click me!&lt;/<span class="tag">a</span>&gt;<br/>
        <div class="number">11</div>&emsp;&emsp;&emsp;&lt;<span class="tag">p</span>&gt;SIMPing is fun!&lt;/<span class="tag">p</span>&gt;<br/>
        <div class="number">12</div>&emsp;&emsp;&lt;/<span class="tag">div</span>&gt;<br/>
        <div class="number">13</div>&emsp;&lt;/<span class="tag">body</span>&gt;<br/>
        <div class="number">14</div>&lt;/<span class="tag">html</span>&gt;
      </p>
    </div>
  </div>
</template>

<style>
.number {
  font-weight: lighter;
  width: 32px;
  float: left;
}

.string {
  color:rgb(87, 158, 64);
  font-style: italic;
}

.identifier {
  color:rgb(87, 158, 64);
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
  width: 356px;
  float: left;
  background-color: white;
  color: black;
  border: 4px solid rgb(87, 158, 64);
  margin: 8px;
  height: 512px;
}

.right {
  padding: 8px;
  width: 356px;
  float: right;
  background-color: white;
  color: black;
  border: 4px solid rgb(87, 158, 64);
  margin: 8px;
  height: 512px;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
