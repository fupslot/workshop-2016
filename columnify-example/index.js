const columnify = require('columnify');

var data = [
  {
    dns:'0-fake-8f7a975140.safersoftware.com',
    service_id: '1014'
  }
];

  console.log(
    'Account: ' + 1234 + '\n' +
    'Deployment: ' + 12345 + '\n' +
    'Date: ' + (new Date()).toISOString() + '\n\n' +

    '-=! Perhaps WHMCS NOT online !=- \n\n' +
    'Following products must be linked manually\n\n' +
    columnify(data)
  );


  

  // 
  // );
