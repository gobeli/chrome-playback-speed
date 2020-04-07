<script>
  $: styleHeight = (+size) * 8 + 'px';
  export let size = 1, border = false;
</script>

<div class="divider" class:border={border} style="padding-bottom: {styleHeight}">
</div>

<style>
  .divider {
    width: 100%;
  }

  .border {
    border-top: 2px solid var(--color-alt);
  }
</style>