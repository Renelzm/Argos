<template>
  <div class="flex flex-col items-center px-4 pt-2 pb-6 text-center">
    <div class="graphic-stage" :class="{ 'graphic-stage--lg': large }" aria-hidden="true">
      <div class="rings" />

      <svg class="lines-svg" viewBox="0 0 800 450">
        <path class="line-path" pathLength="1" d="M 400 225 C 250 225, 200 120, 160 120" />
        <path class="line-path" pathLength="1" d="M 400 225 C 250 225, 180 225, 120 225" />
        <path class="line-path" pathLength="1" d="M 400 225 C 250 225, 200 330, 160 330" />
        <path class="line-path" pathLength="1" d="M 400 225 C 550 225, 600 120, 640 120" />
        <path class="line-path" pathLength="1" d="M 400 225 C 550 225, 620 225, 680 225" />
        <path class="line-path" pathLength="1" d="M 400 225 C 550 225, 600 330, 640 330" />
      </svg>

      <div class="brain-slot">
        <div class="brain-float">
          <div class="brain-pop">
            <UIcon name="i-lucide-brain-circuit" :class="large ? 'size-14' : 'size-10'" class="text-accent" />
          </div>
        </div>
      </div>

      <div v-for="node in nodes" :key="node.key" class="node-slot" :class="node.position">
        <div class="node-float" :class="node.float" :style="{ animationDelay: node.floatDelay }">
          <div class="icon-node" :class="{ 'icon-node--lg': large }" :style="{ animationDelay: node.popDelay }">
            <UIcon :name="node.icon" :class="large ? 'size-7' : 'size-6'" class="text-white" />
          </div>
        </div>
      </div>
    </div>

    <p
      class="leading-relaxed font-light text-gray-500 dark:text-gray-400"
      :class="large ? 'mt-8 max-w-sm text-lg' : 'mt-6 max-w-xs text-[15px]'"
    >
      Un cerebro conectado a
      <strong class="font-semibold text-gray-900 dark:text-white">todos tus canales</strong>
    </p>

    <div
      class="font-semibold text-gray-300 dark:text-gray-600"
      :class="large ? 'mt-6 text-[11px] tracking-[0.4em]' : 'mt-5 text-[10px] tracking-[0.35em]'"
    >
      ARG.OS
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  size: { type: String, default: 'md' }, // 'md' | 'lg'
})

const large = computed(() => props.size === 'lg')

const nodes = [
  { key: 'whatsapp', icon: 'i-simple-icons-whatsapp', position: 'n-l1', float: 'float-a', popDelay: '0.7s', floatDelay: '0s' },
  { key: 'telegram', icon: 'i-simple-icons-telegram', position: 'n-l2', float: 'float-b', popDelay: '0.8s', floatDelay: '0.1s' },
  { key: 'web', icon: 'i-lucide-globe', position: 'n-l3', float: 'float-a', popDelay: '0.9s', floatDelay: '0.2s' },
  { key: 'panel', icon: 'i-lucide-layout-dashboard', position: 'n-r1', float: 'float-b', popDelay: '0.8s', floatDelay: '0.15s' },
  { key: 'sentimiento', icon: 'i-lucide-gauge', position: 'n-r2', float: 'float-a', popDelay: '0.9s', floatDelay: '0.25s' },
  { key: 'actores', icon: 'i-lucide-users', position: 'n-r3', float: 'float-b', popDelay: '1s', floatDelay: '0.3s' },
]
</script>

<style scoped>
.graphic-stage {
  position: relative;
  width: 100%;
  max-width: 380px;
  aspect-ratio: 800 / 450;
  margin-top: 1.25rem;
}

.graphic-stage--lg {
  max-width: 560px;
  margin-top: 1.75rem;
}

/* --- Concentric rings --- */
.rings {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40%;
  height: 40%;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.03);
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.05);
  transform: translate(-50%, -50%) scale(0);
  animation: mg-scale-in 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s forwards;
}

:global(.dark) .rings {
  background: rgba(255, 255, 255, 0.04);
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.03);
}

.rings::before,
.rings::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 9999px;
  background: inherit;
  box-shadow: inherit;
  transform: translate(-50%, -50%);
}

.rings::before {
  width: 165%;
  height: 165%;
}

.rings::after {
  width: 250%;
  height: 250%;
}

/* --- Connecting lines --- */
.lines-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.line-path {
  fill: none;
  stroke: #cbd5e1;
  stroke-width: 1.5;
  stroke-linecap: round;
  opacity: 0.8;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: mg-draw 1s ease-in-out 0.5s forwards;
}

:global(.dark) .line-path {
  stroke: rgba(255, 255, 255, 0.16);
}

/* --- Center brain: position (static) > float (infinite) > pop-in (one-shot) --- */
.brain-slot {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);
}

.brain-float {
  animation: mg-float 3s ease-in-out 1.3s infinite;
}

.brain-pop {
  display: flex;
  filter: drop-shadow(0 6px 10px color-mix(in srgb, var(--color-accent) 35%, transparent));
  transform: scale(0) rotate(-20deg);
  opacity: 0;
  animation: mg-pop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.55s forwards;
}

/* --- Icon nodes: position (static) > float (infinite) > pop-in box (one-shot) --- */
.node-slot {
  position: absolute;
}

.node-float {
  display: flex;
}

.icon-node {
  display: flex;
  width: 3.25rem;
  height: 3.25rem;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background: #2a2a2a;
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow:
    6px 8px 16px rgba(0, 0, 0, 0.15),
    -3px -3px 10px rgba(255, 255, 255, 0.06);
  transform: scale(0);
  opacity: 0;
  animation: mg-node-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.icon-node--lg {
  width: 4.25rem;
  height: 4.25rem;
  border-radius: 1.25rem;
}

.n-l1 {
  top: 18%;
  left: 18%;
}
.n-l2 {
  top: 50%;
  left: 8%;
  transform: translateY(-50%);
}
.n-l3 {
  bottom: 18%;
  left: 18%;
}
.n-r1 {
  top: 18%;
  right: 18%;
}
.n-r2 {
  top: 50%;
  right: 8%;
  transform: translateY(-50%);
}
.n-r3 {
  bottom: 18%;
  right: 18%;
}

.float-a {
  animation: mg-float-a 2.8s ease-in-out infinite;
}
.float-b {
  animation: mg-float-b 3.1s ease-in-out infinite;
}

@keyframes mg-scale-in {
  to {
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes mg-draw {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes mg-pop {
  to {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
}

@keyframes mg-node-in {
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes mg-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

@keyframes mg-float-a {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

@keyframes mg-float-b {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(6px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .rings,
  .line-path,
  .brain-float,
  .brain-pop,
  .icon-node,
  .float-a,
  .float-b {
    animation: none !important;
  }
  .rings {
    transform: translate(-50%, -50%) scale(1);
  }
  .line-path {
    stroke-dashoffset: 0;
  }
  .brain-pop,
  .icon-node {
    opacity: 1;
    transform: none;
  }
}
</style>
