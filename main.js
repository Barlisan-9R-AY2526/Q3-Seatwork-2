// function for discount button
function discountPrice(){
    //declare variables
    let budgetPrice = document.getElementById("budgetPrice").value;
    // compute
    let discountedPrice = Number(budgetPrice * .2).toFixed(2);


    //display output using JS method
    document.getElementById().innerHTML = 
            <div class="left-container text-center bg-secondary p-6 mt-3 rounded w-5">
            <h2>Recommended Brands:</h2>
            <button type="button" class="btn btn-outline-dark mt-3">Acer</button>
            <button type="button" class="btn btn-outline-dark mt-3">Apple</button>
            <button type="button" class="btn btn-outline-dark mt-3">Lenovo</button>
            <h3 class="mt-3">Discount <span class="badge bg-danger">10000</span></h3>
        </div>
}