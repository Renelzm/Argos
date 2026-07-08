<template>
  <div class="neuron-frame" aria-hidden="true">
    <svg viewBox="0 0 300 400" class="neuron-svg" preserveAspectRatio="xMidYMid meet">
      <g class="branches">
        <path
          v-for="(b, i) in branches"
          :key="`b-${i}`"
          :d="b.d"
          pathLength="1"
          class="branch-line"
          :style="{ animationDelay: `${0.15 + i * 0.06}s` }"
        />
      </g>

      <g class="pulses">
        <circle
          v-for="(p, i) in pulses"
          :key="`p-${i}`"
          r="3.6"
          class="pulse-dot"
          :style="{
            offsetPath: `path('${p.d}')`,
            fill: p.color,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }"
        />
      </g>

      <circle
        v-for="(n, i) in nodeTips"
        :key="`n-${i}`"
        :cx="n.x"
        :cy="n.y"
        r="4.2"
        class="synapse-node"
        :style="{ animationDelay: `${0.8 + i * 0.05}s` }"
      />

      <circle v-for="(s, i) in somas" :key="`s-${i}`" :cx="s.x" :cy="s.y" r="19" class="soma" />
    </svg>
  </div>
</template>

<script setup>
// A single small dendritic cluster, sized to its own viewBox (no crop/stretch).
const somas = [{ x: 120, y: 210 }]

const branches = [
  { d: 'M120,210 C160,140 210,110 260,70' },
  { d: 'M120,210 C170,200 230,205 290,215' },
  { d: 'M120,210 C160,270 210,310 260,360' },
  { d: 'M120,210 C70,170 40,130 20,80' },
  { d: 'M120,210 C70,250 40,300 25,360' },
  { d: 'M190,120 C170,90 150,65 130,45' },
  { d: 'M190,300 C170,330 150,350 135,375' },
]

const nodeTips = [
  { x: 260, y: 70 },
  { x: 290, y: 215 },
  { x: 260, y: 360 },
  { x: 20, y: 80 },
  { x: 25, y: 360 },
  { x: 130, y: 45 },
  { x: 135, y: 375 },
]

const pulses = [
  { d: branches[0].d, color: 'var(--color-empresa)', duration: '6.6s', delay: '0s' },
  { d: branches[2].d, color: 'var(--color-gobierno)', duration: '7.2s', delay: '1.6s' },
  { d: branches[4].d, color: 'var(--color-accent)', duration: '6.9s', delay: '3.1s' },
]
</script>

<style scoped>
.neuron-frame {
  width: 100%;
  height: 100%;
}

.neuron-svg {
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
}

.branch-line {
  fill: none;
  stroke: #cbd5e1;
  stroke-width: 1.3;
  stroke-linecap: round;
  opacity: 0.65;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: neuron-draw 1s ease-in-out forwards;
}

:global(.dark) .branch-line {
  stroke: rgba(255, 255, 255, 0.16);
}

.synapse-node {
  fill: #cbd5e1;
  transform-origin: center;
  transform-box: fill-box;
  transform: scale(0);
  opacity: 0;
  animation: node-pop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

:global(.dark) .synapse-node {
  fill: rgba(255, 255, 255, 0.2);
}

.soma {
  fill: #f1f5f9;
  stroke: #cbd5e1;
  stroke-width: 1.3;
  transform-origin: center;
  transform-box: fill-box;
  transform: scale(0);
  opacity: 0;
  animation:
    soma-pop 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) 0.05s forwards,
    soma-breathe 4.5s ease-in-out 0.6s infinite;
}

:global(.dark) .soma {
  fill: rgba(255, 255, 255, 0.05);
  stroke: rgba(255, 255, 255, 0.18);
}

.pulse-dot {
  opacity: 0;
  offset-rotate: 0deg;
  animation-name: pulse-travel;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

@keyframes neuron-draw {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes node-pop {
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes soma-pop {
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes soma-breathe {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes pulse-travel {
  0% {
    offset-distance: 0%;
    opacity: 0;
  }
  8% {
    opacity: 1;
  }
  42% {
    opacity: 1;
  }
  50% {
    offset-distance: 100%;
    opacity: 0;
  }
  50.01%,
  100% {
    offset-distance: 0%;
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .branch-line {
    animation: none;
    stroke-dashoffset: 0;
  }
  .synapse-node,
  .soma {
    animation: none;
    transform: scale(1);
    opacity: 1;
  }
  .pulse-dot {
    animation: none;
    opacity: 0;
  }
}
</style>
