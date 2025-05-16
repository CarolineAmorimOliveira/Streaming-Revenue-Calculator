let monthlyViewers = [4018, 4065, 5234, 5578, 5893, 4932]; 
let monthlyMemberships = [];
let monthlyRevenue = []; 
let membershipFee = 7.00; 

function calculateMemberships(viewers, percentage) { 

    let sum = 0; 

    for (let element of viewers) { 

        let membership = element * (percentage / 100); 

        membership = Math.round(membership);

        monthlyMemberships.push(membership); 

    } 

} 

function calculateMonthlyRevenue(memberships) { 

    for (let element of memberships) { 

        let revenue = element * membershipFee; 

        monthlyRevenue.push(revenue);

    } 
} 

function calculateTotalRevenue(revenue) { 

    let total = 0; 

    for (let element of revenue) { 

        total = total + element; 

    } 

    return Math.round(total); 
} 

let membershipPercentage = 6;

calculateMemberships(monthlyViewers, membershipPercentage); calculateMonthlyRevenue(monthlyMemberships); 

let totalRevenue = calculateTotalRevenue(monthlyRevenue); 

console.log("**** Monthly Revenue and Total Revenue ****"); 
console.log(); 
console.log("Monthly Memberships:", monthlyMemberships); 
console.log("Monthly Revenue:", monthlyRevenue); 
console.log("Total Revenue:", totalRevenue);
