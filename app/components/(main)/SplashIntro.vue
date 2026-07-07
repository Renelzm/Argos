<template>
  <div
    id="argos-splash"
    aria-hidden="true"
    class="splash-overlay pointer-events-none fixed inset-0 z-100 flex items-center justify-center overflow-hidden bg-slate-100"
  >
    <div class="flex flex-col items-center">
      <LogoMark :size="104" tone="mono" class="splash-boat text-black" />

      <svg class="splash-wave mt-1" width="120" height="24" viewBox="0 0 400 32" preserveAspectRatio="none">
        <defs>
          <linearGradient id="splashWaveGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#007389" />
            <stop offset="100%" stop-color="#1a5ccb" />
          </linearGradient>
        </defs>
        <path
          d="M0,16 Q25,2 50,16 T100,16 T150,16 T200,16 T250,16 T300,16 T350,16 T400,16"
          fill="none"
          stroke="url(#splashWaveGradient)"
          stroke-width="4"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
// Runs as a blocking inline script in <head>, before the splash markup below ever paints —
// this is what lets a repeat-visit skip the splash with zero flash, since Vue-driven
// (post-hydration) visibility toggling always arrives a frame or two after first paint.
useHead({
  script: [
    {
      key: 'argos-splash-gate',
      innerHTML: `
        try {
          if (sessionStorage.getItem('argos-splash-shown')) {
            document.documentElement.classList.add('argos-splash-skip');
          } else {
            sessionStorage.setItem('argos-splash-shown', '1');
          }
        } catch (e) {}
      `,
    },
  ],
})
</script>

<style scoped>
@keyframes splash-overlay {
  0%,
  78% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}

.splash-overlay {
  /* solid from the very first frame — it IS the first paint, nothing to cross-fade from;
     only the exit needs to dissolve gracefully into the real page */
  animation: splash-overlay 1.5s ease-in forwards;
}

html.argos-splash-skip .splash-overlay {
  display: none;
}

@keyframes splash-boat-in {
  from {
    opacity: 0;
    transform: scale(0.82) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes splash-boat-bob {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-4px) rotate(-2deg);
  }
}

.splash-boat {
  animation:
    splash-boat-in 380ms cubic-bezier(0.16, 1, 0.3, 1) both,
    splash-boat-bob 1.1s ease-in-out 380ms infinite;
  transform-origin: 50% 85%;
}

@keyframes splash-fade-in {
  to {
    opacity: 0.85;
  }
}

@keyframes splash-wave-flow {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-90px);
  }
}

.splash-wave {
  opacity: 0;
  animation:
    splash-fade-in 300ms ease-out 200ms both,
    splash-wave-flow 1.9s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .splash-overlay {
    display: none;
  }
}
</style>
