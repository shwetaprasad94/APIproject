function bindCalc() {
  const $operate = $('#operator');
  $operate.on('change', function changeAction() {
    const $input1 = $('#numA').val();
    const $input2 = $('#numB').val();
    const $abc = $(this).val();
    let $result = 0;

    if ($abc === 'Add') {
      $result = sum($input1, $input2);
    } else if ($abc === 'Subtract') {
      $result = difference($input1, $input2);
    } else if ($abc === 'multiply') {
      $result = multiply($input1, $input2);
    }
    $('#result').text($result);
    console.log($result);
  });
}


// If Node.js then export as public
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    bindCalc,
  };
}
