console.log("Hello world");
add = (e) => {
    e.preventDefault(); //zabezpiecza nas przed wysłaniem do backendu
    document.getElementById('output').innerHTML = document.getElementById('imie').value;

}
document.getElementById('submit').addEventListener('click',add);

