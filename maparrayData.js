/* Function to print product array
    for a given array arr[] of size n */
    function productArray(arr, n)
    {

        // Base case
        if (n == 1) {
            console.log(0);
            return;
        }

        // Initialize memory to all arrays
        let left = new Array(n);
        let right = new Array(n);
        let prod = new Array(n);

        let i, j;

        /* Left most element of left array
        is always 1 */
        left[0] = 1;

        /* Rightmost most element of right
        array is always 1 */
        right[n - 1] = 1;

        /* Construct the left array */
        for (i = 1; i < n; i++)
            left[i] = arr[i - 1] * left[i - 1];

        /* Construct the right array */
        for (j = n - 2; j >= 0; j--)
            right[j] = arr[j + 1] * right[j + 1];

        /* Construct the product array using
        left[] and right[] */
        for (i = 0; i < n; i++)
            prod[i] = left[i] * right[i];

        /* print the constructed prod array */
        for (i = 0; i < n; i++)
            console.log(prod[i] + " ");

        return;
    }
    
    // Driver code
    let arr = [ 16, 17, 4, 3, 5, 2 ];
    let n = arr.length;
    console.log("The product array is :" + "</br>");

    productArray(arr, n);

// This code is contributed by mukesh07.