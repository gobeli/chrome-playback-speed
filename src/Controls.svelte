<script>
  import Divider from './Divider.svelte';
  import { videos } from './videoService.js';

  let speed = 1;
</script>

<div class="container">
  <select name="elements" id="elements">
    {#each $videos as video}
      <option value={video.index}>Video {video.index} </option>
    {/each}
  </select>
  <Divider />
  <input type="range" bind:value={speed} min="0.5" max="3" >
</div>

<style>
  .container {
    margin: auto;
    padding: 0 2rem;
  }
</style>
