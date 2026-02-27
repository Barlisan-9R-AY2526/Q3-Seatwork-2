// function for discount button
function getDiscount(){
    //declare variables
    let budgetPrice = document.getElementById("budgetPrice").value;
    // compute
    let discountedPrice = Number(budgetPrice * .2).toFixed(2);


    //display output using JS method
    document.getElementById("brands").innerHTML= `        
        <div class="container text-center bg-secondary p-6 mt-3 rounded w-5">
            <h2>Recommended Brands:</h2>
            <button type="button" class="btn btn-outline-dark mt-3">Acer</button>
            <button type="button" class="btn btn-outline-dark mt-3">Apple</button>
            <button type="button" class="btn btn-outline-dark mt-3">Lenovo</button>
            <h3 class="mt-3">Discount <span class="badge bg-danger">10000</span></h3>
        </div>
        
        `;
}

function getLocation(){

    //display output using JS method
    document.getElementById("location").innerHTML= `        
        <div class="container text-center bg-secondary p-6 mt-3 rounded w-5">
            <h2>Location:</h2>
            <img src="VillMan_whitered.webp"
            <h5>
                CB2-04 SM Cherry Shaw Blvd, Brgy. Pleasant Hill, Mandaluyong City<p>
                AX1 311 3rd Flr. The Annex, SM City North EDSA, Quezon City<p>
                Unit C29 2nd Flr. SM City Cabanatuan, H. Conception Cabanatuan City<p>
                VillMan Bldg., 25 Road 7, Bagong Pag-Asa, Quezon City<p>
                Ground Level, Forum Robinsons 30 EDSA corner Pioneer St., Mandaluyong, Metro Manila, Philippines
            <h5>
        </div>
        
        `;
}
