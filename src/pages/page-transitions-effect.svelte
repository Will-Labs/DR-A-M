<template>
  <div class="page">
    <div class="navbar">
      <div class="navbar-bg"></div>
      <div class="navbar-inner sliding">
        <div class="left">
          <Link back>
            <i class="icon icon-back"></i>
            <span class="if-not-md">Back</span>
          </Link>
        </div>
        <div class="title">${$f7route.params.effect}</div>
      </div>
    </div>
    <div class="page-content">
      <div class="block block-strong text-align-center">
        <p>This page was loaded with <b>${$f7route.params.effect}</b> transition.</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { Link } from 'framework7-svelte';
</script>