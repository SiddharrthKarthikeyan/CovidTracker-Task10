let api = `https://api.covid19india.org/state_district_wise.json`;
let mainDiv = document.createElement("div");
mainDiv.setAttribute("class" , "mainContainer");
mainDiv.innerHTML = "";

async function covidDistrictData(district) {
    try {
        let responseData = await fetch(api);
        let userData = await responseData.json();

        let stateData = userData["Tamil Nadu"];
        display(stateData,district);
    }
    catch(error){
        console.log("Something went wrong");
        
        
    }
    

    
} 
covidDistrictData()


function stateWise(){
    let district = document.getElementById("districts").value;
    covidDistrictData(district);
}
mainDiv = document.createElement("div");
let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");
function display(stateData,district){
    
    mainDiv.setAttribute("class" , "displaydata");

    
    div1.setAttribute("class" , "cases");
    div1.textContent = "ACTIVE CASES";

    let h1_activeCase = document.createElement("h1");
    h1_activeCase.setAttribute("class" , "conH1");
    h1_activeCase.textContent = stateData.districtData[district].active;

    
    div2.setAttribute("class" , "cases");
    div2.textContent = "CONFIRMED CASES";

    let h2_confirmCase = document.createElement("h1");
    h2_confirmCase.setAttribute("class" , "conH1");
    h2_confirmCase.textContent = stateData.districtData[district].confirmed;

    
    div3.setAttribute("class" , "cases");
    div3.textContent = "DECEASED CASES";

    let h3_deceasedCase = document.createElement("h1");
    h3_deceasedCase.setAttribute("class" , "conH1");
    h3_deceasedCase.textContent = stateData.districtData[district].deceased;

    div1.append(h1_activeCase);
    div2.append(h2_confirmCase);
    div3.append(h3_deceasedCase);
    mainDiv.append(div1,div2,div3);
    document.body.append(mainDiv);


}


