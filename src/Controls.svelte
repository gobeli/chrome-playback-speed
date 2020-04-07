<script>
  import Divider from './Divider.svelte';
  import Speed from './Speed.svelte';
  import { videos } from './videoService.js';

  let video = null;
  
  videos.subscribe(videos => {
    video = videos && videos[0] ? videos[0] : null;
  });
</script>

<div class="container">
  {#if $videos.length}
    <select name="elements" id="elements" bind:value={video}>
      {#each $videos as videoEl}
        <option value={videoEl}>Video {videoEl.index}</option>
      {/each}
    </select>
    <Divider />
    {#if video}
      <Speed {video} />
    {/if}
  {:else}
    <h2>No videos found</h2>
  {/if}
  <Divider size="2" />
</div>

<style>
  .container {
    margin: auto;
    padding: 0 2rem;
  }

  h2 {
    margin: 0;
    font-size: 0.9rem;
    text-align: center;
  }

  select {
    width: 100%;
    padding: 4px 8px;
    border: 1px solid var(--color-alt);
    border-radius: 4px;
  }

</style>
