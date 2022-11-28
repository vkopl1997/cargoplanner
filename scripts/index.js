import  CompanyInfo from './classes.js';

let cargoJson = fetch('https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json')
.then(res => res.json())
.then(function(data){
    const header = document.getElementById('header');
    const paragraph = document.getElementById('email');
    const input = document.getElementById('input');
    const apple = document.getElementById('apple');
    const amex = document.getElementById('amex');
    const amazon = document.getElementById('amazon');
    const wallmart = document.getElementById('wallmart');
    const numberOfCargo = document.getElementById('number');
    function get_info(arr,name){
        const result = arr.filter(word => word.name == name )[0];
        const companyData = new CompanyInfo(result.id,result.name,result.email,result.boxes);
        return companyData;
    };
    function cargoBay(string){
        let splitted = string.split(',');
        // console.log(splitted);
        let parsed  = splitted.map(function(e) { return parseFloat(e) })
        // console.log(parsed);
        let total = parsed.reduce((accumulator, a) => accumulator + a, 0); 
        // console.log(total);
        let finalResult = Math.round(total/10);
        // console.log(finalResult);
        numberOfCargo.innerHTML = finalResult;
        // for(let i=0; i<parsed.length;i++){
        //      total += +parsed[i];
        //     console.log(total);
        // };
    }; 
    apple.addEventListener('click', () => {
        apple.classList.add('active');
        amex.classList.remove('active');
        amazon.classList.remove('active');
        wallmart.classList.remove('active');
        header.innerText = 'Apple';
        let info = get_info(data,'Apple');
        // console.log(info);
        header.innerText = info.name;
        paragraph.innerText = info.email;
        input.value = info.boxes;
        cargoBay(input.value)
    });
    wallmart.addEventListener('click', () => {
        wallmart.classList.add('active');
        amex.classList.remove('active');
        amazon.classList.remove('active');
        apple.classList.remove('active');
        header.innerText = 'Walmart';
        let info = get_info(data,'Walmart');
        // console.log(info);
        header.innerText = info.name;
        paragraph.innerText = info.email;
        input.value = info.boxes;
        cargoBay(input.value);
    });
    amazon.addEventListener('click', () => {
        amazon.classList.add('active');
        amex.classList.remove('active');
        apple.classList.remove('active');
        wallmart.classList.remove('active');
        header.innerText = 'Amazon';
        let info = get_info(data,'Amazon.com');
        // console.log(info);
        header.innerText = info.name;
        paragraph.innerText = info.email;
        input.value = info.boxes;
        cargoBay(input.value);

    });
    amex.addEventListener('click', () => {
        amex.classList.add('active');
        apple.classList.remove('active');
        amazon.classList.remove('active');
        wallmart.classList.remove('active');
        let info = get_info(data,'American Express');
        // console.log(info);
        header.innerText = info.name;
        paragraph.innerText = info.email;
        input.value = info.boxes;
        cargoBay(input.value);
    });
})
.catch(err => console.log(err));




