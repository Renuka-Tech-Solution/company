<template>
  <span ref="targetElement" :class="parentClass">{{ counted }}</span>
</template>

<script setup>
const targetElement = ref();
const props = defineProps(["parentClass", "time", "min", "max"]);

const counted = ref(props.min);
const startCountup = () => {
  const intervalId = setInterval(() => {
    const tempCount = counted.value + Math.ceil(props.max / 20);
    counted.value = tempCount > props.max ? props.max : tempCount;

    // Check if counted.value has reached a specific value (e.g., props.max)
    if (counted.value >= props.max) {
      // Stop the interval if the condition is met
      clearInterval(intervalId);
    }
  }, 50);
};
onMounted(() => {
  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCountup();
        observer.unobserve(entry.target);
        // Do something when the observed element enters the viewport
      }
    });
  }

  // Options for the Intersection Observer
  const options = {
    root: null, // Use the viewport as the root
    rootMargin: "0px", // No margin around the root
    threshold: 0.5, // Trigger when 50% of the observed element is visible
  };

  // Create an Intersection Observer and pass in the callback function and options
  const observer = new IntersectionObserver(handleIntersection, options);

  // Start observing the target element

  observer.observe(targetElement.value);
});
</script>

<style lang="scss" scoped></style>
