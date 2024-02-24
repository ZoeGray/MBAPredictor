<script>
    import { page } from '$app/stores';
    import 'flowbite-svelte';
    import Icon from '@iconify/svelte';
    import "../app.pcss";
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

    $: activeUrl = $page.url.pathname;
    let activeClass = 'font-bold text-offwhite hover:text-orange';
    let nonActiveClass = 'text-offwhite hover:text-orange';
</script>

<Navbar class="border rounded-lg outline outline-double outline-8 outline-black bg-darkblue py-8">
    <NavBrand>
        <Icon icon="emojione:basketball" class="size-32 self-center whitespace-nowrap text-xl font-semibold dark:text-white"/>
        <span class="self-center whitespace-nowrap font-semibold text-orange font-serif text-6xl ps-8">NBA Game Predictions</span>
    </NavBrand>
    <NavUl {activeUrl} {activeClass} {nonActiveClass}>
        <NavLi href="/" class='size-lg'>Home</NavLi>
        <NavLi href="/about" class='size-lg'>About</NavLi>
        <NavLi href="/data" class='size-lg'>Data</NavLi>
    </NavUl>
</Navbar>

<slot />