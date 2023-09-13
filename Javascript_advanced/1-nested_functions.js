const globalVariable = 'Welcome';

function outer() {
    alert(globalVariable); // Welcome

    const course = 'Holberton';

    function inner() {
        alert(`${globalVariable} ${course}`); // Welcome Holberton

        const exclamation = '!';

        function inception() {
            alert(`${globalVariable} ${course}${exclamation}`); // Welcome Holberton!
        }
        inception();
    }
    inner();
}