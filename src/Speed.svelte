<script>
  import { setSpeed } from './videoService';

  export let video = {};

  const onChange = () => {
    setSpeed(video);
  }
</script>


<div class="speed">
  <input type="range" on:change={onChange} bind:value={video.playbackRate} min="0.5" max="3" step="0.01" >
  <label>{video.playbackRate}</label>
</div>

<style>
  .speed {
    display: flex;
    align-items: center;
  }

  label {
    width: 30px;
    text-align: right;
  }

  input[type=range] {
    -webkit-appearance: none;
    height: 8px;
    background-color: var(--color-alt);
    flex: 1;
  }

  input[type=range]:focus {
    outline: none;
  }


  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: var(--color-primary);
    height: 16px;
    width: 16px;
    border-radius: 50%;
  }
</style>