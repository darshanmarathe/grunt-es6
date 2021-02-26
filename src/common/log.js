const logDiv = document.querySelector('#log');

export const log = msg => {
    if (logDiv) logDiv.innerHTML += msg + '<br>';
    console.log(msg)
};

<<<<<<< HEAD
const checkOne = (n) => {
    return n === 1;
}
=======


const allAddresses = function (add) {

    structure = structure + '<div>\n' +

        '<ul>';

    structure = structure + '<li>' + add.companyName + '</li>';



    if (add.companyName2 !== null) {

        structure = structure + '<li>' + add.companyName2 + '</li>';

    }



    structure = structure + '<li>' + add.line1 + '</li>';



    if (add.europeanAddressFormat === 'true') {

        structure = structure + '<li>' + add.postalCode + ' ';

        structure = structure + add.town + '</li>';

    } else {

        structure = structure + '<li>' + add.town + ' ';



        if (String(add.region) !== '' && String(add.region) !== 'null') {

            structure = structure + add.region.isocodeShort + ' ';

        }



        structure = structure + add.postalCode + '</li>';

    }



    structure = structure + '</ul>\n' +

        '</div>';

}

export { allAddresses };
>>>>>>> main
