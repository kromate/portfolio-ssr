<template>
	<DefaultLayout>
		<div class="center flex-col text-orange scale-150 h-screen">
			<h1 class="text-6xl font-bold">404</h1>
			<p class="text-xl">This pages doesn't exist</p>
			<router-link to="/" class="big-btn scale-75">Go Back Home</router-link>
		</div>
	</DefaultLayout>
</template>

<script setup lang="ts">


definePageMeta({
	layout: 'default',
})
</script>

<style scoped></style>
