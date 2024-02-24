<script>
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableSearch } from 'flowbite-svelte';
    let searchTerm = '';
    let items = [];

    async function fetchCSVData() 
    {
        try 
        {
            const response = await fetch('src/data/sched.csv');
            const text = await response.text();
            items = parseCSV(text);
        } 
        catch (error) 
        {
            console.error('Error fetching CSV data:', error);
        }
    }


    function parseCSV(csvText) 
    {
        const rows = csvText.split('\n');
        const headers = rows[0].split(',');

        return rows.slice(1).map(row => 
        {
            const values = row.split(',');
            const opponent = values[2];
            const home = values[4];
            const schedule = values[0]; 
            const prediction = 'n/a';

            return { Opponent: opponent, Home: home, Schedule: schedule, Prediction: prediction };
        });
    }

    fetchCSVData();
    // let items = [
    //     {  Opponent: 'ORL', Home: 'DET', Schedule: 2024, Prediction:'n/a' },
    //     { Opponent: 'BOS', Home: 'NY', Schedule: 2024, Prediction:'n/a' },
    //     { Opponent: 'BKN', Home: 'MIN', Schedule: 2024, Prediction:'n/a' },
    //     { Opponent: 'Saab', Home: 'IJK', Schedule: 2024, Prediction:'n/a' }
    // ];
    $: filteredItems = items.filter((item) => item.Opponent.toLowerCase().includes(searchTerm.toLowerCase()));
</script>

<div>
    <TableSearch class="custom-table" placeholder="Search by maker name" hoverable={true} bind:inputValue={searchTerm}>
        <TableHead>
            <TableHeadCell>Opponent</TableHeadCell>
            <TableHeadCell>Home</TableHeadCell>
            <TableHeadCell>Schedule</TableHeadCell>
            <TableHeadCell>Prediction</TableHeadCell>
        </TableHead>
        <TableBody>
            {#each filteredItems as item}
                <TableBodyRow>
                    <TableBodyCell>{item.Opponent}</TableBodyCell>
                    <TableBodyCell>{item.Home}</TableBodyCell>
                    <TableBodyCell>{item.Schedule}</TableBodyCell>
                    <TableBodyCell>{item.Prediction}</TableBodyCell>
                </TableBodyRow>
            {/each}
        </TableBody>
    </TableSearch>

</div>

