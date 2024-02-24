<script>
    import { page } from '$app/stores';
    import 'flowbite-svelte';
    import Icon from '@iconify/svelte';
    import "../app.pcss";
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

    $: activeUrl = $page.url.pathname;
    let activeClass = 'underline underline-offset-8';
</script>

<Navbar class="bg-darkblue py-8">
    <NavBrand>
        <Icon icon="emojione:basketball" class="size-32 self-center whitespace-nowrap text-xl font-semibold dark:text-white"/>
        <span class="self-center whitespace-nowrap font-semibold text-orange font-serif text-6xl px-8">NBA Game Predictions</span>
    </NavBrand>
    <NavUl {activeUrl} {activeClass}>
        <NavLi href="/" class='text-offwhite hover:text-orange'>Home</NavLi>
        <NavLi href="/about" class='text-offwhite hover:text-orange'>About</NavLi>
        <NavLi href="/data" class='text-offwhite hover:text-orange'>Data</NavLi>
    </NavUl>
</Navbar>

<slot />