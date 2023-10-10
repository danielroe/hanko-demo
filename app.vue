<template>
  <TheHeader />
  <hr class="border-b-[1px] dark:border-gray-900 border-gray-100">
  <UContainer>
    <NuxtPage />
  </UContainer>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'font-sans'
  } 
})
</script>

<style>
hanko-auth,
hanko-profile {
  /* Color Scheme */
  --color: black;
  --color-shade-1: #8f9095;
  --color-shade-2: #e5e6ef;

  --brand-color: theme('colors.green.400');
  --brand-color-shade-1: theme('colors.green.600');
  --brand-contrast-color: white;

  --background-color: transparent;
  --error-color: #e82020;
  --link-color: theme('colors.green.400');
}

.dark {
  hanko-auth,
  hanko-profile {
    /* Color Scheme */
    --color: white;
    --color-shade-1: #8f9095;
    --color-shade-2: #e5e6ef;

    --brand-color: theme('colors.green.600');
    --brand-color-shade-1: theme('colors.green.600');
    --brand-contrast-color: white;

    --background-color: transparent;
    --error-color: #e82020;
    --link-color: theme('colors.green.600');
  }
}

hanko-auth,
hanko-profile {
  /* Font Styles */
  --font-weight: 400;
  --font-size: 14px;
  --font-family: Inter;

  /* Border Styles */
  --border-radius: .375rem;
  --border-style: solid;
  --border-width: 1px;

  /* Item Styles */
  --item-height: 34px;
  --item-margin: 0.5rem 0;

  /* Container Styles */
  --container-padding: 30px;
  --container-max-width: 410px;

  /* Headline Styles */
  --headline1-font-size: 24px;
  --headline1-font-weight: 600;
  --headline1-margin: 0 0 1rem;

  --headline2-font-size: 16px;
  --headline2-font-weight: 600;
  --headline2-margin: 1rem 0 0.5rem;

  /* Divider Styles */
  --divider-padding: 0 42px;
  --divider-visibility: visible;

  /* Link Styles */
  --link-text-decoration: none;
  --link-text-decoration-hover: underline;

  /* Input Styles */
  --input-min-width: 14em;

  /* Button Styles */
  --button-min-width: max-content;
}
</style>
