<script>
    import 'flowbite-svelte';
    import Icon from '@iconify/svelte';
    import "../app.pcss";
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<Navbar class="fluid">
    <NavBrand>
        <Icon icon="emojione:basketball" class="size-32 self-center whitespace-nowrap text-xl font-semibold dark:text-white"/>
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">NBA Predictor</span>
    </NavBrand>
    <NavHamburger  />
    <NavUl >
        <NavLi href="/">Home</NavLi>
        <NavLi href="/about">About</NavLi>
        <NavLi href="/docs/components/navbar">Data</NavLi>
    </NavUl>
</Navbar>

<slot />