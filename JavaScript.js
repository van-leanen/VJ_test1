<script>
    // Javascript code for print numbers from
    // 1 to 100 without using loop
     
    // Prints numbers from 1 to n
    function printNos(n)
    {
        if(n > 0)
        {
            printNos(n - 1);
            document.write(n + " ");
        }
        return;
    }
     
    printNos(100);
 
// This code is contributed by rameshtravel07.
</script>