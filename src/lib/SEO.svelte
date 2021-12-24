<script lang="ts">
    import { variables } from '$lib/variables.js';
    
	export let title: string;

	export let description: string;

	export let thumbnail: string;

	const { permaLink } = variables;
</script>

<svelte:head>
	<title>{title}</title>

	<meta name="description" content={description} />

	<!-- Social media meta -->
	<meta property="og:title" content={title} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={permaLink.toString()} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={thumbnail} />

	<!-- Twitter meta -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@thermopolia_app" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={thumbnail} />
	<meta name="twitter:image:alt" content={thumbnail + "'s thumbnail"} />

	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
</svelte:head>
